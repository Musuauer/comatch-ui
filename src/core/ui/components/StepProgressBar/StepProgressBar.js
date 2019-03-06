import React from 'react';
import classNames from 'classnames';

import {
    StyledLineWrapper,
    StyledProgressWrapper,
    StyledStepCircleWrapper,
    StyledStepTextWrapper,
    StyledStepWrapper,
    StyledWrapper,
} from './StyledWrapper';

const propTypes = {
    steps(props, propName) {
        if (!Array.isArray(props[propName])) {
            return new Error('StepProgressBar requires an array as steps prop');
        }
        if (props[propName].length < 2 || props[propName].length > 4) {
            return new Error('StepProgressBar must take between 2 and 4 steps');
        }

        let typeError;
        props[propName].forEach((step) => {
            if (typeof step !== 'string' && typeof step !== 'object') {
                typeError = 'every step passed to StepProgressBar must be a string or a <Translate /> instance';
            }
        });
        if (typeError) {
            return new Error(typeError);
        }
        return false;
    },
    currentStepIndex(props, propName) {
        if (!Number.isInteger(props[propName])) {
            return new Error('StepProgressBar requires a number as currentStepIndex prop');
        }
        if (props[propName] < 1 || props[propName] > props.steps.length) {
            return new Error('StepProgressBar currentStepIndex out of bounds');
        }
        return false;
    },
};

function renderSteps(steps, currentStepIndex) {
    return steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = currentStepIndex > stepNumber || currentStepIndex === stepNumber;
        const classnames = classNames('StepProgressBar__step', `StepProgressBar__step${stepNumber}`, {
            active: stepNumber === currentStepIndex,
        });
        return (
            <StyledStepWrapper className={classnames} key={index}>
                <StyledStepCircleWrapper isActive={isActive} className="StepProgressBar__circle" />
                <StyledStepTextWrapper isActive={isActive} className="StepProgressBar__step-text">
                    {step}
                </StyledStepTextWrapper>
            </StyledStepWrapper>
        );
    });
}

export const StepProgressBar = ({ steps, currentStepIndex }) => {
    const classes = classNames(
        'StepProgressBar',
        `StepProgressBar__nb-steps-${steps.length}`,
        `StepProgressBar__step-active-${currentStepIndex}`,
    );

    return (
        <StyledWrapper numberOfSteps={steps.length} className={classes}>
            <StyledLineWrapper className="StepProgressBar__line">
                <StyledProgressWrapper
                    className="StepProgressBar__progress"
                    currentStepIndex={currentStepIndex}
                    numberOfSteps={steps.length}
                />
            </StyledLineWrapper>
            {renderSteps(steps, currentStepIndex)}
        </StyledWrapper>
    );
};

StepProgressBar.propTypes = propTypes;
