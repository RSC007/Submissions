import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userLogout } from '../../api/authSlice';

const NavBar = () => {
	const isLogin = localStorage.getItem("token")
	const history = useHistory()
	const dispatch = useDispatch()
	const logout = () => {
		if(isLogin){
			dispatch(userLogout())
			history.push("/signup")
		}else{
			history.push("/signin")
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
							{isLogin && <p>Welcome Rushi</p>}
						</div>
						<div className='list-item'>
							<p onClick={logout}>{isLogin ? "Logout" : "SignIn"}</p>
						</div>
					</div>
				</div>
			</nav>
    )
}

export default NavBar