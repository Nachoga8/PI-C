import styled from 'styled-components';

export const StyledDetail = styled.div`
	
	font-family: 'Overpass', sans-serif;
	.contenedor {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		margin: 2rem;
		background-color: var(--background);
		border: 1px solid #90400c;
		border-radius: 10px;
		-webkit-box-shadow: 0px 5px 15px 0px rgba(128, 128, 128, 0.45);
		-moz-box-shadow: 0px 5px 15px 0px rgba(128, 128, 128, 0.45);
		box-shadow: 0px 5px 15px 0px rgba(128, 128, 128, 0.45);
		color: var(--black);
		text-decoration: none;
		align-self: center;
	}
	.activity {
		display: flex;
    flex-direction: column;
	}
	/* .imgDetails2 {
		padding-block-start: 0px;
		width: 300px; */
	}
	.imgDetails {
		height: 250px;
	}
	.goBack {
		margin: 180px 40px 50px;
		color: #ffff;
		background-color: #333;
		border: none;
		padding: 15px 25px;
		border-radius: 15%;
		transition: background-color 100ms ease, font-weight 100ms ease;
		outline: none;
		cursor: pointer;
		&:hover {
			font-weight: bold;
			background-color: #22933f;
		}
	}
`;