import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../Contexts/AuthContext'

export default function ProdectAuth({ children }) {
     const {isLogin}=useContext(authContext)


    return !isLogin ? children : <Navigate to={"/"} />
}
