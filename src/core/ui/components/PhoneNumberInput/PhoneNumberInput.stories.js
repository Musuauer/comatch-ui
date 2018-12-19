/* eslint-disable max-len */
import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PhoneNumberInput } from './PhoneNumberInput';

storiesOf('PhoneNumberInput', module)
    .add('with basic style', () => (
        <>
            <PhoneNumberInput name="field" onChange={action('changed')} />
            <Highlight className="html">{`<PhoneNumberInput name="field" onChange={action('changed')} />`}</Highlight>
        </>
    ))
    .add('with placeholder', () => (
        <>
            <PhoneNumberInput name="field" onChange={action('changed')} placeholder="Placeholder text" />
            <Highlight className="html">{`<PhoneNumberInput name="field" onChange={action('changed')} placeholder="Placeholder text" />`}</Highlight>
        </>
    ))
    .add('with value', () => (
        <>
            <PhoneNumberInput name="field" onChange={action('changed')} value="Value text" />
            <Highlight className="html">{`<PhoneNumberInput name="field" onChange={action('changed')} value="Value text" />`}</Highlight>
        </>
    ))
    .add('with label', () => (
        <>
            <PhoneNumberInput name="field" onChange={action('changed')} label="Label text" />
            <Highlight className="html">{`<PhoneNumberInput name="field" onChange={action('changed')} label="Label text" />`}</Highlight>
        </>
    ))
    .add('with error', () => (
        <>
            <PhoneNumberInput name="field" onChange={action('changed')} label="Label text" inputError="Error text" />
            <Highlight className="html">{`<PhoneNumberInput name="field" onChange={action('changed')} label="Label text" inputError="Error text" />`}</Highlight>
        </>
    ));
