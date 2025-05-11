import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavButton = ({ text, to = "/", className = "" }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        hover:font-bold hover:text-green-700 cursor-pointer
        ${isActive ? 'text-green-700 font-bold' : ''}
        ${className}
      `}
    >
      {text}
    </Link>
  );
};

export default NavButton;
