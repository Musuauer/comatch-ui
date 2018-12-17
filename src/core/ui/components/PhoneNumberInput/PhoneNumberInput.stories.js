import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PhoneNumberInput } from './PhoneNumberInput';

storiesOf('PhoneNumberInput', module)
    .add('with basic style', () => <PhoneNumberInput name="field" onChange={action('changed')} />)
    .add('with placeholder', () => (
        <PhoneNumberInput name="field" onChange={action('changed')} placeholder="Placeholder text" />
    ))
    .add('with value', () => <PhoneNumberInput name="field" onChange={action('changed')} value="Value text" />)
    .add('with label', () => <PhoneNumberInput name="field" onChange={action('changed')} label="Label text" />)
    .add('with error', () => (
        <PhoneNumberInput name="field" onChange={action('changed')} label="Label text" inputError="Error text" />
    ));
