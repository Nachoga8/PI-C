import React from 'react';
import { StyledAbout } from './StyledAbout';

const About = () => {
	return (
		<StyledAbout>
			<div className='about'>
				<h1>PI-Countries</h1>
				<p>
					Este proyecto fue creado para brindar información relacionada a los países del mundo y sus actividades turísticas, todo el contenido fue brindado por la siguiente Rest Api
					{' '}
					<a
						href='https://restcountries.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						the Countries API
					</a>
					. Creado por Ignacio Ganem.
				</p>
				
			</div>

			<h1>Contact</h1>
			<div className='social-media'>
				<div>
					<i class='fab fa-linkedin'></i>
					<p>
						<a
							href='https://www.linkedin.com/in/ignacio-ganem-/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Linkedin
						</a>
					</p>
				</div>
				<div>
					<i class='fab fa-linkedin'></i>
				</div>
				<div>
					<i class='fab fa-github-square'></i>
					<p>
						<a
							href='https://github.com/Nachoga8'
							target='_blank'
							rel='noopener noreferrer'
						>
							Github
						</a>
					</p>
				</div>
			</div>
			<div className='email'>
				<div>
					<i class='fas fa-envelope-open-text'></i>
					<p>E-mail</p>
				</div>
				
				<p>ganemnacho@gmail.com</p>
			</div>
		</StyledAbout>
	);
};

export default About;