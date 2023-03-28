import React from 'react'
import styles from './Input.module.scss'
import { useTheme } from '../../../hooks/useTheme'

const Input = ({type, value, onChange}) => {
  const {theme} = useTheme()

  return (
    <input 
      type = {type}
      value = {value} 
      onChange = {onChange}
      className={styles.input}
      style = {
        theme == 'dark'? {
          backgroundColor: 'rgb(246, 241, 241, .15)',
          color: '#F6F1F1'
        } : {
          backgroundColor: 'rgb(0,0,0, .1)',
          color: '#000'
        }
      }
    />
  )
}

export default Input