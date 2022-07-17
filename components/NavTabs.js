import styles from './NavTabs.module.scss'

export default function NavTabs(props) {
	const { list, selectCard } = props;

	function selectCardOnClick(item) {
		selectCard(item.id);
	}

	return (
		<div className={styles.container}>
			{
				list.map((item) =>
					<div key={item.id} title={item.title} onClick={() => selectCardOnClick(item)} className={styles.tab}>
						<img alt={`${item.title} logo`} src={item.icon} />
					</div>
				)
			}
		</div>
	);
}
