import Section from '@/components/common/Section';
import { H2, P } from '@/registry/components/typography/typography';

function Intro() {
  return (
    <Section id="typography-intro">
      <H2>Typography</H2>
      <P>
        The <strong>Typography</strong> module provides a collection of
        reusable, pre-styled components such as headings, paragraphs, quotes,
        code blocks, and more. By centralizing your typography styles in one
        place, you can maintain a consistent visual language across your entire
        application — while keeping your code clean, scalable, and easy to
        manage.
      </P>
    </Section>
  );
}

export default Intro;
