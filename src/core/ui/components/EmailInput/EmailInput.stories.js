/* eslint-disable max-len */
import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { EmailInput } from './EmailInput';

storiesOf('EmailInput', module)
    .add('with basic style', () => (
        <>
            <EmailInput name="field" onChange={action('changed')} />
            <Highlight className="html">{'<EmailInput name="field" onChange={function() {}} />'}</Highlight>
        </>
    ))
    .add('with placeholder', () => (
        <>
            <EmailInput name="field" onChange={action('changed')} placeholder="Placeholder text" />
            <Highlight className="html">
                {'<EmailInput name="field" onChange={function() {}} placeholder="Placeholder text"/>'}
            </Highlight>
        </>
    ))
    .add('with value', () => (
        <>
            <EmailInput name="field" onChange={action('changed')} value="Value text" />
            <Highlight className="html">
                {'<EmailInput name="field" onChange={function() {}} value="Value text" />'}
            </Highlight>
        </>
    ))
    .add('with label', () => (
        <>
            <EmailInput name="field" onChange={action('changed')} label="Label text" />
            <Highlight className="html">
                {'<EmailInput name="field" onChange={function() {}} label="Label text" />'}
            </Highlight>
        </>
    ))
    .add('with error', () => (
        <>
            <EmailInput name="field" onChange={action('changed')} label="Label text" inputError="Error text" />
            <Highlight className="html">
                {'<EmailInput name="field" onChange={function() {}} label="Label text" inputError="Error text" />'}
            </Highlight>
        </>
    ));
