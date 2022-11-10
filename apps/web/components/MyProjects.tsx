import React from 'react';
import styles from './MyProjects.module.scss';
import { Card, CardContent, CardFooter, CardMedia, GithubRepo } from 'ui';

const projects = [
	{
		name: 'Alekol',
		image: '/projects/Alekol.webp',
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
					const media = project.image ? <CardMedia image={project.image}/> : null;
					return (
						<Card key={project.name}>
							{ media }
							<CardContent label={project.name}>
								{project.description.map((paragraph, index) => {
									return <p key={index}>{paragraph}</p>;
								})}
								<CardFooter>
									<div></div>
									<GithubRepo slug={project.github_repo} showLastCommit={true} />
								</CardFooter>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
