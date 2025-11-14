'use client';

import { useState } from 'react';
import { LogicalPagination } from '@/registry/components/logical-pagination/logical-pagination';

function PreviewComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <LogicalPagination
        totalPages={10}
        currentPage={currentPage}
        onPageChange={(p) => {
          //Function to handle what happen when page change
          setCurrentPage(p);
        }}
      />
    </div>
  );
}

const PreviewCode = `
'use client';

import { LogicalPagination } from '@/components/ui/bloom/logical-pagination';

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <LogicalPagination
        totalPages={10}
        currentPage={currentPage}
        onPageChange={(p) => {
          //Function to handle what happen when page change
          setCurrentPage(p);
        }}
      />
    </div>
  );
}

export default MyComponent;
`;

export default PreviewComponent;

export { PreviewCode };
