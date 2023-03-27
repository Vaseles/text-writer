import React, { useState } from 'react';
import {Configuration, OpenAIApi} from 'openai'

import styles from './App.module.scss';

import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button';
import Loading from '../components/UI/Loading/Loading';

// import OPENAI_API_KEY from './constants.js'


const App = () => {
  const OPENAI_API_KEY = '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'

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const answer = async (text) => {
    setIsLoading(true)
    let completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: text }],
    });

    setIsLoading(false)
    setMessages([...messages, completion.data.choices[0].message.content]);
  }

  const sendMessage = (e) => {
    e.preventDefault();
    
    setMessages([...messages, message]);

    answer(message);
    setMessage('');
  }

  return (
    <div className={styles.pre__home}>
      <div className={styles.home}>
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
          <Button text={'send'} onClick={sendMessage}/>
        </form>
      </div>
    </div>
  )
}

export default App