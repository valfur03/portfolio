import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from "styled-components";

import CardFooter from './CardFooter';

const Image = styled.img`
	width: 14px;

	@media screen and (min-width: 834px) {
		width: 24px;
	}
`;

export default {
	title: 'CardFooter',
	component: CardFooter,
} as ComponentMeta<typeof CardFooter>;

const Template: ComponentStory<typeof CardFooter> = args => <CardFooter {...args}></CardFooter>;

export const Text = Template.bind({});

Text.args = {
	children: (
		<>
			<p>Hell world</p>
		</>
	),
};

export const Small = Template.bind({});

Small.args = {
	children: (
		<>
			<Image src='/logo.jpg' />
		</>
	),
};
