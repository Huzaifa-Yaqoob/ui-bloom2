import Hero from '@/components/sections/hero/Hero';
import Page from '@/components/common/Page';

export default function Home() {
  return (
    <Page className={'flex flex-col items-center justify-center'}>
      <Hero />
    </Page>
  );
}
