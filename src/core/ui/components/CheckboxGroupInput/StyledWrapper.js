import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { inputs, palette } from '../../../styles/variables';

export const generateDisplayStyling = ({ display }) => display === 'inline' ? 'display: inline-block;' : '';

export const generateWithErrorStyling = ({ hasError }) => {
    if (!hasError) {
        return '';
    }

    return `
        .CheckboxInput__label,
        &.has-error .CheckboxInput__label {
            color: ${palette.black};
        }

        .InputError {
            // precaution to push error to next line even if per-row is specified
            width: 100%;
        }
    `;
};

export const generatePerRowStyling = ({ checkboxesPerRow }) => {
    if (checkboxesPerRow < 2 || checkboxesPerRow > 5) {
        return '';
    }

    return `
        display: flex;
        flex-flow: row wrap;

        .SectionHeader {
            width: 100%;

            &:not(:first-child) {
                margin-top: 20px;
            }
        }

        .CheckboxInput {
            display: inline-block;
            flex-basis: ${Math.round((1 / checkboxesPerRow) * 100)}%;
        }
    `;
};

export const StyledWrapper = styled(forwardRef(({ checkboxesPerRow, display, hasError, ...rest }, ref) => (
    <div ref={ref} {...rest} />
)))`
    ${generateDisplayStyling}
    margin-bottom: ${inputs.inputsMarginBottom};

    ${generatePerRowStyling}
    ${generateWithErrorStyling}

    > .SectionHeader.size-xs {
        margin-bottom: 10px;
    }

    > .InputLabel {
        width: 100%;
        margin-bottom: -5px;
    }

    .CheckboxInput {
        margin: 10px 0 0;
    }
`;
