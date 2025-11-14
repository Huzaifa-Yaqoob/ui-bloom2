import PageSection from '@/components/common/Page';
import Intro from '@/components/pages-sections/typography/Intro';
import contentLinks from '@/components/pages-sections/typography/contentLinks';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';
import Installation from '@/components/pages-sections/typography/Installation';

function TypographiesPage() {
  return (
    <PageSection>
      <ContentLinkSetter links={contentLinks} />
      <Intro />
      <Installation />
    </PageSection>
  );
}

export default TypographiesPage;
