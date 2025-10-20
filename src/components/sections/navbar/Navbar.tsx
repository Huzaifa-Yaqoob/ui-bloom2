import Section from '@/components/common/Section';
import { UIBloomIcon } from '@/icons/inedx';
import NavLinks from '@/components/sections/navbar/NavLinks';
import NavFeatures from '@/components/sections/navbar/NavFeatures';
import NavDrawer from '@/components/sections/navbar/NavDrawer';

function Navbar() {
  return (
    <Section asChild={true} className={'sticky top-0 z-50'}>
      <nav className={'flex items-center gap-4'}>
        <UIBloomIcon width={48} height={48} />
        <NavLinks />
        <NavFeatures />
        <NavDrawer />
      </nav>
    </Section>
  );
}

export default Navbar;
