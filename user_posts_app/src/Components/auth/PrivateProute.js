import React from 'react'
import { useHistory } from "react-router-dom"

const   PrivateProute = ({ Component }) => {
    const history = useHistory();
    console.log(localStorage, window.location.pathname);
    // if (localStorage.getItem("token")) {
    //     history.push("/")
    // }

    if (!localStorage.getItem("token")) {
        if(window.location.pathname === '/signup' || window.location.pathname === '/signin'){
            return (<Component/>)
        }
        history.push("/signup")
    } else {
        return (<Component />)
    }
}

export default PrivateProute