import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { device } from '../../../styles/mixins';
import { palette } from '../../../styles/variables';

const ROOT = 'Flyout';
const MODAL = `${ROOT}__modal`;
const MODAL_FADE_IN = `${MODAL}--fade-in`;
const MODAL_FADE_OUT = `${MODAL}--fade-out`;

const StyledModalContent = styled.div`
    background: ${palette.white};
    border-radius: 3px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
    padding: 15px;

    @media ${device.desktop} {
        width: 400px;
    }
`;

const StyledModal = styled.div`
    background: rgba(62, 62, 62, 0.8);
    height: 100%;
    opacity: 0;
    padding: 5px;
    transition: opacity 500ms ease-in;

    &.${MODAL_FADE_IN} {
        opacity: 1;
    }

    &.${MODAL_FADE_OUT} {
        opacity: 0;
    }

    @media ${device.desktop} {
        background: none;
        padding: 0;
    }
`;

const StyledButtonWrapper = styled.div`
    margin: 50px 0 0 10px;
`;

const StyledWrapper = styled(forwardRef(({ open, ...rest }, ref) => <div {...rest} ref={ref} />))`
    display: flex;
    position: fixed;
    right: 0;
    top: 15%;
    z-index: 1;

    ${({ open }) => {
        if (!open) {
            return '';
        }

        return `
            flex-direction: column;
            height: 100%;
            justify-content: center;
            top: 0;
            width: 100%;

            ${StyledButtonWrapper} {
                display: none;
            }

            @media ${device.desktop} {
                height: auto;
                top: 15%;
                width: auto;
                flex-direction: row;
                background: none;
                padding: 0;

                ${StyledButtonWrapper} {
                    display: block;
                }
            }
        `;
    }}
`;

export { StyledButtonWrapper, StyledModal, StyledModalContent, StyledWrapper };
