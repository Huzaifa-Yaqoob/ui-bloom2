import Section from '@/components/common/Section';
import { H2, P } from '@/registry/components/typography/typography';
import PropsTable from '@/components/common/PropsTable';
import { TypographyPropsData } from './propsData';

function PropsInfo() {
  return (
    <Section id={'typography-props'}>
      <H2>Props Table</H2>
      <PropsTable data={TypographyPropsData} />
    </Section>
  );
}

export default PropsInfo;
