'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ContentMenu } from '@/icons';
import { useEffect, useState } from 'react';
import { BreakPoints, useWindowWidth } from '@/registry/hooks/useWindowWidth';
import ContentLink from '@/blocks/article-layout/sidebars/ContentLink';

function ContentDrawer({ fromSideBar = false }: { fromSideBar?: boolean }) {
  const [open, setOpen] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    // Close the drawer if it's open and the screen becomes 'md' or larger
    if (open && windowWidth && windowWidth >= BreakPoints.md) {
      setOpen(false);
    }
  }, [windowWidth, open]);

  return (
    <Drawer direction={'right'} open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        {fromSideBar ? (
          <div className={'mb-4 flex items-center gap-2'}>
            <ContentMenu />
            <span className={'font-bold'}>Content Menu</span>
          </div>
        ) : (
          <ContentMenu />
        )}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className={'sr-only'}>Page Content SideBar</DrawerTitle>
        </DrawerHeader>
        <ContentLink />
      </DrawerContent>
    </Drawer>
  );
}

export default ContentDrawer;
