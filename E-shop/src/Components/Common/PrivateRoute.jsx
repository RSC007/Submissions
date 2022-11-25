import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({ Component, ...rest }) => {
    const userRolePresent = useSelector(state => state.users.userRole)
    const navigate = useNavigate()

    if((userRolePresent !== "ADMIN" || userRolePresent) && window.location.pathname === "/"){
        navigate("/signin")
    }else{
        return <Component />
    }
}

export default PrivateRoute