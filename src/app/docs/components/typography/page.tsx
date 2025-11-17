import PageSection from '@/components/common/Page';
import Intro from '@/components/pages-sections/typography/Intro';
import contentLinks from '@/components/pages-sections/typography/contentLinks';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';
import Installation from '@/components/pages-sections/typography/Installation';
import Preview from '@/components/pages-sections/typography/Preview';
import PropsInfo from '@/components/pages-sections/typography/PropsInfo';
import DocFooter from '@/components/sections/doc-footer/DocFooter';

function TypographiesPage() {
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

export default TypographiesPage;
