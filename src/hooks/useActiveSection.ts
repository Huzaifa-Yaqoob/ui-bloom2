'use client';

import { useEffect, useState } from 'react';

export default function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find all intersecting entries
        const intersectingEntries = entries.filter((e) => e.isIntersecting);

        if (intersectingEntries.length > 0) {
          // Sort them by their position on the page
          intersectingEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );

          // The "most active" is the one closest to the top of the viewport
          setActiveId(intersectingEntries[0].target.id);
        }
      },
      {
        // Trigger when the top of the section is 40% down from the top of the viewport
        // and the bottom is 40% up from the bottom of the viewport.
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sectionIds]);

  return activeId;
}
