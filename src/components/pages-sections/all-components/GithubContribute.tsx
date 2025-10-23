import Link from 'next/link';
import { Github } from '@/icons/GitHub';
import Section from '@/components/common/Section';
import { Bulb } from '@/icons';
import { P } from '@/registry/components/typography/typography';

function GithubContribute() {
  return (
    <Section>
      <div className="bg-accent text-card-foreground mt-8 rounded-lg border p-6">
        <P className="flex items-center gap-2 text-lg font-semibold">
          <Bulb className={'text-primary'} /> New components are added
          regularly.
        </P>
        <P className="text-muted-foreground mt-2">
          Have a suggestion?{' '}
          <Link
            href="https://github.com/Huzaifa-Yaqoob/ui-bloom2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary inline-flex items-center gap-1 hover:underline"
          >
            Contribute on GitHub <Github className="size-4" />
          </Link>
        </P>
      </div>
    </Section>
  );
}

export default GithubContribute;
