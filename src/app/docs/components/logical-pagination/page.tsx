import PageSection from '@/components/common/Page';
import Intro from '@/components/pages-sections/logical-pagination/Intro';
import contentLinks from '@/components/pages-sections/logical-pagination/contentLinks';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';
import Installation from '@/components/pages-sections/logical-pagination/Installation';

function Page() {
  return (
    <PageSection>
      <ContentLinkSetter links={contentLinks} />
      <Intro />
      <Installation />
    </PageSection>
  );
}

export default Page;
