import { ComponentMeta, ComponentStory } from '@storybook/react';

import LiveUrl from './LiveUrl';

export default {
	title: 'LiveUrl',
	component: LiveUrl,
} as ComponentMeta<typeof LiveUrl>;

const Template: ComponentStory<typeof LiveUrl> = args => <LiveUrl {...args}></LiveUrl>;

export const LiveUrlComponent = Template.bind({});
