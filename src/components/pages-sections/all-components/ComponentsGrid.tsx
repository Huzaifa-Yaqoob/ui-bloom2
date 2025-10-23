'use client';

import allComponentLinks from '@/components/pages-sections/all-components/allComponentLinks';
import Link from 'next/link';
import { Link as LinkType } from '@/blocks/article-layout/Provider';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function ComponentsBox() {
  const [links, setLinks] = useState<LinkType[]>(allComponentLinks);

  return (
    <div className={'mt-4 mt-8 rounded-lg border p-4 sm:pt-8'}>
      <div className={'flex justify-end'}>
        <Input
          onChange={(e) => {
            const search = e.target.value.toLowerCase();
            const filteredLinks = allComponentLinks.filter((link) =>
              link.name.toLowerCase().includes(search)
            );
            setLinks(filteredLinks);
          }}
          placeholder="Search Components"
          className="border-primary max-w-sm"
        />
      </div>
      <ComponentsGrid links={links} />
    </div>
  );
}

function ComponentsGrid({ links }: { links: LinkType[] }) {
  return (
    <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((component) => (
        <Link
          key={component.href}
          href={component.href}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'min-h-16 bg-transparent shadow-none'
          )}
        >
          {component.name}
        </Link>
      ))}
    </div>
  );
}

export default ComponentsBox;
