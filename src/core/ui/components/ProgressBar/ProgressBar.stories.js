import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

storiesOf('ProgressBar', module)
    .add('10% progress', () => (
        <ProgressBar progress={10} />
    ))
    .add('50% progress', () => (
        <ProgressBar progress={50} />
    ))
    .add('80% progress', () => (
        <ProgressBar progress={80} />
    ))
    .add('100% progress', () => (
        <ProgressBar progress={100} />
    ));
