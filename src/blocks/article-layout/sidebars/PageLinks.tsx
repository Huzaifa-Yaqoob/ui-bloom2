'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useArticleLayout } from '@/blocks/article-layout/useArticleLayout';
import { Link as SideLink } from '@/blocks/article-layout/Provider';
import { cn } from '@/lib/utils';

const levelStyles: Record<number, string> = {
  0: 'text-[13px] font-semibold tracking-tight',
  1: 'pl-4 text-[13px] font-normal',
  2: 'pl-8 text-[13px] font-normal',
};

// Helper function to check if any child link matches the current pathname
function hasActiveChild(
  links: SideLink[] | undefined,
  pathname: string
): boolean {
  if (!links) return false;

  return links.some((link) => {
    if (link.href === pathname) return true;
    return hasActiveChild(link.childLinks, pathname);
  });
}

function PageLinks() {
  const pathname = usePathname();
  const { sideNavLinks } = useArticleLayout();

  if (!sideNavLinks || sideNavLinks.length === 0) {
    return null;
  }

  return (
    <nav className="space-y-0.5" aria-label="Page navigation">
      <LinksList sideNavLinks={sideNavLinks} level={0} pathname={pathname} />
    </nav>
  );
}

function LinksList({
  sideNavLinks,
  level,
  pathname,
}: {
  sideNavLinks?: SideLink[];
  level: number;
  pathname: string;
}) {
  if (!sideNavLinks || level > 2) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1">
      {sideNavLinks.map((link) => (
        <LinkItem
          key={link.href}
          link={link}
          level={level}
          pathname={pathname}
        />
      ))}
    </div>
  );
}

function LinkItem({
  link,
  level,
  pathname,
}: {
  link: SideLink;
  level: number;
  pathname: string;
}) {
  const isActive = pathname === link.href;
  const hasChildren = link.childLinks && link.childLinks.length > 0;
  const isParentOfActive = hasActiveChild(link.childLinks, pathname);

  const baseLinkClasses =
    'group relative flex items-center rounded-lg px-3 py-2.5 transition-all duration-200 ease-in-out';
  const inactiveClasses =
    'text-muted-foreground hover:text-foreground hover:bg-accent/70';
  const parentActiveClasses =
    'bg-primary/10 text-primary font-semibold shadow-sm';
  const childActiveClasses = 'text-primary font-semibold';

  return (
    <div className="relative">
      <Link
        href={link.href}
        className={cn(
          baseLinkClasses,
          levelStyles[level] ?? '',
          isParentOfActive
            ? parentActiveClasses
            : isActive
              ? hasChildren
                ? parentActiveClasses
                : childActiveClasses
              : inactiveClasses
        )}
      >
        <span className="truncate leading-relaxed">{link.name}</span>
      </Link>
      {hasChildren && (
        <div className="mt-1">
          <LinksList
            level={level + 1}
            sideNavLinks={link.childLinks}
            pathname={pathname}
          />
        </div>
      )}
    </div>
  );
}

export default PageLinks;
