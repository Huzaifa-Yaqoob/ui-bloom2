import contentLinks from '@/components/pages-sections/field-renderer/contentLinks';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';
import PageSection from '@/components/common/Page';
import Intro from '@/components/pages-sections/field-renderer/Intro';

function Page() {
  return (
    <PageSection>
      <ContentLinkSetter links={contentLinks} />
      <Intro />
    </PageSection>
  );
}

export default Page;
