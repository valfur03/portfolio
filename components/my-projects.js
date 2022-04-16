import React from 'react';
import styles from './my-projects.module.scss'
import ProjectCard from './project-card';

const projects = [
	{
		name: 'Alekol',
		description: [
			'Alekol is a Discord bot to automatically add or remove a role whether you are logged at 42 school. It provides commands that use 42 and Discord API, and uses OAuth2 protocol.',
			'This is a group project where we used Github Actions and pull requests features.',
		],
		techs: [
			'nodejs',
			'nextjs',
			'discord',
			'supabase',
		],
		github_repo: 'theovgl/bot_alekol',
	}
]

export default class MyProjects extends React.Component {
	render() {
		return (
			<div id="my-projects" className={styles.container}>
				<h3>My projects</h3>
				<div className={styles.projects}>
					{projects.map((project) => {
						return <ProjectCard key={project.name} project={project} />
					})}
				</div>
			</div>
		)
	}
}