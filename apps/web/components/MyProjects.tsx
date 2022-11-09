import React from 'react';
import styles from './MyProjects.module.scss';
import { Card, CardMedia } from 'ui';

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
		github_repo: 'theovgl/alekol-42',
	},
];
export default function MyProjects() {
	return (
		<div id='my-projects' className={styles.container}>
			<h3>My projects</h3>
			<div className={styles.projects}>
				{projects.map((project) => {
					return (
						<Card key={project.name}>
							<CardMedia image={`/projects/${project.name}.webp`}/>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
