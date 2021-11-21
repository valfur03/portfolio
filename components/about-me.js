import React from 'react';
import styles from './about-me.module.scss'

export default class AboutMe extends React.Component {
	render() {
		return (
			<div id="about-me" className={styles.container}>
				<h3>About me</h3>
				<div className={styles.paragraphs}>
					<p className={styles.paragraph}>I like coding since I was 13. I love learning about new technologies, languages, and many other stuffs.</p>
					<p className={styles.paragraph}>I admire open source, libre and free software projects. This mindset make tech more inclusive according to me.</p>
					<p className={styles.paragraph}>I am currently studying at 42 Paris, but if you are interested in working with me, feel free to contact me.</p>
				</div>
			</div>
		)
	}
}