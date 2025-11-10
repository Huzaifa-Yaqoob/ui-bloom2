import Section from '@/components/common/Section';
import { H2 } from '@/registry/components/typography/typography';
import Installationtab from '@/components/common/Installationtab';

function Installation() {
  return (
    <Section id="field-renderer-installation">
      <H2>Installation</H2>
      <Installationtab cliChildren={'cli'} manualChildren={'manual'} />
    </Section>
  );
}

export default Installation;
