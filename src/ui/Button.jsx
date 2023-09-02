import React from 'react';

const Button = ({ children, styles }) => {
  return <button className={`main-button ${styles}`}>{children}</button>;
};

export default Button;
