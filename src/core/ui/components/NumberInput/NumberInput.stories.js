import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NumberInput } from './NumberInput';

storiesOf('NumberInput', module)
    .add('with basic style', () => <NumberInput name="field" onChange={action('changed')} />)
    .add('with placeholder', () => (
        <NumberInput name="field" onChange={action('changed')} placeholder="Placeholder text" />
    ))
    .add('with value', () => <NumberInput name="field" onChange={action('changed')} value="Value text" />)
    .add('with label', () => <NumberInput name="field" onChange={action('changed')} label="Label text" />)
    .add('with error', () => (
        <NumberInput name="field" onChange={action('changed')} label="Label text" inputError="Error text" />
    ))
    .add('hiding Chrome/Safari/Firefox up and down arrows', () => (
        <NumberInput name="field" onChange={action('changed')} hideArrows />
    ));
