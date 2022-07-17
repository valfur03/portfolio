import styles from './MySkills.module.scss'
import ListCard from './ListCard'

function CppSkill() {
	return (
		<>
			<p>This is like the first language I ever learned.</p>
			<p>So nostalgic...</p>
		</>
	);
}

function PythonSkill() {
	return (
		<>
			<p>I don't know that language at all...</p>
		</>
	);
}

const skills = [
	{
		id: 0,
		title: 'C++',
		icon: '/icons/cpp.svg',
		Content: CppSkill,
	},
	{
		id: 1,
		title: 'Python',
		icon: '/icons/python.svg',
		Content: PythonSkill,
	},
];

export default function MySkills() {
	return (
		<div className={styles.container}>
			<h3>My skills</h3>
			<ListCard list={skills} />
		</div>
	);
}
