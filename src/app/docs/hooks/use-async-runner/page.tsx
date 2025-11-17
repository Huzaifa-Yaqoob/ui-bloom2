import PageSection from '@/components/common/Page';
import Intro from '@/components/pages-sections/use-async-runner/Intro';
import contentLinks from '@/components/pages-sections/use-async-runner/contentLinks';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';
import Installation from '@/components/pages-sections/use-async-runner/Installation';
import DocFooter from '@/components/sections/doc-footer/DocFooter';

function Page() {
  return (
    <PageSection>
      <ContentLinkSetter links={contentLinks} />
      <Intro />
      <Installation />
      <DocFooter />
    </PageSection>
  );
}

export default Page;
