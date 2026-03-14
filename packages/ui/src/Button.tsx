import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

const styles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors',
  ghost:
    'px-4 py-2 rounded-md border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 transition-colors',
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...rest }) => (
  <button className={styles[variant]} {...rest}>
    {children}
  </button>
);

export default Button;
