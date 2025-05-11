import React from 'react';
import Logout_btn from '../button/Logout_btn';
import { isAuthenticated } from '../../../auth';
import { useNavigate } from 'react-router-dom';

const NavRight = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className='px-3 py-2 border'>+8801386756656</p>

      <div className='flex gap-x-4 items-center *:cursor-pointer'>
        {isAuthenticated() ? (
          <Logout_btn text="Log Out" className="text-sm font-medium bg-gray-400 rounded-md" />
        ) : (
          <button
            onClick={() => navigate('/login/')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default NavRight;
