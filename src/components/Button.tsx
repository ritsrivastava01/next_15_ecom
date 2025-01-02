import { forwardRef, JSX } from 'react';
import { classMerge } from 'rit/utilits/classMerge';

export type ButtonProps = {
  title?: string;
  className?: string;
};

const Button = forwardRef<HTMLButtonElement, JSX.IntrinsicElements['button']>(
  ({ title, className, ...props }: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        className={classMerge(
          'rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50',
          className,
        )}
        {...props}
      >
        {title}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
