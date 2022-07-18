import styles from './NavTabs.module.scss';

export default function NavTabs(props) {
	const { list, selectedCard, selectCard } = props;

	function selectCardOnClick(index) {
		selectCard(index);
	}

	return (
		<div className={styles.container}>
			{
				list.map((item, index) => {
					let classNames = styles.tab;
					if (index == selectedCard) classNames += ' ' + styles.selected;
					return (
						<div key={index} title={item.title} onClick={() => selectCardOnClick(index)} className={classNames}>
							<img alt={`${item.title} logo`} src={item.icon} />
						</div>
					);
				})
			}
		</div>
	);
}
