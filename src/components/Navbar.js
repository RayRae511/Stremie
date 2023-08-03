import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const Navbar = () => {
  const {users, logOut} = UserAuth()
  const navigate = useNavigate()
  //console.log(user) shows

  const handleLogout = async () => {
    try{
      await logOut()
      navigate('/')
    }catch (err){
      console.log(err)
    }
  }
  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
    <Link to='/'>
        <h1 className='text-orange-500 font-bold text-4xl cursor-pointer hover:text-white'>Stremie</h1>
        </Link>
        {users?.email ?(
        <div>
          <Link to='/account'>
          <button className='text-orange-400 pr-4 hover:text-black'>Account</button>
          </Link>
          <button 
          onClick={handleLogout}
          className='bg-orange-400 px-6 py-2 rounded cursor-pointer hover:bg-black hover:text-orange-400'>Log out</button>
        </div>
        ):(
          <>
          <Link to='/login'>
          <button className='text-black px-9 py-2 rounded cursor-pointer hover:text-orange-400'>Log in</button>
          </Link>
          <Link to='/signup'>
          <button className='bg-orange-400 px-6 py-2 rounded cursor-pointer hover:bg-black hover:text-orange-400'>Sign up</button>
          </Link>
          </>
        )}
    </div>
  )
}

export default Navbar