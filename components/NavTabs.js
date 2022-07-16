import styles from './NavTabs.module.scss'

export default function NavTabs() {
	return (
		<div className={styles.container}>
			<div className={styles.tab}>
				<img alt="cpp logo" src="/icons/cpp.svg" />
			</div>
			<div className={styles.tab}>
				<img alt="cpp logo" src="/icons/cpp.svg" />
			</div>
			<div className={styles.tab}>
				<img alt="cpp logo" src="/icons/cpp.svg" />
			</div>
		</div>
	);
}
