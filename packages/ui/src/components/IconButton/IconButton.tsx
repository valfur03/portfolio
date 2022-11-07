import { default as React, ReactElement } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	border: none;
	outline: none;

	background: none;
	font-size: 1em;

	&:hover {
		cursor: pointer;
	}
`;

const Anchor = styled.a`
	font-size: 1em;
`;

export interface IconButtonProps {
	children: React.ReactNode,
	href?: string,
	size?: 'small',
	theme?: 'None' | 'primary' | 'secondary' | 'ternary',
}

export default function IconButton(props: IconButtonProps): ReactElement {
	let BaseButton = null;
	if (props.size === undefined) props.size = 'small';
	if (props.href === undefined) BaseButton = styled(Button);
	else BaseButton = styled(Anchor);
	BaseButton = BaseButton`
		font-size: ${_props => _props.theme.icon.size[props.size]};
	`;
	return <BaseButton {...{ href: props.href }}>{ props.children }</BaseButton>;
}
