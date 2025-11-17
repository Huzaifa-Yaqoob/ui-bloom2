import Section from '@/components/common/Section';
import { H2, P, Code } from '@/registry/components/typography/typography';

function Intro() {
  return (
    <Section id="use-async-runner-intro">
      <H2>useAsyncRunner</H2>
      <P>
        The <strong>useAsyncRunner</strong> hook provides a structured and
        efficient way to manage asynchronous operations within your React
        components. It offers a clean API to track the full lifecycle of any
        Promise-based action — including loading, success, and error states. By
        exposing helpful flags like <Code>isPending</Code>,{' '}
        <Code>isSuccess</Code>, and <Code>isFailure</Code>, along with{' '}
        <Code>data</Code> and <Code>error</Code> values, the hook removes the
        need for repetitive async handling logic and keeps your UI components
        simple, predictable, and easier to maintain.
      </P>
    </Section>
  );
}

export default Intro;
