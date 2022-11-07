import { default as React, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import SkeletonParagraph from '../SkeletonParagraph';
import IconButton from '../IconButton';
import { Github } from 'icons';

dayjs.extend(relativeTime);

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;

	@media screen and (min-width: 834px) {
		gap: 12px;
	}
`;

export interface GithubRepoProps {
	slug: string,
	showLastCommit?: boolean,
}

async function fetchLatestCommitDateFromNow(slug: string): Promise<string> {
	return fetch(`https://api.github.com/repos/${slug}/commits`)
		.then((response) => {
			if (!response.ok) throw new Error('Network response was not OK');
			return response.json();
		})
		.then((json) => {
			if (json.length == 0) return null;
			return json[0].commit.author.date;
		})
		.catch((error) => {
			console.error(error);
			return null;
		});
}

export default function GithubRepo(props: GithubRepoProps): ReactElement {
	const [latest_commit, setLatestCommit] = useState(Promise.resolve(null));
	let latestCommitComponent = null;
	if (props.showLastCommit) {
		latestCommitComponent = <SkeletonParagraph data={latest_commit}></SkeletonParagraph>;
	}
	useEffect(() => {
		if (!props.showLastCommit) return;
		setLatestCommit(fetchLatestCommitDateFromNow(props.slug)
			.then((response) => {
				if (response === null) return null;
				return dayjs(response).fromNow();
			}));
	}, [props.slug, props.showLastCommit]);
	return (
		<Container>
			<IconButton href={`https://github.com/${props.slug}`} size='small'>
				<Github />
			</IconButton>
			{ latestCommitComponent }
		</Container>
	);
}
