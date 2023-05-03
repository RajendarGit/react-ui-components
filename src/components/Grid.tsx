import React from 'react'
import styles from './Grid.module.scss';
import Button from './Button';

const Grid = () => {
  return (
    <div className={styles.grid}>
        <h2>Grid Component</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, praesentium.</p>
        <Button variant="dark">Dark Button</Button>
    </div>
  )
}

export default Grid