import AllComponents from '@/components/pages-sections/all-hooks/AllComponents';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';
import PageSection from '@/components/common/Page';
import contentLinks from '@/components/pages-sections/all-hooks/contentLinks';
import DocFooter from '@/components/sections/doc-footer/DocFooter';
import GithubContribute from '@/components/common/GithubContribute';

function Page() {
  return (
    <PageSection>
      <ContentLinkSetter links={contentLinks} />
      <AllComponents />
      <GithubContribute />
      <DocFooter />
    </PageSection>
  );
}

export default Page;
