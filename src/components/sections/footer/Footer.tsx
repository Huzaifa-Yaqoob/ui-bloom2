import type { ComponentProps } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Heart } from '@/icons/Heart';

function FooterLink(props: ComponentProps<'a'>) {
  return (
    <a
      {...props}
      className={cn(
        buttonVariants({
          variant: 'link',
        }),
        'cursor-pointer px-0 text-base',
        props.className
      )}
      target={'_blank'}
      rel={'noreferrer'}
    />
  );
}

function Footer() {
  return (
    <footer className={'text-center'}>
      <p className="inline-flex flex-wrap items-center justify-center gap-1">
        Built by{' '}
        <FooterLink href={'https://github.com/Huzaifa-Yaqoob'}>
          Huzaifa Yaqoob
        </FooterLink>{' '}
        with <Heart className={'text-primary'} width={20} height={20} />. Source
        code available on{' '}
        <FooterLink href={'https://github.com/Huzaifa-Yaqoob/ui-bloom2'}>
          Github
        </FooterLink>
        .
      </p>
    </footer>
  );
}

export default Footer;
