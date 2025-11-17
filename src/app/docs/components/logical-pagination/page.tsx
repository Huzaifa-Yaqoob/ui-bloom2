import PageSection from '@/components/common/Page';
import Intro from '@/components/pages-sections/logical-pagination/Intro';
import contentLinks from '@/components/pages-sections/logical-pagination/contentLinks';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';
import Installation from '@/components/pages-sections/logical-pagination/Installation';
import Preview from '@/components/pages-sections/logical-pagination/Preview';
import PropsInfo from '@/components/pages-sections/logical-pagination/PropsInfo';
import DocFooter from '@/components/sections/doc-footer/DocFooter';

function Page() {
  return (
    <PageSection>
      <ContentLinkSetter links={contentLinks} />
      <Intro />
      <Installation />
      <Preview />
      <PropsInfo />
      <DocFooter />
    </PageSection>
  );
}

export default Page;
