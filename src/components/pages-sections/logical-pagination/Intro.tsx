import Section from '@/components/common/Section';
import { H2, P } from '@/registry/components/typography/typography';

function Intro() {
  return (
    <Section id="logical-pagination-intro">
      <H2>Logical Pagination</H2>
      <P>
        The <strong>Logical Pagination</strong> component provides a responsive,
        intelligent way to manage page navigation. It dynamically displays page
        numbers based on the active page and the total number of pages — keeping
        your pagination compact and user-friendly.
        <br />
        Designed with flexibility in mind, it’s fully customizable, allowing you
        to adapt styles, behavior, and logic to fit your project’s specific
        needs.
      </P>
    </Section>
  );
}

export default Intro;
