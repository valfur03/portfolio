import type { ReactElement } from 'react';
import styled from 'styled-components';

const FakeIcon = styled.div`
	min-width: 16px;
	min-height: 16px;
	width: 1em;
	height: 1em;

	background: linear-gradient(to right, ${props => props.theme.color.primary}, ${props => props.theme.color.secondary});
`;

export interface IconProps {
}

export default function Icon(props: IconProps): ReactElement {
	return <FakeIcon></FakeIcon>;
}
