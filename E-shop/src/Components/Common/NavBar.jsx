import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogout } from '../../Redux/usersSlice'

const NavBar = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const activeUser = useSelector(state=> state.users.activeUser)

	useEffect(()=>{
		if(typeof(activeUser) === "object" && !activeUser.email){
			navigate("/signup")
		}
		// eslint-disable-next-line
	},[activeUser])

	const logout = () => {
		if(activeUser.email){
			dispatch(userLogout())
			navigate("/signup")
			return
		}
		if(window.location.pathname === "/signup"){
			navigate("/signin")
		}else{
			navigate("/signup")
		}
	}

    return (
        <nav>
				<div className='nav-wrapper'>
					<div className='list-item'>
						<p to='/'>Home</p>
					</div>
					<div className='nav-list'>
						<div className='list-item'>
							{activeUser.email && <p>Welcome {activeUser.firstName}</p>}
						</div>
						<div className='list-item'>
							<p onClick={logout}>{activeUser.email ? "Logout" : window.location.pathname === "/signup" ? "SignIn" : "SignUp"}</p>
						</div>
					</div>
				</div>
			</nav>
    )
}

export default NavBar