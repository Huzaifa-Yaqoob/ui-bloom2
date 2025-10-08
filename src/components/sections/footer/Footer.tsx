import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Heart } from '@/icons/Heart';

function Footer() {
  return (
    <footer className={'flex items-center justify-center gap-1 text-center'}>
      Built by{' '}
      <a
        className={cn(
          buttonVariants({
            variant: 'link',
          }),
          'cursor-pointer px-0 text-base'
        )}
        href={'https://github.com/Huzaifa-Yaqoob'}
        target={'_blank'}
        rel={'noreferrer'}
      >
        Huzaifa Yaqoob
      </a>{' '}
      with <Heart className={'text-primary'} width={20} height={20} />. Source
      code available on{' '}
      <a
        className={cn(
          buttonVariants({
            variant: 'link',
          }),
          'cursor-pointer px-0 text-base'
        )}
        href={'https://github.com/Huzaifa-Yaqoob/ui-bloom2'}
        target={'_blank'}
        rel={'noreferrer'}
      >
        Github
      </a>
      .
    </footer>
  );
}

export default Footer;
