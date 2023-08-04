import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../backend/AuthContext'
//secures the users info and puts them straight into the home page 
const ProtectedRoute = ({children}) => {

    const {user} = UserAuth()
    if(!user){
        return <Navigate to="/" />
    }else{
        return children
    }
  
}

export default ProtectedRoute