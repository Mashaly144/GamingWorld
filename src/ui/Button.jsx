import React from 'react';

const Button = ({ children, styles }) => {
  return (
    <button className={`p-[20px] w-full transition-colors ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
