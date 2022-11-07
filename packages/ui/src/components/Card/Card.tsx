import { default as React, ReactElement } from 'react';
import { defaultTheme } from '../../ThemeProvider';
import styled, { ThemeProvider } from 'styled-components';

const Container = styled.div`
	overflow: hidden;

	border-width: 1px;
	border-radius: 4px;
	box-sizing: border-box;
	width: ${props => props.theme.card.small.width};

	display: inline-flex;
	flex-direction: column;

	background-color: ${props => props.theme.color.surface};
	border-color: ${props => props.theme.color.backgroundSecondary};
	border-style: solid;

	@media screen and (min-width: 834px) {
		border-radius: 8px;
		width: ${props => props.theme.card.medium.width};
	}

	@media screen and (min-width: 1440px) {
		width: ${props => props.theme.card.large.width};

		flex-direction: row;
	}
`;

export interface CardProps {
	children: React.ReactNode,
	theme?: any,
	sx?: any,
}

export default function Card(props: CardProps): ReactElement {
	const theme = defaultTheme;
	if (props.sx?.width) theme.card.small.width = props.sx.width + 'px';
	return (
		<ThemeProvider theme={theme}>
			<Container>
				{ props.children }
			</Container>
		</ThemeProvider>
	);
}
