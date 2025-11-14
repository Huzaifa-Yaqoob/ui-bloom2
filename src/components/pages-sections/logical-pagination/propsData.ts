export interface PropsType {
  propName: string;
  propType: string;
  defaultValue?: string;
  description?: React.ReactNode;
}

export const logicalPaginationPropsData: PropsType[] = [
  {
    propName: 'size',
    propType: 'Partial<typeof BreakPoints>',
    defaultValue: '{ sm: 5 }',
    description:
      'Controls how many page numbers are visible based on responsive breakpoints. Example: { sm: 5, md: 7, lg: 9 }.',
  },
  {
    propName: 'totalPages',
    propType: 'number',
    description: 'Total number of pages available for pagination.',
  },
  {
    propName: 'currentPage',
    propType: 'number',
    description: 'The currently active page number.',
  },
  {
    propName: 'isPrev',
    propType: 'boolean',
    defaultValue: 'true',
    description:
      'Whether to show the Previous button. If false, the Previous button is hidden.',
  },
  {
    propName: 'isNext',
    propType: 'boolean',
    defaultValue: 'true',
    description:
      'Whether to show the Next button. If false, the Next button is hidden.',
  },
  {
    propName: 'onPageChange',
    propType: '(page: number) => void',
    description: 'Callback triggered when the user selects a different page.',
  },
  {
    propName: 'className',
    propType: 'string',
    description: 'Custom CSS classes to style the pagination wrapper.',
  },
  {
    propName: 'PreviousComponent',
    propType: "FC<ComponentProps<'button'>>",
    defaultValue: 'DefaultPrevious',
    description:
      'Custom component for the Previous button. Receives all native <button> props.',
  },
  {
    propName: 'NextComponent',
    propType: "FC<ComponentProps<'button'>>",
    defaultValue: 'DefaultNext',
    description:
      'Custom component for the Next button. Receives all native <button> props.',
  },
  {
    propName: 'GapPlaceholderComponent',
    propType: 'FC',
    defaultValue: 'DefaultGapPlaceholder',
    description:
      'Component displayed for ellipsis (...) when there are hidden page numbers.',
  },
  {
    propName: 'PageNumberComponent',
    propType: 'FC<PageNumberProps>',
    defaultValue: 'DefaultPageNumber',
    description:
      'Custom component for rendering page numbers. Receives `num` and `isActive`.',
  },
];
