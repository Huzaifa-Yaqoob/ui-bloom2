'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import { AllLinks } from '@/components/sections/navbar/links';

function NavLinks() {
  const pathname = usePathname();

  return (
    <div className={'hidden flex-grow items-center gap-4 sm:flex'}>
      {AllLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={buttonVariants({
            variant: pathname === link.href ? 'default' : 'ghost',
          })}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
