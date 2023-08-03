import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, logIn} = UserAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        await logIn(email, password)
        navigate('/')
      }catch (error){
        console.log(error)
        setError(error.message)
      }
    }
  return (
    <div>
      <div className='w-full h-screen'>
        <img 
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/32efd2dd-513d-4a27-ac5d-0fe38c6d57a4/KE-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        />
        <div className='bg-black/60 fixed top-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-orange-400'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Log in</h1>
              {error ? <p className='p-3 bg-red-700 my-2'>{error}</p> : null}
              <form 
              onSubmit={handleSubmit}
              className='w-full flex flex-col py-4'>
                <input 
                onChange={(e)=> setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-300 rounded' 
                type='email' 
                placeholder='Email' 
                autoComplete='email'
                />
                <input 
                onChange={(e)=> setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-300 rounded' 
                type='password'
                placeholder='Password' 
                autoComplete='current-password'
                />
                <button className='bg-black py-3 my-6 rounded font-bold hover:bg-orange-400 hover:text-black'>Log in</button>
                <div className='flex justify-between items-center text-sm text-orange-400'>
                  <p className='cursor-pointer'><input className='mr-2 cursor-pointer' type='checkbox'></input>Remember Me</p>
                  <p><a href='https://www.netflix.com/ke/LoginHelp'>Need help?</a></p>
                </div>
                <p className='py-8'><span>New to Stremie?</span>{' '}
                <Link to='/signup'>Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login