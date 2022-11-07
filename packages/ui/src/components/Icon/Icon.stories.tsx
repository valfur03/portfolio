import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from './Icon';

export default {
	title: 'Icon',
	component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args}></Icon>;

export const Simple = Template.bind({});

Simple.args = {
};
