import React from 'react';
import HammerIcon from './hammer-icon.module.js';
import styles from './wip.module.scss';

export default function WIP() {
	return (
		<div className={styles.container}>
			<HammerIcon />
			<p>This site is currently under construction.</p>
			<hr className={styles.divider} />
		</div>
	);
}
