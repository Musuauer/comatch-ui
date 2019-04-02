import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

storiesOf('ProgressBar', module)
    .add('10% progress', () => (
        <>
            <ProgressBar progress={10} />
            <Highlight className="html">{`<ProgressBar progress={10} />`}</Highlight>
        </>
    ))
    .add('10% progress with label', () => (
        <>
            <ProgressBar progress={10} label="A label" />
            <Highlight className="html">{`<ProgressBar progress={10} label="A label" />`}</Highlight>
        </>
    ))
    .add('10% progress with label on the left', () => (
        <>
            <ProgressBar progress={10} label="A label" labelPosition="left" />
            <Highlight className="html">
                {`<ProgressBar progress={10} label="A label" labelPosition="left" />`}
            </Highlight>
        </>
    ))
    .add('10% progress and squareEnds', () => (
        <>
            <ProgressBar progress={10} label="A label" squareEnds />
            <Highlight className="html">{`<ProgressBar progress={10} label="A label" squareEnds />`}</Highlight>
        </>
    ))
    .add('10% progress reverse', () => (
        <>
            <ProgressBar progress={10} reverse />
            <Highlight className="html">{`<ProgressBar progress={10} reverse />`}</Highlight>
        </>
    ))
    .add('10% progress reverse and squareEnds', () => (
        <>
            <ProgressBar progress={10} reverse squareEnds />
            <Highlight className="html">{`<ProgressBar progress={10} reverse squareEnds />`}</Highlight>
        </>
    ))
    .add('10% progress secondary variant', () => (
        <>
            <ProgressBar progress={10} variant="secondary" />
            <Highlight className="html">{`<ProgressBar progress={10} variant='secondary' />`}</Highlight>
        </>
    ))
    .add('10% progress with label, secondary variant', () => (
        <>
            <ProgressBar progress={10} label="A label" variant="secondary" />
            <Highlight className="html">
                {`<ProgressBar progress={10} label="A label" variant="secondary" />`}
            </Highlight>
        </>
    ))
    .add('10% progress with label, secondary variant and reverse', () => (
        <>
            <ProgressBar progress={10} label="A label" variant="secondary" reverse />
            <Highlight className="html">
                {`<ProgressBar progress={10} abel="A label" variant="secondary" reverse />`}
            </Highlight>
        </>
    ))
    .add('10% progress with label, secondary variant and reverse, label on left', () => (
        <>
            <ProgressBar progress={10} label="A label" variant="secondary" reverse labelPosition="left" />
            <Highlight className="html">
                {`<ProgressBar progress={10} label="A label" variant="secondary" reverse labelPosition="left" />`}
            </Highlight>
        </>
    ))
    .add('50% progress', () => (
        <>
            <ProgressBar progress={50} />
            <Highlight className="html">{`<ProgressBar progress={50} />`}</Highlight>
        </>
    ))
    .add('50% progress squareEnds', () => (
        <>
            <ProgressBar progress={50} squareEnds />
            <Highlight className="html">{`<ProgressBar progress={50} squareEnds />`}</Highlight>
        </>
    ))
    .add('50% progress with label', () => (
        <>
            <ProgressBar progress={50} label="A label" />
            <Highlight className="html">{`<ProgressBar progress={50} label="A label" />`}</Highlight>
        </>
    ))
    .add('50% progress reverse', () => (
        <>
            <ProgressBar progress={50} reverse />
            <Highlight className="html">{`<ProgressBar progress={50} reverse />`}</Highlight>
        </>
    ))
    .add('50% progress reverse and squareEnds', () => (
        <>
            <ProgressBar progress={50} reverse squareEnds />
            <Highlight className="html">{`<ProgressBar progress={50} reverse squareEnds />`}</Highlight>
        </>
    ))
    .add('50% progress reverse, secondary variant', () => (
        <>
            <ProgressBar progress={50} reverse variant="secondary" />
            <Highlight className="html">{`<ProgressBar progress={50} reverse variant="secondary" />`}</Highlight>
        </>
    ))
    .add('50% progress reverse, secondary variant with label', () => (
        <>
            <ProgressBar progress={50} reverse variant="secondary" label="A label" />
            <Highlight className="html">
                {`<ProgressBar progress={50} reverse variant="secondary" label="A label" />`}
            </Highlight>
        </>
    ))
    .add('80% progress', () => (
        <>
            <ProgressBar progress={80} />
            <Highlight className="html">{`<ProgressBar progress={80} />`}</Highlight>
        </>
    ))
    .add('100% progress', () => (
        <>
            <ProgressBar progress={100} />
            <Highlight className="html">{`<ProgressBar progress={100} />`}</Highlight>
        </>
    ));
