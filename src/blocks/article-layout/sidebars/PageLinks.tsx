'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useArticleLayout } from '@/blocks/article-layout/useArticleLayout';
import { Link as SideLink } from '@/blocks/article-layout/Provider';

const levelStyles: Record<number, string> = {
  0: 'text-sm font-medium',
  1: 'pl-4 text-sm',
  2: 'pl-8 text-sm',
};

function PageLinks() {
  const { sideNavLinks } = useArticleLayout();

  if (!sideNavLinks || sideNavLinks.length === 0) {
    return null;
  }

  return (
    <div>
      <LinksLine sideNavLinks={sideNavLinks} order={0} />
    </div>
  );
}

function LinksLine({
  sideNavLinks,
  order,
}: {
  sideNavLinks?: SideLink[];
  order: number;
}) {
  const pathname = usePathname();

  if (!sideNavLinks || order > 2) {
    return null;
  }

  const baseLinkClasses =
    'flex items-center rounded-md px-3 py-2 transition-colors duration-200';
  const inactiveClasses = 'text-gray-600 hover:bg-gray-100 hover:text-gray-900';
  const activeClasses = 'bg-gray-100 font-semibold text-gray-900';

  return (
    <div className="flex flex-col gap-1">
      {sideNavLinks.map((link, index) => {
        const isActive = pathname === link.href;
        return (
          <div key={link.href + index}>
            <Link
              href={link.href}
              className={`${baseLinkClasses} ${levelStyles[order] ?? ''} ${isActive ? activeClasses : inactiveClasses}`}
            >
              {link.name}
            </Link>
            <LinksLine order={order + 1} sideNavLinks={link.childLinks} />
          </div>
        );
      })}
    </div>
  );
}

export default PageLinks;
