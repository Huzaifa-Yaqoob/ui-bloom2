'use client';
import Link from 'next/link';

interface DocLink {
  href: string;
  name: string;
}

function DocFooter({
  prevLink,
  nextLink,
}: {
  prevLink: DocLink | null;
  nextLink: DocLink | null;
}) {
  return (
    <footer className="border-border mt-12 grid gap-4 border-t pt-6 md:grid-cols-2">
      {prevLink ? (
        <Link
          href={prevLink.href}
          className="hover:bg-accent flex items-center justify-between rounded-lg border p-4 transition-colors"
        >
          <span className="text-primary text-2xl font-bold">&larr;</span>
          <div className="text-right">
            <div className="text-muted-foreground text-xs">Previous</div>
            <div className="font-medium">{prevLink.name}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {nextLink && (
        <Link
          href={nextLink.href}
          className="hover:bg-accent flex items-center justify-between rounded-lg border p-4 transition-colors"
        >
          <div className="text-left">
            <div className="text-muted-foreground text-xs">Next</div>
            <div className="font-medium">{nextLink.name}</div>
          </div>
          <span className="text-primary text-2xl font-bold">&rarr;</span>
        </Link>
      )}
    </footer>
  );
}

export default DocFooter;
