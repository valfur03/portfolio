import React from 'react';
import HammerIcon from './Icons/Hammer';
import styles from './WIP.module.scss';

export default function WIP() {
	return (
		<div className={styles.container}>
			<HammerIcon />
			<p>This site is currently under construction.</p>
			<hr className={styles.divider} />
		</div>
	);
}
