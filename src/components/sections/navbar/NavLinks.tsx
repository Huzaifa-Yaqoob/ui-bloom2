'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';

const AllLinks = [
  { href: '/', label: 'Home' },
  { href: '/components', label: 'Components' },
  { href: '/docs', label: 'Documentation' },
  { href: '/blogs', label: 'Blogs' },
];

function NavLinks() {
  const pathname = usePathname();

  return (
    <div className={'flex flex-grow items-center gap-4'}>
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
