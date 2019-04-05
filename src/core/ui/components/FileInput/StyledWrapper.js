import React, { forwardRef } from 'react';
import styled from 'styled-components';

export const StyledWrapper = styled(forwardRef((rest, ref) => <div {...rest} ref={ref} />))`
    display: inline-block;

    input[type='file'] {
        display: none;
    }
`;
