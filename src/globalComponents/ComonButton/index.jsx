import React from 'react';

const ComonButoon = ({ children, className }) => {
  return (
    <div>
      <button className={className}>{children}</button>
    </div>
  );
};

export default ComonButoon;
