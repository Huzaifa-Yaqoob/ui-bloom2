import Section from '@/components/common/Section';
import { H2, P, Large } from '@/registry/components/typography/typography';
import ComponentsBox from '@/components/pages-sections/all-components/ComponentsGrid';

function AllComponents() {
  return (
    <Section id="all-components">
      <H2>All Components</H2>
      <P className={'mb-4'}>
        Discover every component available in <strong>UI Bloom</strong>. <br />
        Each component is built with shadcn/ui and Tailwind CSS, designed for
        flexibility and easy customization.
      </P>
      <Large>Explore our collection of reusable components.</Large>
      <ComponentsBox />
    </Section>
  );
}

export default AllComponents;
