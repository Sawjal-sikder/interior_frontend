import React from 'react'

const logo = ({ src_img, alt_img = "Logo", className = "" }) => {
  return (
    <>
     <img src={src_img} alt={alt_img}  className={`w-48 ${className}`}/> 
    </>
  )
}

export default logo
