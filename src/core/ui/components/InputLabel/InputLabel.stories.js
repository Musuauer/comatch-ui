import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { InputLabel } from './InputLabel';

storiesOf('InputLabel', module).add('with basic style', () => (
    <>
        <InputLabel text="Sample label" />
        <Highlight className="html">{'<InputLabel text="Sample label" />'}</Highlight>
    </>
));
