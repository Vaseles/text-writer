import React from 'react';
import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className = {styles.loading}>
      <div className = {styles.load}>
         <div className ={`${styles.part} ${styles.one}`}></div>
         <div className ={`${styles.part} ${styles.two}`}></div>
         <div className ={`${styles.part} ${styles.three}`}></div>
         <div className ={`${styles.part} ${styles.four}`}></div>
      </div>
    </div>
  )
}

export default Loading