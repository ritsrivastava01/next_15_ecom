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
          'bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded-lg',
          className
        )}
        {...props}>
        {title}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
