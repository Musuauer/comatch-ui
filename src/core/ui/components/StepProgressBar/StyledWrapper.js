import React from 'react';
import styled from 'styled-components';
import { device } from '../../../styles/mixins';
import { palette } from '../../../styles/variables';

const BASE_LINE_COLOR = palette.midGray;
const PROGRESS_COLOR = palette.primary;

const STEP_WIDTH_RATIO = 1 / 4;
const STEP_HALF_WIDTH_RATIO = STEP_WIDTH_RATIO / 2;

const STEP_WIDTH = `calc(100% * ${STEP_WIDTH_RATIO})`;
const STEP_HALF_WIDTH = `100% * ${STEP_HALF_WIDTH_RATIO}`;

const calculateProgressLineScale = ({ currentStepIndex, numberOfSteps }) => {
    if (!numberOfSteps || numberOfSteps === 1 || !currentStepIndex) {
        return '';
    }

    if (numberOfSteps === 2) {
        return currentStepIndex === 1 ? 'transform: scaleX(0);' : '';
    }

    if (numberOfSteps === 3) {
        switch (currentStepIndex) {
            case 1:
                return 'transform: scaleX(0);';

            case 2:
                return 'transform: scaleX(0.5);';

            default:
                return '';
        }
    } else if (numberOfSteps === 4) {
        switch (currentStepIndex) {
            case 1:
                return 'transform: scaleX(0);';

            case 2:
                return 'transform: scaleX(0.333);';

            case 3:
                return 'transform: scaleX(0.666);';

            default:
                return '';
        }
    } else {
        return '';
    }
};

const generateNumberOfStepsStyling = ({ numberOfSteps }) => {
    switch (numberOfSteps) {
        case 2:
            return `
                .StepProgressBar__step1 {
                    left: 0;
                }

                .StepProgressBar__step2 {
                    left: calc(100% - ${STEP_WIDTH});
                }
            `;

        case 3:
            return `
                .StepProgressBar__step1 {
                    left: 0;
                }

                .StepProgressBar__step2 {
                    left: calc(50% - calc(${STEP_HALF_WIDTH}));
                }

                .StepProgressBar__step3 {
                    left: calc(100% - ${STEP_WIDTH});
                }
            `;

        case 4:
            return `
                .StepProgressBar__step1 {
                    left: 0;
                }

                .StepProgressBar__step2 {
                    left: calc((100% - ${STEP_WIDTH}) / 3);
                }

                .StepProgressBar__step3 {
                    left: calc((100% - ${STEP_WIDTH}) / 3 * 2);
                }

                .StepProgressBar__step4 {
                    left: calc(100% - ${STEP_WIDTH});
                }

                .StepProgressBar__step-text {
                    padding-left: 4%;
                    padding-right: 4%;
                }
            `;

        default:
            return '';
    }
};

const generateStepCircleActiveStyling = ({ isActive }) => (!isActive ? '' : `background-color: ${PROGRESS_COLOR};`);

const generateStepTextActiveStyling = ({ isActive }) => (!isActive ? '' : 'font-weight: bold;');

export const StyledStepCircleWrapper = styled(
    React.forwardRef(({ isActive, ...rest }, ref) => <div {...rest} ref={ref} />),
)`
    width: 10px;
    height: 10px;
    position: absolute;
    background: ${BASE_LINE_COLOR};
    left: calc(50% - 5px);
    border-radius: 100%;
    top: -3px;

    ${generateStepCircleActiveStyling}
`;

export const StyledStepTextWrapper = styled(
    React.forwardRef(({ isActive, ...rest }, ref) => <div {...rest} ref={ref} />),
)`
    text-align: center;
    padding-top: 15px;

    ${generateStepTextActiveStyling}
`;

export const StyledStepWrapper = styled.div`
    width: ${STEP_WIDTH};
    position: absolute;
    top: 10px;

    &.active ~ .StepProgressBar__step {
        color: ${BASE_LINE_COLOR};
        font-weight: bold;
    }
`;

export const StyledProgressWrapper = styled(
    React.forwardRef(({ currentStepIndex, numberOfSteps, ...rest }, ref) => <div {...rest} ref={ref} />),
)`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: ${PROGRESS_COLOR};
    transition: transform 0.5s ease-out;
    transform-origin: left;

    ${calculateProgressLineScale}
`;

export const StyledLineWrapper = styled.div`
    width: 100%;
    height: 3px;
    background-color: ${BASE_LINE_COLOR};
    position: absolute;
    top: 10px;

    width: 75%;
    transform: translateX(17%);
`;

export const StyledWrapper = styled(React.forwardRef(({ numberOfSteps, ...rest }, ref) => <div {...rest} ref={ref} />))`
    height: 95px;
    position: relative;

    @media ${device.desktop} {
        height: 80px;
    }

    ${generateNumberOfStepsStyling}
`;
