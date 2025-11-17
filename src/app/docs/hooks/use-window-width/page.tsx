import PageSection from '@/components/common/Page';
import Intro from '@/components/pages-sections/use-window-width/Intro';
import Installation from '@/components/pages-sections/use-window-width/Installation';
import DocFooter from '@/components/sections/doc-footer/DocFooter';

function Page() {
  return (
    <PageSection>
      <Intro />
      <Installation />
      <DocFooter />
    </PageSection>
  );
}

export default Page;
