import Section from '@/components/common/Section';
import { H2, P, Code } from '@/registry/components/typography/typography';

function Intro() {
  return (
    <Section id="use-window-width-intro">
      <H2>useWindowWidth</H2>

      <P>
        The <Code>useWindowWidth</Code> hook provides an easy and reliable way
        to access the current browser window width. It automatically updates
        whenever the user resizes the window, making it ideal for building
        responsive UI components that adjust their layout or behavior based on
        screen size.
      </P>

      <P>
        Since this hook relies on the <Code>window</Code> object, it only runs
        on the client side. During server-side rendering, it returns{' '}
        <Code>undefined</Code>, ensuring your application remains fully
        SSR-safe.
      </P>

      <P>
        This package also exports a <Code>BreakPoints</Code> object containing
        commonly used device sizes (<strong>sm, md, lg, xl, 2xl</strong>). You
        can use these breakpoints to implement clean and consistent responsive
        logic across your project.
      </P>
    </Section>
  );
}

export default Intro;
