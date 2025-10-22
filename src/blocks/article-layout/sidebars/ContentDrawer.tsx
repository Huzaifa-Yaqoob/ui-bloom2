'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ContentMenu } from '@/icons/inedx';
import { useEffect, useState } from 'react';
import { BreakPoints, useWindowWidth } from '@/registery/hooks/useWindowWidth';
import ContentLink from '@/blocks/article-layout/sidebars/ContentLink';

function ContentDrawer() {
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
        <ContentMenu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className={'p-4'}>
          <DrawerTitle className={'sr-only'}>Page Content SideBar</DrawerTitle>
        </DrawerHeader>
        <ContentLink />
      </DrawerContent>
    </Drawer>
  );
}

export default ContentDrawer;
