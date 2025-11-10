import Section from '@/components/common/Section';
import { H2, P } from '@/registry/components/typography/typography';
import ImageDialog from '@/components/common/ImageDialog';

function Intro() {
  return (
    <Section id="field-renderer-intro">
      <H2>Introduction</H2>
      <P>
        The <strong>Field Renderer</strong> component is a reusable wrapper for
        input fields within a form. It helps reduce repetitive code by
        abstracting commonly used form field structures into a single,
        maintainable component.
        <br />
        This promotes cleaner code, improves the overall organization of your
        form logic, and allows you to centrally manage the design of input
        fields, labels, and error messages — making it easy to maintain a
        consistent style across all your forms.
      </P>
      <ImageDialog imgUrl={'/assets/field_renderer_desktop.png'} />
    </Section>
  );
}

export default Intro;
