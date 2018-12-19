import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputError } from './InputError';

storiesOf('InputError', module).add('with basic style', () => (
    <>
        <InputError text="Sample error" />
        <code>{'<InputError text="Sample error" />'}</code>
    </>
));
