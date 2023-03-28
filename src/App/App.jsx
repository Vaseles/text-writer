import React, { useState } from 'react';
import {Configuration, OpenAIApi} from 'openai'

import styles from './App.module.scss';

import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button';
import Loading from '../components/UI/Loading/Loading';
import { useTheme } from '../hooks/useTheme';

// import OPENAI_API_KEY from './constants.js'


const App = () => {
  const OPENAI_API_KEY = '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'

  const {theme} = useTheme()

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(localStorage.getItem('messages')? JSON.parse(localStorage.getItem('messages')) : []);
  const [isLoading, setIsLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const answer = async (text) => {
    console.log(text)
    setIsLoading(true)
    
    let completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: text }],
    });

    setIsLoading(false)
    setMessages([...messages, completion.data.choices[0].message.content]);

    localStorage.setItem('messages', JSON.stringify(messages));
  }

  const sendMessage = (e) => {
    e.preventDefault();
    
    setMessages([...messages, message]);

    answer(message);
    setMessage('');
  }

  return (
    <>
      <h1>Спичрайтер</h1>
      <div className={styles.home}
    style = {
      theme == 'dark'? {
        backgroundColor: 'rgb(246, 241, 241, .1)',
      } : {
        backgroundColor: 'rgb(0,0,0, .05)',
        color: '#000'
      }
    }
    >
      <div className={styles.messages}>
        {messages.map((mess, index) => (
          <div key={index} className={styles.message}>{mess}</div>
        ))}
      {isLoading? <Loading/>: <></>}
      </div>
      <form className={styles.home__form}>
        <Input 
          type='text'
          value={message}
          onChange = {(e) => setMessage(e.target.value)}
        />
        {console.log(theme)}
        <Button text='Генерировать' onClick={sendMessage}/>
      </form>
    </div>
    </>
  )
}

export default App