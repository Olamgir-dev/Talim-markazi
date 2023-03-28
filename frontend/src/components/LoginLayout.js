import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
function LoginLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default LoginLayout