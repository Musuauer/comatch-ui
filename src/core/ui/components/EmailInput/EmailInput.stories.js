import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { EmailInput } from './EmailInput';

storiesOf('EmailInput', module)
    .add('with basic style', () => <EmailInput name="field" onChange={action('changed')} />)
    .add('with placeholder', () => (
        <EmailInput name="field" onChange={action('changed')} placeholder="Placeholder text" />
    ))
    .add('with value', () => <EmailInput name="field" onChange={action('changed')} value="Value text" />)
    .add('with label', () => <EmailInput name="field" onChange={action('changed')} label="Label text" />)
    .add('with error', () => (
        <EmailInput name="field" onChange={action('changed')} label="Label text" inputError="Error text" />
    ));
