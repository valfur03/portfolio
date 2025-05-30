import React from 'react';
import styles from './MyProjects.module.scss';
import { Card, CardContent, CardFooter, CardMedia, GithubRepo, LiveUrl } from 'ui';

const projects = [
	{
		name: 'Votes Data',
		image: '/projects/votes-data.webp',
		description: [
			'Votes Data is a POC about a Dataviz interface for French elections.',
			'The goal of this project is to provide meaningful graphs to quickly understand statements about voters behaviors.',
		],
		techs: [
			'nextjs',
			'SSR',
			'vercel',
			'd3.js',
			'figma',
		],
		github_repo: 'valfur03/votes-data',
		live_url: 'https://votes-data.vercel.app',
	},
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
	{
		name: 'ft_irc',
		description: [
			'ft_irc is a school project where we had to implement an IRC server.',
			'IRC is an old protocol, and the main difficulty was finding resources that were not obsolete.',
			'We tried to follow an optimal workflow, like peer reviewing our code with pull requests, and testing each part of the project.',
		],
		techs: [
			'c++',
		],
		github_repo: 'vfurmane/ft_irc',
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
									{project.live_url && <LiveUrl href={project.live_url}/>}
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
