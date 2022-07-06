import React from 'react';
import { StyledNavbar } from './StyledNavbar';
import { NavLink } from 'react-router-dom';
// import Img from './images/lupa.png';

function Navbar() {

	return (
		<StyledNavbar>
			{/* <img className='img' src={Img} alt/> */}
			<div className='container'>
				<div className='title'>
					<p>Countries App</p>
				</div>
				<div>
					<ul className='list'>
						<li className='list-item'>
						
							<NavLink exact to='/home'>
								Home
							</NavLink>
						</li>
						<li className='list-item'>
							<NavLink exact to='/'>
								Principal
							</NavLink>
							<NavLink exact to='/create/activity'>
								<center>Crear Actividad </center>
							</NavLink>
						</li>
						<li className='list-item'>
							<NavLink exact to='/about'>
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</StyledNavbar>
	);
}

export default Navbar;