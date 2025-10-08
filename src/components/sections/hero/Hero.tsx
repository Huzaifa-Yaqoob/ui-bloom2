'use client';

import Section from '@/components/common/Section';
import { Title, H1 } from '@/registery/components/typography/typography';

function Hero() {
  return (
    <Section className={'h-full'}>
      <H1 className={'text-center font-bold'}>
        Some of the needed <span className={'text-primary'}>Components</span>{' '}
        and <span className={'text-primary'}>Hooks</span> in Shadcn UI
      </H1>
    </Section>
  );
}

export default Hero;
