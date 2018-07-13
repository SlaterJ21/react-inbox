import React from 'react';
import './App.css';
import Message from './Message.js'

const MessageList = ({messages, checkbox, star, read}) =>  (
  <div>
    {messages.map((message, i)=>
       <Message
         key={i}
         message={message}
         checkbox={checkbox}
         star={star}
         readIt={read}
        />
    )}
  </div>
)

export default MessageList;
