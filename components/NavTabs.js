import styles from './NavTabs.module.scss'

export default function NavTabs(props) {
	const { list, selectedCard, selectCard } = props;

	function selectCardOnClick(item) {
		selectCard(item.id);
	}

	return (
		<div className={styles.container}>
			{
				list.map((item) => {
					let classNames = styles.tab;
					if (item.id == selectedCard) classNames += ' ' + styles.selected;
					return (
						<div key={item.id} title={item.title} onClick={() => selectCardOnClick(item)} className={classNames}>
							<img alt={`${item.title} logo`} src={item.icon} />
						</div>
					);
				})
			}
		</div>
	);
}
