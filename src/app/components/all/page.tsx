import AllComponents from '@/components/pages-sections/all-components/AllComponents';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';
import PageSection from '@/components/common/Page';
import contentLinks from '@/components/pages-sections/all-components/contentLinks';

function Page() {
  return (
    <PageSection>
      <ContentLinkSetter links={contentLinks} />
      <AllComponents />
    </PageSection>
  );
}

export default Page;
