import styles from './MySkills.module.scss'
import ListCard from './ListCard'

export default function MySkills() {
	return (
		<div className={styles.container}>
			<h3>My skills</h3>
			<ListCard />
		</div>
	);
}
