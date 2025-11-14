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

const PreviewCode = `'use client';

import { useState } from 'react';
import { LogicalPagination } from '@/components/ui/bloom/logical-pagination';

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <LogicalPagination
        totalPages={10}
        currentPage={currentPage}
        onPageChange={(page) => {
          // Handle page change logic here.
          // You can update local state, lift state up via props,
          // or update query/search params depending on your use case.
          setCurrentPage(page);
        }}
      />
    </div>
  );
}

export default MyComponent;`;

export { PreviewCode };

export default PreviewComponent;
