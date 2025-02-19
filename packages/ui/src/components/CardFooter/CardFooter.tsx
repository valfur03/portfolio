import { default as React, ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 8px;
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 8px;


	@media screen and (min-width: 834px) {
		margin-top: 16px;

		gap: 12px;
	}

	@media screen and (min-width: 1440px) {
		margin-top: auto;

		flex-direction: row;
		justify-content: flex-end;
		gap: 16px;
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
