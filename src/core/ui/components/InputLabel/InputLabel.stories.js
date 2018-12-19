import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputLabel } from './InputLabel';

storiesOf('InputLabel', module).add('with basic style', () => (
    <>
        <InputLabel text="Sample label" />
        <code>{'<InputLabel text="Sample label" />'}</code>
    </>
));
