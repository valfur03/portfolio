import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import Card from './Card';
import CardContent from '../CardContent/CardContent';
import CardMedia from '../CardMedia';
import CardFooter from '../CardFooter/CardFooter';
import GithubRepo from '../GithubRepo/GithubRepo';

const Image = styled.img`
	width: 14px;

	@media screen and (min-width: 834px) {
		width: 24px;
	}
`;

export default {
	title: 'Card',
	component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args}></Card>;

export const Simple = Template.bind({});

Simple.args = {
	children: (
		<>
			<CardContent label='Hello, World!'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat tellus ac volutpat fringilla. Sed elementum, ligula id semper egestas, sem elit tempus felis, sit amet convallis justo lorem ut mauris. Etiam maximus ante elit, ac euismod sapien pretium in.</p>
			</CardContent>
		</>
	),
};

export const WithImage = Template.bind({});

WithImage.args = {
	children: (
		<>
			<CardMedia image='/nones_riding_horses.jpg' />
			<CardContent label='Hello, World!'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat tellus ac volutpat fringilla. Sed elementum, ligula id semper egestas, sem elit tempus felis, sit amet convallis justo lorem ut mauris. Etiam maximus ante elit, ac euismod sapien pretium in.</p>
			</CardContent>
		</>
	),
};

export const WithImageAndLongText = Template.bind({});

WithImageAndLongText.args = {
	children: (
		<>
			<CardMedia image='/nones_riding_horses.jpg' />
			<CardContent label='Hello, World!'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at lacus nec purus varius porttitor. In in eros orci. Nunc semper pellentesque convallis. Integer ex leo, facilisis vitae nunc ut, sagittis luctus libero. Vivamus nec condimentum massa, sit amet vestibulum lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut viverra laoreet libero. Mauris magna turpis, fringilla sed nunc euismod, egestas cursus dui. Aliquam vitae gravida velit. Integer egestas ultrices urna, vitae ullamcorper nunc consectetur eget. Pellentesque ipsum arcu, cursus eu urna non, ultricies congue purus. Nam vel est dui. Nulla facilisi. Nam nec ex vestibulum, facilisis orci et, semper eros. Nulla augue quam, maximus ut imperdiet sed, auctor in tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
			</CardContent>
		</>
	),
};

export const WithImageAndFooter = Template.bind({});

WithImageAndFooter.args = {
	children: (
		<>
			<CardContent label='Hello, World!'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat tellus ac volutpat fringilla. Sed elementum, ligula id semper egestas, sem elit tempus felis, sit amet convallis justo lorem ut mauris. Etiam maximus ante elit, ac euismod sapien pretium in.</p>
				<CardFooter>
					<div></div>
					<GithubRepo slug='valfur03/portfolio' showLastCommit={true} />
				</CardFooter>
			</CardContent>
		</>
	),
};
