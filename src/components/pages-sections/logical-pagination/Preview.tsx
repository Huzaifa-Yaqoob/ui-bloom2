import Section from '@/components/common/Section';
import { H2, P } from '@/registry/components/typography/typography';
import PreviewComponent, {
  PreviewCode,
} from '@/components/pages-sections/logical-pagination/PreviewComponent';
import CodePreview from '@/blocks/code-blocks/varients/CodePreview';

function Preview() {
  return (
    <Section id="logical-pagination-preview">
      <H2>Preview</H2>
      <P>
        Below is an interactive preview of the{' '}
        <strong>Logical Pagination</strong>
        component. This example demonstrates how it behaves in a real layout,
        including how it adapts based on the current page.
      </P>

      <CodePreview
        children={<PreviewComponent />}
        code={{ tsxCode: PreviewCode }}
      />
    </Section>
  );
}

export default Preview;
