import React, { Component } from 'react';

class Toolbar extends Component {
  render() {
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread messages
          </p>

          <button className="btn btn-default" onClick={ this.props.selectAll }>
            <i className={`fa ${this.props.someSelected && !this.props.allSelected ? 'fa-minus-square-o' : this.props.allSelected ? 'fa-check-square-o' : 'fa-square-o'}`}></i>
          </button>

          <button className="btn btn-default" onClick={() => this.props.read('read')}>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={() => this.props.read('unread')}>
            Mark As Unread
          </button>

          <select className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" onClick= { this.props.delete }>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Toolbar;
