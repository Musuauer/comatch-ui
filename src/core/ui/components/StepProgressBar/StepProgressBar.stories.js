import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { StepProgressBar } from './StepProgressBar';

storiesOf('StepProgressBar', module)
    .add('with 2 steps, first one active', () => (
        <>
            <StepProgressBar
                steps={['this is the first step', 'this is the second and last step']}
                currentStepIndex={1}
            />
            <Highlight className="html">
                {'<StepProgressBar' +
                    `\n\tsteps={['this is the first step', 'this is the second and last step']}` +
                    '\n\tcurrentStepIndex={1}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('with 2 steps, second one active', () => (
        <>
            <StepProgressBar
                steps={['this is the first step', 'this is the second and last step']}
                currentStepIndex={2}
            />
            <Highlight className="html">
                {'<StepProgressBar' +
                    `\n\tsteps={['this is the first step', 'this is the second and last step']}` +
                    '\n\tcurrentStepIndex={2}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('with 3 steps, first one active', () => (
        <>
            <StepProgressBar
                steps={['this is the first step', 'this is the second step', 'this is the third and last step']}
                currentStepIndex={1}
            />
            <Highlight className="html">
                {'<StepProgressBar' +
                    `\n\tsteps={['this is the first step', 'this is the second step',` +
                    ` 'this is the third and last step']}` +
                    '\n\tcurrentStepIndex={1}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('with 3 steps, second one active', () => (
        <>
            <StepProgressBar
                steps={['this is the first step', 'this is the second step', 'this is the third and last step']}
                currentStepIndex={2}
            />
            <Highlight className="html">
                {'<StepProgressBar' +
                    `\n\tsteps={['this is the first step', 'this is the second step',` +
                    ` 'this is the third and last step']}` +
                    '\n\tcurrentStepIndex={2}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('with 3 steps, third one active', () => (
        <>
            <StepProgressBar
                steps={['this is the first step', 'this is the second step', 'this is the third and last step']}
                currentStepIndex={3}
            />
            <Highlight className="html">
                {'<StepProgressBar' +
                    `\n\tsteps={['this is the first step', 'this is the second step',` +
                    ` 'this is the third and last step']}` +
                    '\n\tcurrentStepIndex={3}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('with 4 steps, first one active', () => (
        <>
            <StepProgressBar
                steps={[
                    'this is the first step',
                    'this is the second step',
                    'this is the third step',
                    'this is the fourth and last step',
                ]}
                currentStepIndex={1}
            />
            <Highlight className="html">
                {'<StepProgressBar' +
                    '\n\tsteps={[' +
                    `\n\t\t'this is the first step',` +
                    `\n\t\t'this is the second step',` +
                    `\n\t\t'this is the third step',` +
                    `\n\t\t'this is the fourth and last step',` +
                    '\n\t]}' +
                    '\n\tcurrentStepIndex={1}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('with 4 steps, second one active', () => (
        <>
            <StepProgressBar
                steps={[
                    'this is the first step',
                    'this is the second step',
                    'this is the third step',
                    'this is the fourth and last step',
                ]}
                currentStepIndex={2}
            />
            <Highlight className="html">
                {'<StepProgressBar' +
                    '\n\tsteps={[' +
                    `\n\t\t'this is the first step',` +
                    `\n\t\t'this is the second step',` +
                    `\n\t\t'this is the third step',` +
                    `\n\t\t'this is the fourth and last step',` +
                    '\n\t]}' +
                    '\n\tcurrentStepIndex={2}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('with 4 steps, third one active', () => (
        <>
            <StepProgressBar
                steps={[
                    'this is the first step',
                    'this is the second step',
                    'this is the third step',
                    'this is the fourth and last step',
                ]}
                currentStepIndex={3}
            />
            <Highlight className="html">
                {'<StepProgressBar' +
                    '\n\tsteps={[' +
                    `\n\t\t'this is the first step',` +
                    `\n\t\t'this is the second step',` +
                    `\n\t\t'this is the third step',` +
                    `\n\t\t'this is the fourth and last step',` +
                    '\n\t]}' +
                    '\n\tcurrentStepIndex={3}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('with 4 steps, last one active', () => (
        <>
            <StepProgressBar
                steps={[
                    'this is the first step',
                    'this is the second step',
                    'this is the third step',
                    'this is the fourth and last step',
                ]}
                currentStepIndex={4}
            />
            <Highlight className="html">
                {'<StepProgressBar' +
                    '\n\tsteps={[' +
                    `\n\t\t'this is the first step',` +
                    `\n\t\t'this is the second step',` +
                    `\n\t\t'this is the third step',` +
                    `\n\t\t'this is the fourth and last step',` +
                    '\n\t]}' +
                    '\n\tcurrentStepIndex={4}' +
                    '\n/>'}
            </Highlight>
        </>
    ));
