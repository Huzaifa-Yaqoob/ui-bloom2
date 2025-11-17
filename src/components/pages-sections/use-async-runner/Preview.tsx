import Section from '@/components/common/Section';
import { H2, P } from '@/registry/components/typography/typography';
import PreviewComponent, {
  tsxCode,
  jsxCode,
} from '@/components/pages-sections/use-async-runner/PreviewComponent';
import CodePreview from '@/blocks/code-blocks/varients/CodePreview';

function Preview() {
  return (
    <Section id="use-async-runner-preview">
      <H2>Preview</H2>
      <P>Below is an example how you can use asyncrunner in your project.</P>

      <CodePreview
        children={<PreviewComponent />}
        code={{ tsxCode, jsxCode }}
      />
    </Section>
  );
}

export default Preview;
