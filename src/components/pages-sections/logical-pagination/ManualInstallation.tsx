import JsTsCodeBlock from '@/blocks/code-blocks/varients/JsTsCodeBlock';
import {
  jsCode,
  tsCode,
} from '@/components/pages-sections/use-windo-width/codeToCopy';
import { P } from '@/registry/components/typography/typography';
import JsxTsxCode from '@/blocks/code-blocks/varients/JsxTsxCode';
import { jsxCode, tsxCode } from './codeToCopy';

function ManualInstallation() {
  return (
    <div>
      <P>
        To manually set up the <strong>Logical Pagination</strong> component,
        start by adding the following hook to your project. This hook handles
        responsive behavior and helps determine the current window width for
        adaptive pagination.
      </P>

      <JsTsCodeBlock
        tscode={tsCode}
        jscode={jsCode}
        filename="use-window-width"
      />

      <P className="mt-6">
        Next, add the main component code below. This defines the core logic and
        UI for pagination, allowing you to fully customize it based on your
        project’s needs.
      </P>

      <JsxTsxCode
        jsxcode={jsxCode}
        tsxcode={tsxCode}
        filename="logical-pagination"
      />
    </div>
  );
}

export default ManualInstallation;
