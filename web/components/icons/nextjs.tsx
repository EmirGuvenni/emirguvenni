import { Icon, LucideProps } from 'lucide-react';

export const NextjsIcon = (props: LucideProps) => (
  <Icon
    {...props}
    viewBox="0 0 180 180"
    stroke="none"
    iconNode={[
      [
        'circle',
        {
          cx: '90',
          cy: '90',
          r: '90',
          fill: 'currentColor',
          opacity: '0.15',
          key: 'bg',
        },
      ],
      [
        'path',
        {
          d: 'M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z',
          fill: 'currentColor',
          key: 'n-path',
        },
      ],
      [
        'rect',
        {
          x: '115',
          y: '54',
          width: '12',
          height: '72',
          fill: 'currentColor',
          opacity: '0.4',
          key: 'line',
        },
      ],
    ]}
  />
);
