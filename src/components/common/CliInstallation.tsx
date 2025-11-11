import BashTab from '@/blocks/code-blocks/varients/BashTab';
import { P } from '@/registry/components/typography/typography';

function CliInstallation({ componentName }: { componentName: string }) {
  return (
    <div>
      <P>Copy and paste it into your terminal</P>
      <BashTab value={componentName} />
    </div>
  );
}

export default CliInstallation;
