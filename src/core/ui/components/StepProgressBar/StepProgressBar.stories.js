import React from 'react';
import { storiesOf } from '@storybook/react';
import { StepProgressBar } from './StepProgressBar';

storiesOf('StepProgressBar', module)
    .add('with 2 steps, first one active', () => (
        <StepProgressBar steps={['this is the first step', 'this is the second and last step']} currentStepIndex={1} />
    ))
    .add('with 2 steps, second one active', () => (
        <StepProgressBar steps={['this is the first step', 'this is the second and last step']} currentStepIndex={2} />
    ))
    .add('with 3 steps, first one active', () => (
        <StepProgressBar
            steps={['this is the first step', 'this is the second step', 'this is the third and last step']}
            currentStepIndex={1}
        />
    ))
    .add('with 3 steps, second one active', () => (
        <StepProgressBar
            steps={['this is the first step', 'this is the second step', 'this is the third and last step']}
            currentStepIndex={2}
        />
    ))
    .add('with 3 steps, third one active', () => (
        <StepProgressBar
            steps={['this is the first step', 'this is the second step', 'this is the third and last step']}
            currentStepIndex={3}
        />
    ))
    .add('with 4 steps, first one active', () => (
        <StepProgressBar
            steps={[
                'this is the first step',
                'this is the second step',
                'this is the third step',
                'this is the fourth and last step',
            ]}
            currentStepIndex={1}
        />
    ))
    .add('with 4 steps, second one active', () => (
        <StepProgressBar
            steps={[
                'this is the first step',
                'this is the second step',
                'this is the third step',
                'this is the fourth and last step',
            ]}
            currentStepIndex={2}
        />
    ))
    .add('with 4 steps, third one active', () => (
        <StepProgressBar
            steps={[
                'this is the first step',
                'this is the second step',
                'this is the third step',
                'this is the fourth and last step',
            ]}
            currentStepIndex={3}
        />
    ))
    .add('with 4 steps, last one active', () => (
        <StepProgressBar
            steps={[
                'this is the first step',
                'this is the second step',
                'this is the third step',
                'this is the fourth and last step',
            ]}
            currentStepIndex={4}
        />
    ));
