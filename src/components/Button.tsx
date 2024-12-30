import { forwardRef, JSX } from 'react';

export type ButtonProps = {
  title?: string;
};

const Button = forwardRef<HTMLButtonElement, JSX.IntrinsicElements['button']>(
  ({ title, ...props }: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        className='bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded-lg'
        {...props}>
        {title}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
