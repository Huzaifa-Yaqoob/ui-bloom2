'use client';

import { ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import PropDescription from '@/components/common/PropDescription';
import { Badge } from '@/components/ui/badge';

export interface PropsType {
  propName: string;
  propType: string;
  defaultValue?: string;
  description?: ReactNode;
}

interface PropsTableProps {
  data: PropsType[];
}

function PropsTable({ data }: PropsTableProps) {
  return (
    <Table>
      <TableCaption>
        A list of props that can be used in this component
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Props</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Default value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(({ propName, propType, defaultValue, description }) => (
          <TableRow key={propName}>
            <TableCell className={'font-medium'}>
              <Badge>{propName}</Badge>
              <PropDescription description={description} />
            </TableCell>
            <TableCell>
              <Badge variant={'outline'}>{propType}</Badge>
            </TableCell>
            <TableCell>
              <Badge variant={'outline'}>{defaultValue ?? '-'}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default PropsTable;
