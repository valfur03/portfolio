import React from 'react';
import styles from './TopBar.module.scss';

export default function TopBar() {
	return (
		<div className={styles.top_bar}>
			<ul className={styles.sections_list}>
				<li className={styles.section}><a href='#home'>Home</a></li>
				<li className={styles.section}><a href='#about-me'>About me</a></li>
				<li className={styles.section}><a href='#my-projects'>My projects</a></li>
				{/* <li className={styles.section}><a href="#">My skills</a></li> */}
			</ul>
		</div>
	);
}
