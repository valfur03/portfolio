import React, { useEffect, useState } from 'react';
import styles from './project-card.module.scss'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

function TechsStack(props) {
	return (<div className={styles.techs}>
		{props.techs.map((tech) => {
			return <img key={tech} title={tech} className={styles.tech_icon} src={`/icons/${tech}.svg`} alt={tech} />;
		})}
	</div>)
}

function LatestCommit(props) {
	const [latest_commit, setLatestCommit] = useState(null);

	useEffect(async () => {
		let res;
		try {
			res = await fetch(`https://api.github.com/repos/${props.github_repo}/commits`)
		} catch (error) {
			console.error(error);
			return
		}
		const data = await res.json();
		if (res.status >= 400 || data.length == 0) return
		setLatestCommit(dayjs(data[0].commit.author.date).fromNow());
	}, [])

	if (latest_commit == null) return <></>
	return (<>
		<img className={styles.clock_icon} src='/icons/clock.svg' alt='clock' />
		<p>{latest_commit}</p>
	</>)
}

export default class ProjectCard extends React.Component {
	render() {
		const { name, description, techs, github_repo } = this.props.project;
		return (
			<div className={styles.container}>
				<div className={styles.project_image}>
					<img src={`/projects/${name}.jpg`} alt={`${name}_img`}/>
				</div>
				<div className={styles.project_description}>
					<h4>{name}</h4>
					<div className={styles.paragraphs}>
						{description.map((paragraph, index) => {
							return <p key={index}>{paragraph}</p>
						})}
					</div>
					<TechsStack techs={techs} />
					<div className={styles.repo}>
						<LatestCommit github_repo={github_repo} />
						<a href={`https://github.com/${github_repo}`}><img className={styles.github_icon} src='/icons/github.svg' alt='github' /></a>
					</div>
				</div>
			</div>
		)
	}
}