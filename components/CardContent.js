import styles from './CardContent.module.scss'

export default function NavTabs(props) {
	const { title, Content } = props.item;
	return (
		<div className={styles.container}>
			<h4>{ title }</h4>
			<Content />
		</div>
	);
}
