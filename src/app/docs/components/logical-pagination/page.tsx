import PageSection from '@/components/common/Page';
import Intro from '@/components/pages-sections/logical-pagination/Intro';
import contentLinks from '@/components/pages-sections/logical-pagination/contentLinks';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';

function Page() {
  return (
    <PageSection>
      <ContentLinkSetter links={contentLinks} />
      <Intro />
    </PageSection>
  );
}

export default Page;
