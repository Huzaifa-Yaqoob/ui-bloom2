import { PropsType } from '@/components/common/PropsTable';

export const TypographyPropsData: PropsType[] = [
  {
    propName: 'asChild',
    propType: 'boolean',
    defaultValue: 'false',
    description:
      "If true, uses Radix UI's <Slot /> component to pass styling to the child element instead of rendering a default tag.",
  },
  {
    propName: 'children',
    propType: 'ReactNode',
    description:
      'The content inside the text component. This can include text, inline elements, or nested components.',
  },
  {
    propName: 'className',
    propType: 'string',
    description:
      'Additional Tailwind or custom CSS classes to extend or override the default styling.',
  },
];
