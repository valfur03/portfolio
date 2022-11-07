import { default as React, ReactElement } from 'react';
import styled from 'styled-components';

const Image = styled.img`
	width: 100%;
	max-height: 192px;

	display: inline-block;
	object-fit: cover;

	@media screen and (min-width: 1440px) {
		width: 352px;
		height: 352px;
		max-height: initial;
	}
`;

export interface CardProps {
	image: string,
}

export default function Card(props: CardProps): ReactElement {
	return <Image src={props.image} />;
}
