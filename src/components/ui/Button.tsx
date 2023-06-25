import styles from './Button.module.css';

import React from 'react';

enum ButtonVariant {
  none = '',
  thematic = 'variantThematic',
}

interface IButtonProps {
  children: React.ReactNode;
  props?: any;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: ButtonVariant;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  className,
  variant = ButtonVariant.thematic,
  ...props
}) => {
  return (
    <button
      className={`${className} ${styles[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
