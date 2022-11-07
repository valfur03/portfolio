import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; // TODO
		color: ${props => props.theme.color.onSurface};
	}
	
	body,
	html {
		font-size: 12px;
	}
	
	h4 {
		margin-bottom: 0.6em;
	
		font-size: 1.2em;
	}

	p {
		color: ${props => props.theme.color.onSurfaceSecondary};
	}

	svg {
		color: ${props => props.theme.color.onSurface};
	}

	@media screen and (min-width: 834px) {
		body,
		html {
			font-size: 22px;
		}
	}
`;

export default GlobalStyle;
