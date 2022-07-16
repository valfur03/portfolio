import styles from './ListCard.module.scss'
import NavTabs from './NavTabs';
import CardContent from './CardContent';

export default function ListCard() {
	return (
		<div className={styles.container}>
			<NavTabs />
			<CardContent />
		</div>
	);
}
