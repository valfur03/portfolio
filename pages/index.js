import Head from 'next/head';
import TopBar from '../components/TopBar';
import WIP from '../components/WIP';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import MyProjects from '../components/MyProjects';
import MySkills from '../components/MySkills';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Portfolio() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Valentin Furmanek</title>
				<meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
				<link rel='manifest' href='/site.webmanifest' />
				<meta name='theme-color' content='#17a398' />
				<meta name='application-name' content='Valfur' />
				<link rel='shortcut icon' href='/favicon.ico' />
				<meta name='apple-mobile-web-app-title' content='Valfur' />
				<link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
			</Head>
			<TopBar />
			<WIP></WIP>
			<main>
				<Home />
				<AboutMe />
				<MyProjects />
				<MySkills />
			</main>
			<Footer />
		</div>
	);
}
