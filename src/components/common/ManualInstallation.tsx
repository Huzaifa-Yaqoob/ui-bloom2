import BashTabInstall from '@/blocks/code-blocks/varients/BashTabInstall';

interface ManualInstallationProps {
  value: string;
  // jsxCode: string;
  // tsxCode : string;
}

function ManualInstallation({ value }: ManualInstallationProps) {
  return (
    <div>
      <BashTabInstall value={value} />
    </div>
  );
}

export default ManualInstallation;
