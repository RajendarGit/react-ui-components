import React, { FC } from 'react';
import styles from './Button.module.scss';

interface Props {
  children?: React.ReactNode;
  variant?: 'primary' | 'danger' | 'dark';
  radius?: boolean;
  type?: 'submit' | 'reset' | 'button';
  size?: 'md' | 'lg';
}

const Button: FC<Props> = ({ children, variant = 'primary', type = 'button', radius, size = 'md' }) => {
  const variantClass = variant ? `btn-${variant}` : '';
  const radiusValue = radius ? 'btn-curved' : '';
  const sizeValue = size === 'lg' ? 'btn-lg' : 'btn-md';
  return (
    <button type={type} className={[styles.btn, styles[radiusValue], styles[sizeValue], styles[variantClass]].join(' ')}>{children}</button>
  );
}

export default Button;
