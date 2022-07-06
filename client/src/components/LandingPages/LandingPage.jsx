import React from 'react';
import { StyledLanding } from './StyledLanding';
import { Link } from 'react-router-dom';
import Img from './images/wp7515712.jpg';
const LandingPage = () => {
	return (
		<StyledLanding>
			<div className='back'>
				<img src={Img} alt='imagen de welcome' />
			</div>
			<div className='container'>
				<Link to='/home'>ENTRAR</Link>
			</div>
		</StyledLanding>
	);
};

export default LandingPage;