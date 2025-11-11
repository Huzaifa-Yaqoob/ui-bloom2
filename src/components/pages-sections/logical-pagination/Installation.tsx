import Section from '@/components/common/Section';
import { H2, P } from '@/registry/components/typography/typography';
import Installationtab from '@/components/common/Installationtab';
import CliInstallation from '@/components/common/CliInstallation';
import ManualInstallation from '@/components/pages-sections/logical-pagination/ManualInstallation';

function Installation() {
  return (
    <Section id={'logical-pagination-installation'}>
      <H2>Installation</H2>
      <Installationtab
        cliChildren={<CliInstallation componentName={'logical-pagination'} />}
        manualChildren={<ManualInstallation />}
      />
    </Section>
  );
}

export default Installation;
