import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import './App.css'

class Message extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { message: {id, subject, body, read, starred, labels, selected}, checkbox,
        star, readIt} = this.props

    return (
      <div>
        <div className={`row message ${read ? "read" : "unread"} ${selected ?
           "selected" : ""}` }>
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input
                  type="checkbox"
                  onChange={() => checkbox(id)}
                  checked={`${selected ? 'checked' : ''}`}
                />
              </div>
              <div className="col-xs-2">
                <i
                  className={`star fa ${starred ? "fa-star" : "fa-star-o"}`}
                  onClick={() => star(id)}
                ></i>
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            {labels.map((label, i)=> <span key={i} className="label label-warning">
              {label}</span>)}
            <a onClick={() => {this.handleShow(); readIt(true, id)}}>
              {subject}
            </a>
          </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Subject</Modal.Title>
            <p>{subject}</p>
          </Modal.Header>
          <Modal.Body>
            <p>
              {labels.map((label,i)=> <span key={i} className="label label-warning">
                {label}</span>)}
            </p>
            <h4>Message Body</h4>
            <p>
              {body}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Message;
