'use client';

import { useEffect, useState } from 'react';
import { Github } from '@/icons/GitHub';
import { formatNumber } from '@/lib/formatNumber';

function GitHubStars() {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    async function fetchStars() {
      const res = await fetch(
        'https://api.github.com/repos/Huzaifa-Yaqoob/ui-bloom2'
      );
      const data = await res.json();
      setStars(data.stargazers_count);
    }
    fetchStars();
  }, []);

  return (
    <a
      href={'www.github.com'}
      target={'_blank'}
      rel={'noreferrer'}
      className={'hover:text-primary flex items-center gap-1'}
    >
      <Github width={32} height={32} />
      {formatNumber(stars)}
    </a>
  );
}

export default GitHubStars;
