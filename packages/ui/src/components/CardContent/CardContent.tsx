import { default as React, ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	overflow-x: hidden;
	overflow-y: auto;

	padding: 16px;
	box-sizing: border-box;
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	@media screen and (min-width: 834px) {
		padding: 24px;
	}

	@media screen and (min-width: 1440px) {
		height: 352px;
	}
`;

const Content = styled.div`
	padding: 0 12px;
	box-sizing: border-box;
	width: 100%;
	
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (min-width: 834px) {
		padding: 0 24px;
	}
`;

export interface CardContentProps {
	children: React.ReactNode,
	label: string,
}

export default function CardContent(props: CardContentProps): ReactElement {
	let title = null;
	if (props.label) title = <h4>{ props.label }</h4>;

	return (
		<Container>
			{ title }
			<Content>
				{ props.children }
			</Content>
		</Container>
	);
}
