'use client';

import { createContext, ReactNode, useState, useRef, useEffect } from 'react';
import ContentSidebar from '@/blocks/article-layout/sidebars/ContentSidebar';
import LinkSidebar from '@/blocks/article-layout/sidebars/LinkSidebar';
import LinkSideDrawer from '@/blocks/article-layout/sidebars/LinkSideDrawer';
import ContentDrawer from '@/blocks/article-layout/sidebars/ContentDrawer';
import Navbar from '@/components/sections/navbar/Navbar';

export const ArticleLayoutContext = createContext<any>(null);

export const ArticleLayoutProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, setState] = useState<any>(null);
  const [navLinks, setNavLinks] = useState<boolean>(false);
  const [contentLinks, setContentLinks] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      // Measure the height of the navbar container once it's rendered
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <ArticleLayoutContext.Provider
      value={{
        state,
        setState,
        navLinks,
        setNavLinks,
        contentLinks,
        setContentLinks,
      }}
    >
      <div ref={navbarRef}>
        <Navbar />
      </div>
      <div
        className={'flex flex-grow grid-cols-3 gap-4 overflow-y-hidden p-2'}
        style={{ height: `calc(100vh - ${navbarHeight}px)` }}
      >
        <LinkSidebar />
        {/*<LinkSideDrawer />*/}
        {/*<ContentDrawer />*/}
        <main
          className={'bg-secondary flex-grow overflow-y-scroll rounded-2xl p-2'}
        >
          {children}
        </main>
        <ContentSidebar />
      </div>
    </ArticleLayoutContext.Provider>
  );
};
