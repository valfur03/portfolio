import styles from './Callout.module.scss';

export default function Callout(props) {
	return (
		<div className={styles.container}>
			{ props.children }
		</div>
	);
}
