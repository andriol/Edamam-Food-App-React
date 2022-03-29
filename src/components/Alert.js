import React from 'react';

const Alert = ({ alert }) => {
  console.log(alert);
  return (
    <div className='alert'>
      <h3>{alert}</h3>
    </div>
  );
};

export default Alert;
