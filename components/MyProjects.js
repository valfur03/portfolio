import React from 'react';
import styles from './MyProjects.module.scss';
import ProjectCard from './ProjectCard';

export default function MyProjects({ projects }) {
	return (
		<div id='my-projects' className={styles.container}>
			<h3>My projects</h3>
			<div className={styles.projects}>
				{projects.map((project) => {
					return <ProjectCard key={project.title} project={project} />;
				})}
			</div>
		</div>
	);
}
