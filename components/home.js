import React from 'react';
import GithubIcon from './github-icon';
import LinkedinIcon from './linkedin-icon';
import MeImage from './me-image';
import styles from './home.module.scss';

export default function Home() {
	return (
		<div id='home' className={styles.container}>
			<div className={styles.favicon}><MeImage /></div>
			<div className={styles.my_info}>
				<h1>Valentin Furmanek</h1>
				<h2>Student at 42Paris.</h2>
				<div className={styles.icons_container}>
					<a className={styles.icon} href='https://github.com/valfur03'><GithubIcon /></a>
					<a className={styles.icon} href='https://www.linkedin.com/in/valentin-furmanek/'><LinkedinIcon /></a>
				</div>
			</div>
		</div>
	);
}
