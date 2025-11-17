import PageSection from '@/components/common/Page';
import Intro from '@/components/pages-sections/use-window-width/Intro';
import Installation from '@/components/pages-sections/use-window-width/Installation';
import DocFooter from '@/components/sections/doc-footer/DocFooter';
import contentLinks from '@/components/pages-sections/use-window-width/contentLinks';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';

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
