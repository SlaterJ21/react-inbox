import React, { Component } from 'react';
import './App.css';
import Message from './Message.js'

class App extends Component {
  render() {
    return (
    <div>
      { this.props.messages.map((message , i)=>
         <Message
           key={message.id}
           id={message.id}
           subject={message.subject}
           read={message.read}
           starred={message.starred}
           labels={message.labels}
           selected={message.selected}
           handleSelect={this.props.handleSelect}
           star={this.props.star}
         />
      )}
    </div>
    );
  }
}

export default App;
