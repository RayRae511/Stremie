//The log in page
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../backend/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
//backend stuff...idk dude =/

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  return (
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        //sm: => 'small >= 576px' md: => 'medium >= 768px' lg: => 'large >= 1024px' xl 'xtra large >= 1280px'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-black'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold text-orange-600'>Sign In</h1>
            {error ? <p className='p-3 bg-orange-500 my-2'>{error}</p> : null}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-orange-700 rounded'
                type='email'
                placeholder='Email'
                autoComplete='email'
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 bg-orange-700 rounded'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
              />
              <button className='bg-orange-600 py-3 my-6 rounded font-bold hover:bg-black hover:text-orange-600'>
                Sign In
              </button>
              <div className='flex justify-between items-center text-sm text-orange-700 cursor-pointer'>
                <p>
                  <input className='mr-2 cursor-pointer' type='checkbox' />
                  Remember me
                </p>
                <a href='https://help.netflix.com/en' className='cursor-pointer text-gray-500 hover:text-orange-700'><p>Need Help?</p></a>
              </div>
              <p className='py-8'>
                <span className='text-gray-300'>New to Stremie?</span>{' '}
                <Link to='/signup' className='hover:text-orange-600 text-white'>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;