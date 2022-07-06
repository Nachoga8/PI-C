import styled from 'styled-components';

export const StyledNavbar = styled.div`
	width: 100%;
	position: fixed;
	background: #004D40;
	color: var(--black);
	top: 0;
	left: 0;
	z-index: 10;
	display: flex;
	.container {
		margin: auto;
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: var(--black);
		padding: 10px;
		.img {
			border: 2px solid red;
		}
		.far {
			font-size: 1.5rem;
			margin-right: 10px;
		}
	}
	.title {
		color: var(--black);
		font-weight: bold;
		font-size: 30px;
		font-family: 'Dancing Script', cursiva;
	}
	.list {
		color: white;
		display: flex;
		list-style: none;
		display: flex;
		align-items: center;
	}
	.list-item,
	.far {
		color: var(--black);
		cursor: pointer;
		color: var(--black);
		margin: 0 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.list-item a {
		color: var(--background);
		/* height: 100%; */
		padding: 6px 14px;
		margin-top: 5px;
		margin-bottom: 5px;
		text-decoration: none;
		border-radius: 20px;
		transition: background-color 150ms ease;
		font-weight: bold;
		border: 2px solid var(--background);
		font-family: 'Dancing Script', cursiva;
	}
	.active {
		color: var(--black);
		background-color: var(--black);
	}
	.list-item a:hover {
		/* border: 2px solid red; */
		background-color: var(--background);
		color: white;
		font-weight: bold;
	}
	@media (max-width: 900px) {
		.container {
			flex-direction: column;
		}
	}
	@media (max-width: 650px) {
		.social-media {
			height: 50px;
			i {
				font-size: 35px;
			}
		}
		.list-item a {
			font-size: 14px;
		}
	}
`;