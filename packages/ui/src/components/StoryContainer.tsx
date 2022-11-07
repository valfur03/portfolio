import styled from 'styled-components';

export default styled.div`
	border-width: 2px;
	border-style: dashed;
	border-radius: 4px;

	border-color: ${props => props.theme.color.midgrey}
`;
