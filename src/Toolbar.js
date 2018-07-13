import React from 'react';

const Toolbar = ({read, label, deleteMessage, unreadCount, selectAll,
   allSelected, someSelected, composeForm}) => (
  <div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">{unreadCount()}</span>
        unread messages
      </p>

      <a className="btn btn-danger" onClick={ composeForm }>
        <i className="fa fa-plus"></i>
      </a>

      <button className="btn btn-default" onClick={ selectAll }>
        <i className={`fa ${someSelected() && !allSelected() ?
          'fa-minus-square-o' : allSelected() ?
          'fa-check-square-o' : 'fa-square-o'}`}
        ></i>
      </button>

      <button
        className="btn btn-default"
        onClick={() => read(true)}
        disabled={someSelected() ? '' : 'disabled'}
      >
        Mark As Read
      </button>

      <button
        className="btn btn-default"
        onClick={() => read(false)}
        disabled={someSelected() ? '' : 'disabled'}
      >
        Mark As Unread
      </button>

      <select
        className="form-control label-select"
        onChange={(e) => {label('apply', e.target.value); e.target.selectedIndex = 0}}
        disabled={someSelected() ? '' : 'disabled'}
      >
        <option>Apply label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <select
        className="form-control label-select"
        onChange={(e) => {label('remove', e.target.value); e.target.selectedIndex = 0}}
        disabled={someSelected() ? '' : 'disabled'}
      >
        <option>Remove label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <button
        className="btn btn-default"
        onClick= {deleteMessage}
        disabled={someSelected() ? '' : 'disabled'}
      >
        <i className="fa fa-trash-o"></i>
      </button>
    </div>
  </div>
)

export default Toolbar;
