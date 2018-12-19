import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { InputError } from './InputError';

storiesOf('InputError', module).add('with basic style', () => (
    <>
        <InputError text="Sample error" />
        <Highlight className="html">{'<InputError text="Sample error" />'}</Highlight>
    </>
));
