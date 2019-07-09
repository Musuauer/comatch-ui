/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { background, fontColor } from './helpers';

function wrapValue({ wrap }) {
    return wrap ? 'wrap' : 'nowrap';
}

const Node = forwardRef(({ backgroundColor, wrap, ...rest }, ref) => <div {...rest} ref={ref} />);
const StyledHeader = styled(Node)`
    background-color: ${background};
    color: ${fontColor};
    display: flex;
    flex-flow: row ${wrapValue};
    overflow: hidden;
    padding: 15px 20px;
`;

export { StyledHeader };
