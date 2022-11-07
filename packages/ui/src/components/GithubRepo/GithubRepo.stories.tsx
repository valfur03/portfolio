import { ComponentMeta, ComponentStory } from '@storybook/react';

import GithubRepo from './GithubRepo';

export default {
	title: 'GithubRepo',
	component: GithubRepo,
} as ComponentMeta<typeof GithubRepo>;

const Template: ComponentStory<typeof GithubRepo> = args => <GithubRepo {...args}></GithubRepo>;

export const LogoOnly = Template.bind({});

LogoOnly.args = {
	slug: 'valfur03/portfolio',
};

export const LogoAndTime = Template.bind({});

LogoAndTime.args = {
	slug: 'valfur03/portfolio',
	showLastCommit: true,
};
