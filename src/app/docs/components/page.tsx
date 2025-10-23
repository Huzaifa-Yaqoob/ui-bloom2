import AllComponents from '@/components/pages-sections/all-components/AllComponents';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';
import PageSection from '@/components/common/Page';
import contentLinks from '@/components/pages-sections/all-components/contentLinks';
import DocFooter from '@/components/sections/doc-footer/DocFooter';
import GithubContribute from '@/components/pages-sections/all-components/GithubContribute';

function Page() {
  return (
    <PageSection>
      <ContentLinkSetter links={contentLinks} />
      <AllComponents />
      <GithubContribute />
      <DocFooter
        nextLink={{
          href: '/docs/field-renderer',
          name: 'Field Renderer',
        }}
        prevLink={{
          name: 'Getting Started',
          href: '/getting-started',
        }}
      />
    </PageSection>
  );
}

export default Page;
