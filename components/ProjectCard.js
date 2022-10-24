import React, { useEffect, useState } from 'react';
import GithubIcon from './Icons/Github';
import ClockIcon from './Icons/Clock';
import TechIcons from './TechIcons';
import styles from './ProjectCard.module.scss';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

function TechsStack(props) {
	return (
		<div className={styles.techs}>
			{props.techs.map((tech) => {
				return <div key={tech} className={styles.tech_icon_wrapper}><TechIcons tech={tech} /></div>;
			})}
		</div>
	);
}

async function fetchLatestCommitDate(github_repo) {
	const res = await fetch(`https://api.github.com/repos/${github_repo}/commits`);
	const data = await res.json();
	if (res.status >= 400 || data.length == 0) return null;
	return data[0].commit.author.date;
}

function LatestCommit(props) {
	const { github_repo } = props;
	const [latest_commit, setLatestCommit] = useState(null);

	useEffect(() => {
		fetchLatestCommitDate(github_repo)
			.then((date) => {
				if (date === null) return;
				setLatestCommit(dayjs(date).fromNow());
			})
			.catch((error) => {
				console.error(error);
			});
	}, [github_repo]);

	if (latest_commit === null) return <></>;
	return (<>
		<div className={styles.clock_icon_wrapper}><ClockIcon /></div>
		<p>{latest_commit}</p>
	</>);
}

export default class ProjectCard extends React.Component {
	render() {
		const { title, content, coverImage } = this.props.project;
		return (
			<div className={styles.container}>
				<div className={styles.project_image}>
					<img src={coverImage} alt={`${title}_img`}/>
				</div>
				<div className={styles.project_description}>
					<h4>{title}</h4>
					<div className={styles.paragraphs}>
						{ content }
					</div>
					<div className={styles.bottom_row}>
					</div>
				</div>
			</div>
		);
	}
}
