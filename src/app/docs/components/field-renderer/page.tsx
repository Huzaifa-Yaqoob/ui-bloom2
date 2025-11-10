import contentLinks from '@/components/pages-sections/field-renderer/contentLinks';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';
import PageSection from '@/components/common/Page';
import Intro from '@/components/pages-sections/field-renderer/Intro';
import Installation from '@/components/pages-sections/field-renderer/Installation';

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
