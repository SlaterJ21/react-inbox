import React, { Component } from 'react'
import './App.css'
import Toolbar from './Toolbar.js'
import MessageList from './MessageList'

const messages = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: messages,
      allSelected: false,
      someSelected: true
    }
  }

  filterMessage = terms => {
     return this.state.messages.filter(terms)
  }

  setMessages = () => {
    this.setState({
      messages: this.state.messages
    });
  }

  selectAll = () => {
    const value = this.state.allSelected ? false : true
    this.state.messages.map(message => message.selected = value)
    this.setState({
      messages: this.state.messages,
      allSelected: value,
      someSelected: value
    })
  }

  handleSelect = id => {
    this.setState({
      allSelected: false
    })
    const select = this.filterMessage(message => message.id === id)[0]
    select.selected ? select.selected = false : select.selected = true
    this.setMessages()
    const check = this.filterMessage(message => message.selected === true)
    if(check.length >= 1){
      this.setState({
        someSelected: true
      })
    } else {
      this.setState({
        someSelected: false
      })
    }
    if(check.length === this.state.messages.length){
      this.setState({
        allSelected: true
      })
    }
  }

  star = id => {
    const message = this.filterMessage(message => message.id === id)
    message[0].starred ? message[0].starred = false : message[0].starred = true
    this.setMessages()
  }

  unreadCount = () => {
    const unreadCount = this.filterMessage(message => message.read === false)
    return unreadCount.length
  }

  read = value => {
    const message = this.filterMessage(message => message.selected === true)
    message.map(message => message.read = value)
    this.setMessages()
  }

  label = (value, e) => {
    const messages = this.filterMessage(message => message.selected === true)
    if(e.target.value === 'Apply label'){
    } else if (value === 'apply'){
      const unlabeled = messages.filter(message => !message.labels.includes(e.target.value))
      unlabeled.map(message => message.labels.push(e.target.value))
      this.setMessages()
    } else if (value === 'remove'){
      const labeled = messages.filter(message => message.labels.includes(e.target.value))
      labeled.map(message => message.labels.splice(message.labels.indexOf(e.target.value), 1))
      this.setState({
        messages: this.state.messages
      })
    }
  }

  delete = () => {
    const message = this.filterMessage(message => !message.selected)
    this.setState({
      messages: message,
      someSelected: false
    })
  }

  render() {
    return (
      <div className="App">
        <Toolbar
          read={ this.read }
          label={ this.label }
          deleteMessage={ this.delete }
          unreadCount={ this.unreadCount }
          selectAll={ this.selectAll }
          allSelected={ this.state.allSelected }
          someSelected={ this.state.someSelected }
        />
        <MessageList
          messages={ this.state.messages }
          handleSelect={ this.handleSelect }
          star={ this.star }
        />
      </div>
    );
  }
}

export default App;
