import React from 'react'

const NavButton = ({ text, className = ""}) => {
  return (
    <>
      <p className={`hover:font-bold hover:text-[#2B8B56] cursor-pointer ${className}`}>{text}</p>
    </>
  )
}

export default NavButton
