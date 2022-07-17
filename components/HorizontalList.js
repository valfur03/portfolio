import styles from './HorizontalList.module.scss'

export default function HorizontalList(props) {
	const { list } = props;
	if (list === undefined) return <></>;
	return (
		<div className={styles.container}>
			<ul>
				{ list.map((elm, index) => 
					<li className={styles.elm} key={index}>{ elm }</li>
				) }
			</ul>
		</div>
	);
}
