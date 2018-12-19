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
    .add('50% progress', () => (
        <>
            <ProgressBar progress={50} />
            <Highlight className="html">{`<ProgressBar progress={50} />`}</Highlight>
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
