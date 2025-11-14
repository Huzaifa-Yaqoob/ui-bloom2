import Section from '@/components/common/Section';
import { H2, P } from '@/registry/components/typography/typography';
import Installationtab from '@/components/common/Installationtab';
import CliInstallation from '@/components/common/CliInstallation';
import ManualInstallation from '@/components/pages-sections/typography/ManualInstallation';

function Installation() {
  return (
    <Section id={'typography-installation'}>
      <H2>Installation</H2>
      <Installationtab
        cliChildren={<CliInstallation componentName={'typography'} />}
        manualChildren={<ManualInstallation />}
      />
    </Section>
  );
}

export default Installation;
