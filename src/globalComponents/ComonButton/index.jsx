import React from 'react';

const ComonButoon = ({ children, className, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </div>
  );
};

export default ComonButoon;
