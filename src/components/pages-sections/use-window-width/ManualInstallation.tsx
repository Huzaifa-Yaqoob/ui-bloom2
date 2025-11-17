import { P } from '@/registry/components/typography/typography';
import JsTsCodeBlock from '@/blocks/code-blocks/varients/JsTsCodeBlock';
import { jsCode, tsCode } from './codeToCopy';

function ManualInstallation() {
  return (
    <div>
      <P className="mt-6">Copy Paste the following code into your project.</P>

      <JsTsCodeBlock
        tscode={tsCode}
        jscode={jsCode}
        filename="use-window-width"
      />
    </div>
  );
}

export default ManualInstallation;
