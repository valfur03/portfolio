import { default as React, ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 8px;
	width: 100%;

	display: flex;
	flex-direction: column;

	@media screen and (min-width: 834px) {
		margin-top: 16px;
	}

	@media screen and (min-width: 1440px) {
		margin-top: auto;

		flex-direction: row;
		justify-content: space-between;
	}
`;

export interface CardFooterProps {
	children: React.ReactNode,
}

export default function CardFooter(props: CardFooterProps): ReactElement {
	return (
		<Container>
			{ props.children }
		</Container>
	);
}
