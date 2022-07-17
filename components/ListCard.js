import { useState } from 'react';
import styles from './ListCard.module.scss'
import NavTabs from './NavTabs';
import CardContent from './CardContent';

export default function ListCard(props) {
	const [selectedCard, setSelectedCard] = useState(props.list[0]?.id);
	if (selectedCard === undefined) return <></>;
	return (
		<div className={styles.container}>
			<NavTabs list={props.list} selectedCard={selectedCard} selectCard={setSelectedCard} />
			<CardContent item={props.list[selectedCard]} />
		</div>
	);
}
