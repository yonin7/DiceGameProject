import React from 'react';
import './Hold.css';

function Hold(props) {
  return (
    <div className="hold" onClick={props.onClick}>
      Hold
    </div>
  );
}

export default Hold;
