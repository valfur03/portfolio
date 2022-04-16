import React from 'react';
import styles from './project-card.module.scss'

function TechsStack(props) {
	return (<div className={styles.techs}>
		{props.techs.map((tech) => {
			return <img key={tech} title={tech} className={styles.tech_icon} src={`/icons/${tech}.svg`} alt={tech} />;
		})}
	</div>)
}

function LatestCommit(props) {
	return (<>
		<img className={styles.clock_icon} src='/icons/clock.svg' alt='clock' />
		<p>2 days ago NO</p>
	</>)
}

export default class ProjectCard extends React.Component {
	render() {
		const { name, description, techs, github_url } = this.props.project;
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
						<LatestCommit github_url={github_url} />
						<a href={github_url}><img className={styles.github_icon} src='/icons/github.svg' alt='github' /></a>
					</div>
				</div>
			</div>
		)
	}
}