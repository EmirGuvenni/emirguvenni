import * as React from 'react';

export function Badge({ children, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={`dark:text-primary-foreground w-fit rounded-md bg-gray-100 px-3 py-1 text-sm font-semibold ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
