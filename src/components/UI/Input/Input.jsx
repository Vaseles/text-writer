import React from 'react'
import styles from './Input.module.scss'

const Input = ({type, value, onChange}) => {
  return (
    <input 
      type = {type}
      value = {value} 
      onChange = {onChange}
      className={styles.input}
    />
  )
}

export default Input