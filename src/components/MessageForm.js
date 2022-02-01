import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {

  const [value, setValue] = useState('');

  const {chatId, creds} = props;


  const handleSubmit = (e) => {
      e.preventDefault(); //to not do a browser refresh
      const text = value.trim();

      if(text.length > 0) sendMessage(creds, chatId, {text});

      setValue('');
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    isTyping(props, chatId)
}

  return (
        <form className='form relative' onSubmit={handleSubmit}>
            <input className='form-input' placeholder='Send a Message ...' value={value} onChange={handleChange} onSubmit={handleSubmit} />
        </form>
    );
};

export default MessageForm;
