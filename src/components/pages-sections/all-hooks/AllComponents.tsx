import Section from '@/components/common/Section';
import { H2, P, Large } from '@/registry/components/typography/typography';
import ComponentsBox from '@/components/pages-sections/all-hooks/ComponentsGrid';

function AllComponents() {
  return (
    <Section id="hooks-docs">
      <H2>All Hooks</H2>
      <P className={'mb-4'}>
        Discover every hook available in <strong>UI Bloom</strong>. <br />
        Each hook is built with shadcn/ui and Tailwind CSS, designed for
        flexibility and easy customization.
      </P>
      <Large>Explore our collection of reusable hooks.</Large>
      <ComponentsBox />
    </Section>
  );
}

export default AllComponents;
