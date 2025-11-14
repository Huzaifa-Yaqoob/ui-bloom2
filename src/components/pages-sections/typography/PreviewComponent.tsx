'use client';

import Section from '@/components/common/Section';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  BlockQuote,
  Code,
  Lead,
  Large,
  Small,
  Muted,
  Title,
} from '@/registry/components/typography/typography';

function TypographyPreview() {
  return (
    <div className="mt-6 space-y-10">
      {/* Headings */}
      <div className="space-y-4">
        <H1>Heading 1 — The quick brown fox jumps over the lazy dog</H1>
        <H2>Heading 2 — The quick brown fox jumps over the lazy dog</H2>
        <H3>Heading 3 — The quick brown fox jumps over the lazy dog</H3>
        <H4>Heading 4 — The quick brown fox jumps over the lazy dog</H4>
        <H5>Heading 5 — The quick brown fox jumps over the lazy dog</H5>
        <H6>Heading 6 — The quick brown fox jumps over the lazy dog</H6>
      </div>

      {/* Body Text Variants */}
      <div className="space-y-4">
        <P>
          Paragraph — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus semper risus vitae quam ultrices, ac feugiat urna commodo.
        </P>

        <Lead>
          Lead — This is a slightly larger paragraph used for intros or section
          summaries.
        </Lead>

        <Large>
          Large — Useful for emphasizing certain blocks of text without using
          headings.
        </Large>

        <Small>Small — For captions, meta text, and subtle labels.</Small>

        <Muted>
          Muted — This text is de-emphasized, commonly used for secondary
          information.
        </Muted>
      </div>

      {/* Title Variant */}
      <div>
        <Title>
          Title — A mid-weight, clean heading style for section headers.
        </Title>
      </div>

      {/* Block Quote */}
      <BlockQuote>
        “Design is not just what it looks like and feels like. Design is how it
        works.” — Steve Jobs
      </BlockQuote>

      {/* Inline Code */}
      <Code>{`const sum = (a, b) => a + b;`}</Code>
    </div>
  );
}

const TypographyPreviewComponentCode = `'use client';

import Section from '@/components/common/Section';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  BlockQuote,
  Code,
  Lead,
  Large,
  Small,
  Muted,
  Title,
} from '@/registry/components/typography/typography';

export default function TypographyPreview() {
  return (<div className="mt-6 space-y-10">
        {/* Headings */}
        <div className="space-y-4">
          <H1>Heading 1 — The quick brown fox jumps over the lazy dog</H1>
          <H2>Heading 2 — The quick brown fox jumps over the lazy dog</H2>
          <H3>Heading 3 — The quick brown fox jumps over the lazy dog</H3>
          <H4>Heading 4 — The quick brown fox jumps over the lazy dog</H4>
          <H5>Heading 5 — The quick brown fox jumps over the lazy dog</H5>
          <H6>Heading 6 — The quick brown fox jumps over the lazy dog</H6>
        </div>

        {/* Body Text Variants */}
        <div className="space-y-4">
          <P>
            Paragraph — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus semper risus vitae quam ultrices, ac feugiat urna commodo.
          </P>

          <Lead>
            Lead — This is a slightly larger paragraph used for intros or
            section summaries.
          </Lead>

          <Large>
            Large — Useful for emphasizing certain blocks of text without using
            headings.
          </Large>

          <Small>Small — For captions, meta text, and subtle labels.</Small>

          <Muted>
            Muted — This text is de-emphasized, commonly used for secondary
            information.
          </Muted>
        </div>

        {/* Title Variant */}
        <div>
          <Title>
            Title — A mid-weight, clean heading style for section headers.
          </Title>
        </div>

        {/* Block Quote */}
        <BlockQuote>
          “Design is not just what it looks like and feels like. Design is how
          it works.” — Steve Jobs
        </BlockQuote>

        {/* Inline Code */}
        <Code>{\`const sum = (a, b) => a + b;\`}</Code>
      </div>);
}`;

export { TypographyPreviewComponentCode };

export default TypographyPreview;
