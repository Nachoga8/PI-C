import React from 'react';
import { StyledPaginado } from './StyledPaginado';

const Paginado = ({ countries, couPerPage, paginado }) => {
	const pageNumber = [];

	for (let i = 1; i <= Math.ceil(countries / couPerPage); i++) {
		pageNumber.push(i);
	}

	return (
		<StyledPaginado>
			<nav>
				<ul>
					{pageNumber &&
						pageNumber.map((n) => (
							<li key={n}>
								<a onClick={() => paginado(n)}href>{n}</a>
								{/* <button onClick={() => paginado(n)}>{n}</button> */}
							</li>
						))}
				</ul>
			</nav>
		</StyledPaginado>
	);
};

export default Paginado;