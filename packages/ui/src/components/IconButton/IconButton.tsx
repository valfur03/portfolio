import { default as React, HTMLProps, ReactElement } from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../'; // TODO

interface BaseButtonProps {
	size: string,
}

const BaseButton = styled.button<BaseButtonProps>`
	border: none;
	outline: none;
	height: 1em;

	display: block;

	background: none;
	font-size: ${props => props.size};

	&:hover {
		cursor: pointer;
	}
`;

export interface IconButtonProps {
	children: React.ReactNode,
	href?: string,
	target?: HTMLProps<HTMLAnchorElement>['target'],
	size?: 'small' | 'medium' | 'large',
	theme?: 'None' | 'primary' | 'secondary' | 'ternary',
}

export default function IconButton(props: IconButtonProps): ReactElement {
	if (props.size === undefined) props.size = 'small';
	return <BaseButton as={props.href === undefined ? 'button' : 'a' } {...{ href: props.href, target: props.target }} size={defaultTheme.icon.size[props.size]}>{ props.children }</BaseButton>;
}
