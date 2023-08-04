//the navbar components including log in sign in sign up and account buttons
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../backend/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)
// asyncronuose fn for navigation from the log out page to the home page
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-orange-600 text-4xl font-bold cursor-pointer hover:text-white'>
          Stremie
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-orange-600 pr-4 hover:text-black'>Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-orange-600 px-6 py-2 rounded cursor-pointer text-black hover:bg-black hover:text-orange-600'
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-orange-600 pr-4 hover:text-white'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-orange-600 px-6 py-2 rounded cursor-pointer text-black hover:bg-black hover:text-orange-600'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;