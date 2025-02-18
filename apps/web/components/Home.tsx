import React from 'react';
import GithubIcon from './Icons/Github';
import LinkedinIcon from './Icons/Linkedin';
import MeImage from './MeImage';
import styles from './Home.module.scss';

export default function Home() {
	return (
		<div id='home' className={styles.container}>
			<div className={styles.favicon}><MeImage /></div>
			<div className={styles.my_info}>
				<h1>Valentin Furmanek</h1>
				<h2>Software engineer</h2>
				<div className={styles.icons_container}>
					<a className={styles.icon} href='https://github.com/valfur03'><GithubIcon /></a>
					<a className={styles.icon} href='https://www.linkedin.com/in/valentin-furmanek/'><LinkedinIcon /></a>
				</div>
			</div>
		</div>
	);
}
