import styled from 'styled-components';
import { palette, typography } from '../../../styles/variables';

export const generatePopupPositionBasedStyling = ({ popupMenuPosition }) => {
    switch (popupMenuPosition) {
        case 'bottom':
            return `
                left: 0;
                width: 100%;
                top: 42px;
            `;

        case 'top':
            return `
                left: 0;
                width: 100%;
                bottom: 42px;
            `;

        case 'left':
            return `
                top: -1px;
                right: 100%;
                margin-right: 5px;
            `;

        case 'right':
            return `
                top: -1px;
                left: 100%;
                margin-left: 5px;
            `;

        default:
            return '';
    }
};

export const PopupMenuStyledWrapper = styled.div`
    position: absolute;
    cursor: default;
`;

export const StyledWrapper = styled.button`
    position: relative;
    border: 1px solid;
    border-radius: 3px;
    display: inline-block;
    outline: 0 !important;
    font-size: ${typography.fontSm};
    touch-action: manipulation;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 8px 15px; // makes the height 40px
    transition: background-color 250ms ease-out, border-color 250ms ease-out, color 250ms ease-out;

    ${({ iconAfterText }) => iconAfterText ? 'white-space: initial;' : ''}

    // PopupMenu styling:
    ${PopupMenuStyledWrapper} {
        background: green;
        ${generatePopupPositionBasedStyling}
    }

    // SVG styling:
    ${({ onlyIcon, iconAfterText }) => `
        // Some .Button adjustments
        ${onlyIcon ? 'padding: 8px 12px;' : ''}

        svg {
            ${onlyIcon ? 'margin: 0;' : 'margin-right: 5px'}

            ${iconAfterText ? `
                float: right;
                position: relative;
                top: 2px;
                margin-left: 5px;
                margin-right: 0;
            ` : ''}
        }
    `}

    // If buttons follow each other in a row
    // set a standardized whitespace between them
    & ~ & {
        margin-left: 9px;
    }

    ${({ full, disabled }) => full ? `
        background-color: ${disabled ? `${palette.lightGray} !important` : palette.primary};
        border-color: ${disabled ? `${palette.midGray} !important` : palette.primary};
        color: ${palette.white};

        &:hover {
            background-color: ${palette.secondary};
            border-color: ${palette.secondary};
        }
    ` : ''}

    ${({ ghost, disabled }) => ghost ? `
        background-color: ${disabled ? `${palette.white} !important` : palette.white};
        border-color: ${palette.primary};
        color: ${palette.primary};

        &:hover {
            background-color: ${palette.secondary};
            border-color: ${palette.secondary};
            color: ${palette.white};
        }
    ` : ''}

    ${({ disabled }) => disabled ? `
        border-color: ${palette.midGray} !important;
        cursor: not-allowed;
        pointer-events: none;

        &,
        span {
            color: ${palette.midGray} !important;
        }
    ` : ''}
`;
