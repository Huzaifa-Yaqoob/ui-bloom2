import Section from '@/components/common/Section';
import { H2, P } from '@/registry/components/typography/typography';

function Intro() {
  return (
    <Section id={'logical-pagination-intro'}>
      <H2>Logical Pagination</H2>
      <P>
        Logical pagination is a technique used to navigate through a large
        dataset by dividing it into smaller, manageable chunks or pages. This
        approach helps improve performance, user experience, and scalability.
      </P>
    </Section>
  );
}

export default Intro;
