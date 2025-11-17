import Section from '@/components/common/Section';
import { H2 } from '@/registry/components/typography/typography';
import Installationtab from '@/components/common/Installationtab';
import CliInstallation from '@/components/common/CliInstallation';
import ManualInstallation from '@/components/pages-sections/use-window-width/ManualInstallation';

function Installation() {
  return (
    <Section id={'use-window-width-installation'}>
      <H2>Installation</H2>
      <Installationtab
        cliChildren={<CliInstallation componentName={'use-window-width'} />}
        manualChildren={<ManualInstallation />}
      />
    </Section>
  );
}

export default Installation;
