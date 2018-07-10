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
    this.selectAll = this.selectAll.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.star = this.star.bind(this)
    this.read = this.read.bind(this)
    this.delete = this.delete.bind(this)
  }

  selectAll(){
    if(!this.state.allSelected){
      this.state.messages.map(message => message.selected = true)
      this.setState({
        messages: this.state.messages,
        allSelected: true,
        someSelected: false
      })
    } else {
      this.state.messages.map(message => message.selected = false)
      this.setState({
        messages: this.state.messages,
        allSelected: false,
        someSelected: false
      });
    }
  }

  handleSelect(id){
    this.setState({
      allSelected: false
    })
    const select = this.state.messages.filter(message => message.id == id)
    select[0].selected ? select[0].selected = false : select[0].selected = true
          this.setState({
            messages: this.state.messages
          });
    const check = this.state.messages.filter(message => message.selected == true)
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

  star(id){
    const message = this.state.messages.filter(message => message.id == id)
    message[0].starred ? message[0].starred = false : message[0].starred = true
          this.setState({
            messages: messages
          });
  }

  read(value){
    if(value === 'read'){
      const message = this.state.messages
      .filter(message => message.selected === true)
      const readMessage = message.map(message => message.read = true)
        this.setState({
          messages: this.state.messages
        });
    }
    if(value === 'unread'){
    const message = this.state.messages
    .filter(message => message.selected === true)
    const readMessage = message.map(message => message.read = false)
      this.setState({
        messages: this.state.messages
      });
    }
  }

  delete(){
    this.setState({
      messages: this.state.messages
    })
    const message = this.state.messages
    .filter(message => message.selected === false)
    console.log(message)
    this.setState({
      messages: message
    })
  }

  render() {
    return (
      <div className="App">
        <Toolbar
          read={ this.read }
          selectAll={ this.selectAll }
          delete={ this.delete }
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
