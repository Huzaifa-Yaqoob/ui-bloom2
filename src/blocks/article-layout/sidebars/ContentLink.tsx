'use client';

import Link from 'next/link';
import { useArticleLayout } from '@/blocks/article-layout/useArticleLayout';
import { Link as SideLink } from '@/blocks/article-layout/Provider';
import useActiveSection from '@/hooks/useActiveSection';

const levelStyles: Record<number, string> = {
  0: 'text-sm font-medium',
  1: 'pl-4 text-sm',
  2: 'pl-8 text-sm',
};

const extractSectionIds = (links: SideLink[] | undefined): string[] => {
  if (!links) return [];
  let ids: string[] = [];
  links.forEach((link) => {
    if (link.href && link.href.startsWith('#')) {
      ids.push(link.href.substring(1)); // Remove '#'
    }
    if (link.childLinks) {
      ids = ids.concat(extractSectionIds(link.childLinks));
    }
  });
  return ids;
};

function ContentLinks() {
  const { contentLinks } = useArticleLayout();

  const sectionIds = extractSectionIds(contentLinks);
  const activeSectionId = useActiveSection(sectionIds);

  console.log(activeSectionId, 'activeSectionId');

  if (!contentLinks || contentLinks.length === 0) {
    return null;
  }

  return (
    <div>
      <LinksLine
        sideNavLinks={contentLinks}
        order={0}
        activeSectionId={activeSectionId}
      />
    </div>
  );
}

function LinksLine({
  sideNavLinks,
  order,
  activeSectionId,
}: {
  sideNavLinks?: SideLink[];
  order: number;
  activeSectionId: string | null;
}) {
  if (!sideNavLinks || order > 2) {
    return null;
  }

  const baseLinkClasses =
    'flex items-center rounded-md px-3 py-2 transition-colors duration-200 hover:underline underline-offset-4';
  const inactiveClasses = 'text-gray-600';
  const activeClasses = 'font-semibold text-gray-900';

  return (
    <div className="flex flex-col gap-1">
      {sideNavLinks.map((link, index) => {
        // Check if the current link's href (without '#') matches the activeSectionId
        const isActive =
          activeSectionId && link.href.substring(1) === activeSectionId;
        return (
          <div key={link.href + index}>
            {' '}
            {/* Using href as key, assuming it's unique for sections */}
            <Link
              href={link.href}
              className={`${baseLinkClasses} ${levelStyles[order] ?? ''} ${isActive ? activeClasses : inactiveClasses}`}
            >
              {link.name}
            </Link>
            <LinksLine
              order={order + 1}
              sideNavLinks={link.childLinks}
              activeSectionId={activeSectionId}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ContentLinks;
