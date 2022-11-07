import { ThemeProvider } from 'styled-components';

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

const ValfurLibThemeProvider = (props) => {
	const theme = Object.assign({}, defaultTheme, props.theme);
	return (
		<ThemeProvider theme={theme}>
			{ props.children }
		</ThemeProvider>
	);
};

export default ValfurLibThemeProvider;
