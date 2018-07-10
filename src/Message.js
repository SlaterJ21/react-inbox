import React, { Component } from 'react';
import './App.css';

class Message extends Component {
  render() {
    return (
      <div className={`row message ${this.props.read ? "read" : "unread"} ${this.props.selected ? "selected" : ""}` }>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" onChange={() => this.props.handleSelect(this.props.id)} checked={`${this.props.selected ? 'checked' : ''}`}/>
            </div>
            <div className="col-xs-2">
              <i className={`star fa ${this.props.starred ? "fa-star" : "fa-star-o"}`} onClick={() => this.props.star(this.props.id)}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {this.props.labels.map((label, i)=> <span key={i} className="label label-warning">{label}</span>)}
          <a href="#">
            {this.props.subject}
          </a>
        </div>
      </div>
    );
  }
}

export default Message;
