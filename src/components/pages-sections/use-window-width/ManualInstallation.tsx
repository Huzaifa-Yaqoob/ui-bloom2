import { P, Code } from '@/registry/components/typography/typography';
import JsTsCodeBlock from '@/blocks/code-blocks/varients/JsTsCodeBlock';
import { jsCode, tsCode } from './codeToCopy';

function ManualInstallation() {
  return (
    <div>
      <P className="mt-6">
        Simply copy and paste the following hook into your project to start
        using
        <Code> useWindowWidth </Code>. Both JavaScript and TypeScript versions
        are provided for your convenience.
      </P>

      <JsTsCodeBlock
        tscode={tsCode}
        jscode={jsCode}
        filename="use-window-width"
      />
    </div>
  );
}

export default ManualInstallation;
