import React, { FC } from 'react';
import styles from './Button.module.scss';

interface Props {
  children?: React.ReactNode;
  variant?: 'primary' | 'danger' | 'dark';
  type?: 'submit' | 'reset' | 'button';
}

const Button: FC<Props> = ({ children, variant = 'primary', type = 'button' }) => {
  const variantClass = variant ? `btn-${variant}` : '';
  return (
    <button type={type} className={[styles.btn, styles[variantClass]].join(' ')}>{children}</button>
  );
}

export default Button;
