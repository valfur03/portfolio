import { ComponentMeta, ComponentStory } from '@storybook/react';

import IconButton from './IconButton';
import Icon from '../Icon';

export default {
	title: 'IconButton',
	component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => <IconButton {...args}></IconButton>;

export const Simple = Template.bind({});

Simple.args = {
	children: <Icon />,
	size: 'small',
	theme: 'None',
};

export const Link = Template.bind({});

Link.args = {
	children: <Icon />,
	href: 'https://example.org',
	size: 'small',
	theme: 'None',
};
