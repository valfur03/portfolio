import styles from './MySkills.module.scss';
import Callout from './Callout';
import HorizontalList from './HorizontalList';
import ListCard from './ListCard';

function CppSkill() {
	const projects = [
		{
			title: 'ft_containers',
			url:   'https://github/vfurmane/ft_containers',
		},
	];
	const list = projects.map((elm, index) => <a key={index} href={elm.url}>{elm.title}</a>);
	return (
		<>
			<p>C++ was the first language I learned. In 2018, I wanted to start programming something other than my TI calculator.</p>
			<p>I had no other programming knowledge and I heard about two languages : C++ and Python. Even though it is supposed to be more difficult, I chose C++. It seemed easier because the low-level programming helped me understand how the computer managed memory.</p>
			<p>Late 2021, I started studying C++ again, at school this time. It made me realize that I only knew a fraction of this language.</p>
			<h5>Related projects</h5>
			<HorizontalList list={list} />
		</>
	);
}

function CSkill() {
	const projects = [
		{
			title: 'miniRT',
			url:   'https://github/vfurmane/miniRT',
		},
		{
			title: 'fract-ol',
			url:   'https://github/vfurmane/fract-ol',
		},
		{
			title: 'minishell',
			url:   'https://github/vfurmane/minishell',
		},
		{
			title: 'ft_printf',
			url:   'https://github/vfurmane/ft_printf',
		},
	];
	const list = projects.map((elm, index) => <a key={index} href={elm.url}>{elm.title}</a>);
	return (
		<>
			<p>C was the first language that I learned in school. I really like how the programmer is in charge seeking for optimizations, such as memory management or execution speed.</p>
			<p>I also feel like low-level programming helped me learn how UNIX-like systems work. We can play with I/O, filesystem threads without having libraries doing all the work for us.</p>
			<h5>Related projects</h5>
			<HorizontalList list={list} />
		</>
	);
}

function FrontEndSkill() {
	const projects = [
		{
			title: 'this portfolio',
			url:   'https://github/valfur03/portfolio',
		},
		{
			title: 'Alekol',
			url:   'https://github/theovgl/alekol-42',
		},
	];
	const list = projects.map((elm, index) => <a key={index} href={elm.url}>{elm.title}</a>);
	return (
		<>
			<Callout>This section regroups HTML, CSS and JavaScript all at once. Otherwise I would not have anything interresting to talk about...</Callout>
			<p>Front-End web development is one of my favorite things to do in programming. It allows me to work on my creativity, while creating comprehensive interfaces for the user.</p>
			<h5>Related projects</h5>
			<HorizontalList list={list} />
		</>
	);
}

function PythonSkill() {
	return (
		<>
			<p>I don&lsquo;t have much knowledge about Python. I don&lsquo;t find this language very interresting (you understood my love for low-level programming by reading the C and C++ sections) and the syntax is quite surprising.</p>
			<p>However, even though this is not a priority at all, I am interrested in learning more about it since it is a language of choice for AI development.</p>
		</>
	);
}

function RustSkill() {
	return (
		<>
			<p>I am still learning Rust, but I think this language brings new concepts that are very nice to play with. It feels like there is always one way to achieve something because of the constraints the language imposes.</p>
			<p>But I guess only a good old meme can explain that:</p>
			<img className={styles.rust_meme} src='/rust-meme.png' alt='the rust good old meme' />
		</>
	);
}

const skills = [
	{
		title:   'C++',
		icon:    '/icons/cpp.svg',
		Content: CppSkill,
	},
	{
		title:   'C',
		icon:    '/icons/c.svg',
		Content: CSkill,
	},
	{
		title:   'Rust',
		icon:    '/icons/rust.svg',
		Content: RustSkill,
	},
	{
		title:   'Python',
		icon:    '/icons/python.svg',
		Content: PythonSkill,
	},
	{
		title:   'Front-End',
		icon:    '/icons/front-end.svg',
		Content: FrontEndSkill,
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
