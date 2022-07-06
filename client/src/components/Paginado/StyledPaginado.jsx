import styled from 'styled-components';
export const StyledPaginado = styled.div`
	color: white;
	padding-bottom: 50px;
	padding-top: 50px;
	position: relative;
	ul {
		display: flex;
		list-style: none;
		justify-content: center;
		flex-wrap: wrap;
		gap: 16px;
		margin: 0 15px 10px 15px;
		a {
			text-decoration: none;
			padding: 5px 10px;
			border: 1px solid var(--cardTitle);
			border-radius: 5px;
			cursor: pointer;
		}
		a:hover {
			transition: all 0.3s ease-in-out;
			color: #004D40;
			background-color: gray;
		}
		.active {
			background-color: #8fbfd6eb;
		}
	}
`;