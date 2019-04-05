/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

/**
 * Reasoning behind disabling these rules:
 * - No need for the displayName on the Styled Wrapper
 * - No need for props validation since, they are already being validated
 *   within the Autocomplete component.
 */

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { inputs, palette, typography } from '../../../styles/variables';

const generateDisplayStyling = ({ display }) => {
    switch (display) {
        case 'block':
            return 'display: block;';
        default:
            return 'display: inline-block;';
    }
};

const generateDisabledStyling = ({ disabled }) => {
    if (!disabled) {
        return '';
    }

    return `color: ${palette.gray}`;
};

const generateHasErrorStyling = ({ hasError }) => {
    if (!hasError) {
        return '';
    }

    return `
        .SelectInput__input {
            box-shadow: 0 0 4px 0 rgba(173, 25, 25, 1), inset 0 0 2px 0 rgba(193, 193, 193, 0.5);
        }
    `;
};

const StyledWrapper = styled(
    forwardRef(({ display, disabled, hasError, ...rest }, ref) => <div {...rest} ref={ref} />),
)`
    ${generateDisplayStyling}
    font-size: ${typography.fontSm};
    margin-bottom: ${inputs.inputsMarginBottom};

    .Autocomplete__input {
        background-color: ${palette.white};
        border: 1px solid ${palette.midGray};
        border-radius: 3px;
        box-shadow: 0 0 4px 0 rgba(1, 156, 185, 0), inset 0 0 2px 0 rgba(193, 193, 193, 0.5);
        min-height: 40px;
        outline: 0 !important;
        transform: translateZ(0);
        transition: box-shadow 250ms ease-out;
        width: 100%;
        will-change: box-shadow;
        z-index: 3;

        &:focus {
            box-shadow: 0 0 4px 0 rgba(1, 156, 185, 1), inset 0 0 2px 0 rgba(193, 193, 193, 0.5);
        }
    }

    ${generateDisabledStyling}
    ${generateHasErrorStyling}
`;

export { StyledWrapper };
