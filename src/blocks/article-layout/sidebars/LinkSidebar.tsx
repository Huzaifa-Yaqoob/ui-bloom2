import PageLinks from '@/blocks/article-layout/sidebars/PageLinks';

function LinkSidebar() {
  return (
    <div
      className={
        'bg-sidebar hidden max-w-64 min-w-48 overflow-y-scroll rounded-2xl p-4 sm:block lg:min-w-64'
      }
    >
      <PageLinks />
    </div>
  );
}

export default LinkSidebar;
