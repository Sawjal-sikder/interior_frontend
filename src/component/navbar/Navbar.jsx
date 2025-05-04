import React from 'react';
import Logo_img from '../../assets/include/logo.png';
import Logo from './logo';
import NavButton from './NavButton';
import NavRight from './NavRight';



const Navbar = () => {
  return (
    <div className="bg-gray-200 w-full py-4 px-20">
      <div className="flex justify-between gap-x-5 items-center">
        <Logo src_img={Logo_img} alt_img="Logo" className="w-48" />
        <div className='flex gap-x-5 items-center'>
          <NavButton text='Home'  className=""/>
          <NavButton text='Service'  className=""/>
          <NavButton text='Product'  className=""/>
          <NavButton text='Protfolio'  className=""/>
          <NavButton text='Latest Project'  className=""/>
          <NavButton text='Gallary'  className=""/>
          <NavButton text='Getting Touch'  className=""/>
        </div>
        <div className='flex gap-x-5 items-center'>
        < NavRight />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
