import React from 'react'
import styles from '../styles/components/poster.module.scss'

const Poster = () => {
  return (
    <div className={styles.poster}>
        <h1 className={styles.title}>Poster Title</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, natus?
        </p>
    </div>
  )
}

export default Poster