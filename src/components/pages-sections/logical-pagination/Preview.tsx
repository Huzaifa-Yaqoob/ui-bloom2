import Section from '@/components/common/Section';
import { H2, P } from '@/registry/components/typography/typography';
import PreviewComponent, {
  PreviewCode,
} from '@/components/pages-sections/logical-pagination/PreviewComponent';
import CodePreview from '@/blocks/code-blocks/varients/CodePreview';

function Preview() {
  return (
    <Section id={'logical-pagination-usage'}>
      <H2>Preview</H2>
      <P>
        Here's how to use the <strong>Logical Pagination</strong> component:
      </P>
      <CodePreview
        children={<PreviewComponent />}
        code={{ tsxCode: PreviewCode }}
      />
    </Section>
  );
}

export default Preview;
