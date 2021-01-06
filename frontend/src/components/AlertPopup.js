import React from 'react';

const AlertPopup = ({ text }) => {
  return (
    <div className='alert-wrapper'>
      <span>{text}</span>
    </div>
  );
};

export default AlertPopup;
