import { ComponentMeta, ComponentStory } from '@storybook/react';

import CardContent from './CardContent';

export default {
	title: 'CardContent',
	component: CardContent,
} as ComponentMeta<typeof CardContent>;

const Template: ComponentStory<typeof CardContent> = args => <CardContent {...args}></CardContent>;

export const Small = Template.bind({});

Small.args = {
	label: 'Hello, World!',
	children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat tellus ac volutpat fringilla. Sed elementum, ligula id semper egestas, sem elit tempus felis, sit amet convallis justo lorem ut mauris. Etiam maximus ante elit, ac euismod sapien pretium in.</p>
};
