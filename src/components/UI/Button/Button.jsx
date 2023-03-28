import React from 'react'
import styles from './Button.module.scss'

const Button = ({text, onClick, style}) => {
  return (
    <button 
      onClick={onClick}
      className={`${styles.btn}`}
      style={style}
    >{text}</button>
  )
}

export default Button