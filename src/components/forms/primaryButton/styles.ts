import styled from "styled-components";

export const Button = styled.button`
	background-color: ${props => `${props.theme.colors.green}`};
	width: 300px;
	height: 35px;
	border: none;
	border-radius: 5px;
	color: ${props => `${props.theme.colors.white}`};
	font-weight: ${props => `${props.theme.fontWeights.bold}`};
	transition: ease-in 0.1s;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
	cursor: pointer;

	:hover {
		filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0));
		background-color: ${props => `${props.theme.colors.darkGreen}`};
	}
`;