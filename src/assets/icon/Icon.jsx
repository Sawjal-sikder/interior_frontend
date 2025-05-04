import React from 'react';

const Icon = ({ icon, className = "", size = "text-xl" }) => {
  return (
    <>
      <i className={`${icon} ${className} ${size}`}></i>
    </>
  );
};

export default Icon;
