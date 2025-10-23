'use client';

import { useEffect, useRef, useState } from 'react';

export default function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Cleanup previous observer
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);

        if (intersecting.length > 0) {
          // Sort by position on the page
          intersecting.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );

          // Default to the topmost visible section
          let activeEntry = intersecting[0];

          // If multiple are intersecting, check for nested sections
          if (intersecting.length > 1) {
            // Find if one is a child of another, prefer the child
            const child = intersecting.find((entry) => {
              const parent = intersecting.find(
                (p) => p.target.contains(entry.target) && p !== entry
              );
              return parent !== undefined;
            });

            if (child) {
              activeEntry = child;
            }
          }

          setActiveId(activeEntry.target.id);
        }
      },
      {
        // A thin "line" at 25% from the top of the viewport.
        // A section is active if its top passes this line.
        rootMargin: '-25% 0px -75% 0px',
        threshold: 0,
      }
    );

    const currentObserver = observer.current;

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) currentObserver.observe(el);
    });

    return () => {
      currentObserver.disconnect();
    };
  }, [sectionIds]);

  return activeId;
}
