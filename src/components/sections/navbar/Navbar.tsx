import Section from '@/components/common/Section';

function Navbar() {
  return (
    <Section asChild={true} className={'sticky top-0 z-50'}>
      <nav>Navbar</nav>
    </Section>
  );
}

export default Navbar;
