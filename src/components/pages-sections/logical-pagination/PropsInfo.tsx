import Section from '@/components/common/Section';
import { H2, P } from '@/registry/components/typography/typography';
import PropsTable from '@/components/common/PropsTable';
import { logicalPaginationPropsData } from './propsData';

function PropsInfo() {
  return (
    <Section id={'logical-pagination-props'}>
      <H2>Props Table</H2>
      <PropsTable data={logicalPaginationPropsData} />
    </Section>
  );
}

export default PropsInfo;
