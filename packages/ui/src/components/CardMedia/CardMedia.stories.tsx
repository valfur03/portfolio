import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardMedia from './CardMedia';

export default {
	title: 'CardMedia',
	component: CardMedia,
} as ComponentMeta<typeof CardMedia>;

const Template: ComponentStory<typeof CardMedia> = args => <CardMedia {...args}></CardMedia>;

export const Small = Template.bind({});

Small.args = {
	image: '/nones_riding_horses.jpg',
};
