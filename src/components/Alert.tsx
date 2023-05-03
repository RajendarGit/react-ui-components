import React,{FC} from 'react'
import styles from './Alert.module.scss';

interface Props {
    children? : React.ReactNode;
    variant? : 'success' | 'danger';
}

const Alert:FC<Props> = ({children, variant = 'default'}) => {
    const variantClass = variant ? `alert-${variant}` : '';
  return (
    <div className={[styles.alert, styles[variantClass]].join(' ')}>
        {children}
    </div>
  )
}

export default Alert