import { Github } from '@/icons/inedx';

function NavFeatures() {
  return (
    <span>
      <a
        href={'www.github.com'}
        target={'_blank'}
        rel={'noreferrer'}
        className={'hover:text-primary'}
      >
        <Github width={32} height={32} />
      </a>
    </span>
  );
}

export default NavFeatures;
