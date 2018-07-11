import React, { Component } from 'react'
import './App.css'
import Toolbar from './Toolbar.js'
import MessageList from './MessageList'

const API = 'http://localhost:8082/api/messages'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  async componentDidMount() {
    const response = await fetch(API)
    const data = await response.json()
    this.setState({messages: data})
  }

  update = async(id, boo, command, prop) => {
    let obj = {
      messageIds: [id],
      command: command,
      [prop]: boo
    }
    const response = await fetch(API, {
        method: 'PATCH',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
  }

  filterMessage = terms => {
     return this.state.messages.filter(terms)
  }

  setMessages = (id, boo, command, prop) => {
    if(id){
      this.update(id, boo, command, prop)
    }
    this.setState({messages: this.state.messages})
  }

  selectAll = () => {
    const value = this.allSelected() ? false : true
    this.state.messages.forEach(message => message.selected = value)
    this.setMessages()
    this.someSelected()
  }

  allSelected = () => {
    let value = false
    const check = this.filterMessage(message => message.selected === true)
    value = check.length === this.state.messages.length ? true : false
    return value
  }

  someSelected = () => {
    let value = true
    const check = this.filterMessage(message => message.selected === true)
    value = check.length > 0 ? true : false
    return value
  }

  delete = () => {
    const message = this.filterMessage(message => !message.selected)
    this.someSelected()
    this.setState({
      messages: message
    })
  }

  checkbox = id => {
    const select = this.filterMessage(message => message.id === id)[0]
    select.selected ? select.selected = false : select.selected = true
    this.setMessages()
    this.allSelected()
    this.someSelected()
  }

  star = id => {
    const message = this.filterMessage(message => message.id === id)
    const boo = message[0].starred ? message[0].starred = false : message[0].starred = true
    this.setMessages(id, boo, 'star', 'starred')
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
    if (value === 'apply'){
      const unlabeled = messages.filter(message =>
        !message.labels.includes(e.target.value))
      unlabeled.forEach(message => message.labels.push(e.target.value))
      this.setMessages()
    } else if (value === 'remove'){
      const labeled = messages.filter(message =>
        message.labels.includes(e.target.value))
      labeled.forEach(message =>
        message.labels.splice(message.labels.indexOf(e.target.value), 1))
      this.setMessages()
    }
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
          allSelected={ this.allSelected }
          someSelected={ this.someSelected }
        />
        <MessageList
          messages={ this.state.messages }
          checkbox={ this.checkbox }
          star={ this.star }
        />
      </div>
    );
  }
}

export default App;
