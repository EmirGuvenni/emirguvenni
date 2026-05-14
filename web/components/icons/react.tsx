import { Icon, LucideProps } from 'lucide-react';

export const ReactIcon = (props: LucideProps) => (
  <Icon
    {...props}
    viewBox="-11.5 -10.23174 23 20.46348"
    stroke="currentColor"
    iconNode={[
      ['circle', { cx: '0', cy: '0', r: '2.05', fill: 'currentColor', stroke: 'none', key: 'dot' }],
      ['ellipse', { rx: '11', ry: '4.2', fill: 'none', strokeWidth: '1', key: 'e1' }],
      ['ellipse', { rx: '11', ry: '4.2', fill: 'none', strokeWidth: '1', transform: 'rotate(60)', key: 'e2' }],
      ['ellipse', { rx: '11', ry: '4.2', fill: 'none', strokeWidth: '1', transform: 'rotate(120)', key: 'e3' }],
    ]}
  />
);
