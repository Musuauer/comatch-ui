/* eslint-disable max-len */
import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NumberInput } from './NumberInput';

storiesOf('NumberInput', module)
    .add('with basic style', () => (
        <>
            <NumberInput name="field" onChange={action('changed')} />
            <Highlight className="html">{`<NumberInput name="field" onChange={action('changed')} />`}</Highlight>
        </>
    ))
    .add('with placeholder', () => (
        <>
            <NumberInput name="field" onChange={action('changed')} placeholder="Placeholder text" />
            <Highlight className="html">{`<NumberInput name="field" onChange={action('changed')}  placeholder="Placeholder text" />`}</Highlight>
        </>
    ))
    .add('with value', () => (
        <>
            <NumberInput name="field" onChange={action('changed')} value="Value text" />
            <Highlight className="html">{`<NumberInput name="field" onChange={action('changed')}  value="Value text" />`}</Highlight>
        </>
    ))
    .add('with label', () => (
        <>
            <NumberInput name="field" onChange={action('changed')} label="Label text" />
            <Highlight className="html">{`<NumberInput name="field" onChange={action('changed')} label="Label text" />`}</Highlight>
        </>
    ))
    .add('with error', () => (
        <>
            <NumberInput name="field" onChange={action('changed')} label="Label text" inputError="Error text" />
            <Highlight className="html">{`<NumberInput name="field" onChange={action('changed')} label="Label text" inputError="Error text" />`}</Highlight>
        </>
    ))
    .add('hiding Chrome/Safari/Firefox up and down arrows', () => (
        <>
            <NumberInput name="field" onChange={action('changed')} hideArrows />
            <Highlight className="html">{`<NumberInput name="field" onChange={action('changed')} hideArrows />`}</Highlight>
        </>
    ));
