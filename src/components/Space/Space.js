import React from 'react';
import './Space.scss';

function Space(props) {
  return (
    <div className="space">
      <div className ={`space__icon ${props.value ? props.value : ''}`} />
    </div>
  );
}

export default Space;
