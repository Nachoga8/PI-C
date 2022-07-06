import React from 'react';
import { StyledCards } from './StyledCards';

const Card = ({ name, image, continents }) => {
	return (
		console.log('continents', continents),
		(
			<StyledCards>
				<div className='info'>
					{/* <div className=' contImg'>
					<img src={image} alt='imagen de welcome' />
				</div> */}
					<div className='img2'>
						<img src={image} alt='imagen de welcome' />
					</div>
					<h2>{name}</h2>
					<div className='contenedor'>
						<p>
							<h3>Continent:</h3>
						</p>
						<h2>{continents}</h2>
					</div>
				</div>
			</StyledCards>
		)
	);
};

export default Card;