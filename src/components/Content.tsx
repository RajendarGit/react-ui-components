import React,{FC} from 'react'
import Button from './Button'
import styles from './Content.module.scss';

interface Props {
    title?: React.ReactNode;
    content?: React.ReactNode;
    btn? : boolean;
    reverse? : boolean;
}

const Content:FC<Props> = ({title, content, btn = true, reverse = false}) => {
    const reverseView = reverse ? 'row-reverse' : '';
  return (
    <div className={[styles.content,styles[reverseView]].join(' ')}>
        <div className={styles.child}>
            <img className='img-fluid' src="https://picsum.photos/700/400" alt="" />
        </div>
        <div className={styles.child}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.content}>
                {content}
            </p>
            {btn === true ? <Button>Button</Button> : null}
            <Button radius size='lg'>Curved Button</Button>
        </div>
    </div>
  )
}

export default Content