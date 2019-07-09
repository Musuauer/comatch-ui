/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { background, fontColor } from './helpers';

function wrapValue({ wrap }) {
    return wrap ? 'wrap' : 'nowrap';
}

const StyledHeaderControls = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Node = forwardRef(({ backgroundColor, wrap, ...rest }, ref) => <div {...rest} ref={ref} />);
const StyledHeader = styled(Node)`
    background-color: ${background};
    color: ${fontColor};
    display: flex;
    flex-flow: row ${wrapValue};
    justify-content: space-between;
    overflow: hidden;
    padding: 15px 20px;

    .Splash {
        align-items: flex-start;
        color: inherit;

        .Title,
        .Subtitle {
            color: inherit;
        }
    }
`;

export { StyledHeader, StyledHeaderControls };
