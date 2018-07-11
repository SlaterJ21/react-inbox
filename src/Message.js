import React from 'react';
import './App.css';

const Message = ({id, subject, read, starred, labels, selected, handleSelect, star}) => (
      <div className={`row message ${read ? "read" : "unread"} ${selected ? "selected" : ""}` }>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" onChange={() => handleSelect(id)} checked={`${selected ? 'checked' : ''}`}/>
            </div>
            <div className="col-xs-2">
              <i className={`star fa ${starred ? "fa-star" : "fa-star-o"}`} onClick={() => star(id)}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {labels.map((label, i)=> <span key={i} className="label label-warning">{label}</span>)}
          <a>
            {subject}
          </a>
        </div>
      </div>
    )

export default Message;
