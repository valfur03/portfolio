import { default as React, ReactElement } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import IconButton from '../IconButton';
import { OpenIn } from 'icons';

dayjs.extend(relativeTime);

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;

	@media screen and (min-width: 834px) {
		gap: 12px;
	}
`;

export interface LiveUrlProps {
	href: string
}

export default function LiveUrl(props: LiveUrlProps): ReactElement {
	return (
		<Container>
			<IconButton href={props.href} target='_blank' size='small'>
				<OpenIn/>
			</IconButton>
		</Container>
	);
}
