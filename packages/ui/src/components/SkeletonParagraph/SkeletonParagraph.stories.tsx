import { ComponentMeta, ComponentStory } from '@storybook/react';

import SkeletonParagraph from './SkeletonParagraph';

export default {
	title: 'SkeletonParagraph',
	component: SkeletonParagraph,
} as ComponentMeta<typeof SkeletonParagraph>;

const Template: ComponentStory<typeof SkeletonParagraph> = args => <SkeletonParagraph {...args}></SkeletonParagraph>;

export const Loading = Template.bind({});

Loading.args = {
};

export const Fullfilled = Template.bind({});

Fullfilled.args = {
	data: new Promise((resolve) => {
		resolve('Hello, World!');
	}),
};
