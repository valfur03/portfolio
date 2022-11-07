import { default as React, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	overflow: hidden;
	position: relative;

	border-radius: 2px;
	width: 72px;
	height: 16px;

	background-color: ${props => props.theme.color.backgroundSecondary};

	@media screen and (min-width: 834px) {
		border-radius: 4px;
		width: 128px;
		height: 24px;
	}

	@keyframes shimmer {
		100% {
			transform: translateX(100%);
		}
	}

	&::after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transform: translateX(-100%);
		background-image: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0,
			rgba(255, 255, 255, 0.1) 20%,
			rgba(255, 255, 255, 0.2) 60%,
			rgba(255, 255, 255, 0)
		);
		animation: shimmer 1.3s infinite;
		content: '';
	}
`;

export interface SkeletonParagraphProps {
	data: Promise<string>,
}

export default function SkeletonParagraph(props: SkeletonParagraphProps): ReactElement {
	const [component, setComponent] = useState(null);
	useEffect(() => {
		setComponent(<Container></Container>);
		if (props.data) props.data.then((elm) => { setComponent(<p>{ elm }</p>); });
	}, [props.data]);
	return component;
}
