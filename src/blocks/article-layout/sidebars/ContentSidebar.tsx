import ContentLink from '@/blocks/article-layout/sidebars/ContentLink';

function ContentSidebar() {
  return (
    <div
      className={
        'bg-accent hidden max-w-64 min-w-48 overflow-y-scroll rounded-2xl p-4 md:block lg:min-w-64'
      }
    >
      <ContentLink />
    </div>
  );
}

export default ContentSidebar;
