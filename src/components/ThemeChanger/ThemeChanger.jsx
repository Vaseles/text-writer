import React, {createContext, useState } from 'react'
import Button from '../UI/Button/Button'
import  styles from './ThemeChanger.module.scss'

import {BiSun} from 'react-icons/bi'
import {FiMoon} from 'react-icons/fi'

export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
   const [theme, setTheme] = useState(localStorage.getItem('theme'))

  return (
   <ThemeContext.Provider value={{theme, setTheme}}>
      <Button 
      onClick={e => setTheme(theme === 'dark'? 'light' : 'dark')} 
      text={theme === 'dark'? <FiMoon/> : <BiSun/>}
      style = {{ position: 'fixed', maxWidth: '60px', maxHeight: '60px', right: '10px', top: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: theme === 'dark'? '#222' : '#fff', color: theme === 'dark'? '#fff' : '#222', zIndex: '99999999999999999'}}
    />
      <div className={theme == 'dark'? styles.pre__home__dark :styles.pre__home}>
            {children}
      </div>
   </ThemeContext.Provider>
  )
}

export default ThemeProvider