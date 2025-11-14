import Section from '@/components/common/Section';
import { H2, P } from '@/registry/components/typography/typography';
import PropsTable from '@/components/common/PropsTable';
import { propsData } from './propsData';

function Table() {
  return (
    <Section id={'logical-pagination-props'}>
      <H2>Props Table</H2>
      <PropsTable data={propsData} />
    </Section>
  );
}

export default Table;
