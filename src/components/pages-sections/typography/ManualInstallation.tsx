import { P } from '@/registry/components/typography/typography';
import JsxTsxCode from '@/blocks/code-blocks/varients/JsxTsxCode';
import BashTabInstall from '@/blocks/code-blocks/varients/BashTabInstall';
import { jsxCode, tsxCode } from './codeToCopy';

function ManualInstallation() {
  return (
    <div>
      <P>
        Install the required dependency from the Radix UI library to enable the
        core functionality used in this component.
      </P>

      <BashTabInstall value={'@radix-ui/react-slot'} />

      <P className="mt-6">
        After installing the dependency, add the main component code below. This
        implementation includes the essential structure, logic, and
        customization points, allowing you to adapt it to your project’s unique
        requirements with ease.
      </P>

      <JsxTsxCode jsxcode={jsxCode} tsxcode={tsxCode} filename="typography" />
    </div>
  );
}

export default ManualInstallation;
