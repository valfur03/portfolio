import React from 'react';
import styles from './home.module.scss'

export default class Home extends React.Component {
	render() {
		return (
			<div id="home" className={styles.container}>
				<div className={styles.favicon}><img className={styles.favicon} src="/me.svg" alt="me" /></div>
				<div className={styles.my_info}>
					<h1>Valentin Furmanek</h1>
					<h2>Student at 42Paris.</h2>
					<div className={styles.icons_container}>
						<a className={styles.icon} href="https://github.com/valfur03"><img className={styles.icon_img} src="/icons/github.svg" alt="github" /></a>
						<a className={styles.icon} href="https://www.linkedin.com/in/valentin-furmanek/"><img className={styles.icon_img} src="/icons/linkedin.svg" alt="linkedin" /></a>
					{/*	<a className={styles.icon} href="https://twitter.com/hintauh"><img className={styles.icon_img} src="/icons/twitter.svg" alt="twitter" /></a> */}
					</div>
				</div>
			</div>
		)
	}
}
