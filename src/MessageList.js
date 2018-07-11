import React from 'react';
import './App.css';
import Message from './Message.js'

const MessageList = ({messages, checkbox, star}) =>  (
  <div>
    {messages.map((message, i)=>
       <Message
         id={message.id}
         key={message.id}
         read={message.read}
         labels={message.labels}
         starred={message.starred}
         subject={message.subject}
         selected={message.selected}
         checkbox={checkbox}
         star={star}
        />
    )}
  </div>
)

export default MessageList;
