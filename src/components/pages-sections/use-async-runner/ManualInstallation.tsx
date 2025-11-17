import { P } from '@/registry/components/typography/typography';
import JsxTsxCode from '@/blocks/code-blocks/varients/JsxTsxCode';
import { jsCode, tsCode } from './codeToCopy';

function ManualInstallation() {
  return (
    <div>
      <P className="mt-6">
        To start using this hook, simply copy and paste the following code into
        your project. You can choose either the JavaScript or TypeScript version
        based on your setup.
      </P>

      <JsxTsxCode
        jsxcode={jsCode}
        tsxcode={tsCode}
        filename="use-async-runner"
      />
    </div>
  );
}

export default ManualInstallation;
