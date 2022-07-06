import styled from 'styled-components';

export const StyledLanding = styled.div`
	.back {
		height: 100vh;
		width: 100vw;
		position: relative;
		img {
			height: 100%;
			width: 100%;
		}
	}
	.container {
		transform: translateY(-50%);
		text-shadow: 0px 0px 10px black, 0px 0px 50px black;
		position: absolute;
		top: 55%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 3rem;
		font-weight: bold;
		text-align: center;
		width: 100%;
		padding: 0px;
		margin: 0px;
	}
	a {
		color: white;
		font-size: 20px;
		text-decoration: none;
		border: 3px solid white;
		padding: 10px 35px;
		transition: background-color 200ms ease;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
		border-radius: 20px;
		&:hover {
			background-color: white;
			color: black;
			text-shadow: none;
		}
	}
	h1 {
		color: white;
		margin-bottom: 40px;
		text-align: center;
		font-size: 60px;
		line-height: 1.2;
	}
`;