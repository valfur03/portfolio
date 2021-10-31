import React from 'react';
import Image from 'next/image'
import styles from './home.module.scss'

export default class Home extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.favicon}><Image className={styles.favicon} src="/me.svg" alt="me" width="192px" height="192px" /></div>
				<div className={styles.my_info}>
					<h1>Valentin Furmanek</h1>
					<h2>Student at 42Paris.</h2>
					<div className={styles.icons_container}>
						<a className={styles.icon} href="https://github.com/valfur03"><Image src="/icons/github.svg" alt="github" width="36px" height="36px" /></a>
						<a className={styles.icon} href="https://www.linkedin.com/in/valentin-furmanek/"><Image src="/icons/linkedin.svg" alt="linkedin" width="36px" height="36px" /></a>
						<a className={styles.icon} href="https://twitter.com/hintauh"><Image src="/icons/twitter.svg" alt="twitter" width="36px" height="36px" /></a>
					</div>
				</div>
			</div>
		)
	}
}