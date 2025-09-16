import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, type = 'button', className = '' }) => {
  const variantClass = variant === 'primary' ? styles.primaryBtn : styles.secondaryBtn;
  const combined = `${variantClass} ${className}`.trim();
  return (
    <button className={combined} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
