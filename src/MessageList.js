import React from 'react';
import './App.css';
import Message from './Message.js'

const MessageList = ({messages, handleSelect, star}) =>  (
    <div>
      {messages.map((message, i)=>
         <Message
           key={message.id}
           id={message.id}
           subject={message.subject}
           read={message.read}
           starred={message.starred}
           labels={message.labels}
           selected={message.selected}
           handleSelect={handleSelect}
           star={star}
         />
      )}
    </div>
    )

export default MessageList;
