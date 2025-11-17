import Page from '@/components/common/Page';
import Introduction from '@/components/pages-sections/getting-started/Introduction';
import Installation from '@/components/pages-sections/getting-started/Installation';
import DocFooter from '@/components/sections/doc-footer/DocFooter';
import ContentLinkSetter from '@/components/common/ContentLinkSetter';
import contentLinks from '@/components/pages-sections/getting-started/contentLinks';

function Components() {
  return (
    <Page>
      <ContentLinkSetter links={contentLinks} />
      <Introduction />
      <Installation />
      <DocFooter />
    </Page>
  );
}

export default Components;
