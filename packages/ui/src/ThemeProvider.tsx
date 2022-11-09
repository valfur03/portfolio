import { ThemeProvider, createGlobalStyle } from 'styled-components';

export const defaultTheme = {
	card: {
		small: {
			width: '256px',
		},
		medium: {
			width: '512px',
		},
		large: {
			width: '1056px',
		},
	},
	color: {
		background: '#F1F1F1',
		backgroundSecondary: '#E1E1E1',
		midgrey: '#7F7F7F',
		onSurface: '#212121',
		onSurfaceSecondary: '#515151',
		primary: '#3C6CA7',
		secondary: '#17A398',
		surface: '#FBFBFB',
		ternary: '#465362',
	},
	icon: {
		size: {
			small: '1.4rem',
			medium: '1.7rem',
			large: '2rem',
		},
	},
};

export const ValfurLibThemeProvider = (props) => {
	const theme = Object.assign({}, defaultTheme, props.theme);
	return (
		<ThemeProvider theme={theme}>
			{ props.children }
		</ThemeProvider>
	);
};

export type GlobalStyleType = {
	theme: typeof defaultTheme,
};

export const GlobalStyle = createGlobalStyle<GlobalStyleType>`
	* {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
