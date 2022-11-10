import '../styles/globals.scss';
import { GlobalStyle, ThemeProvider } from 'ui';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
