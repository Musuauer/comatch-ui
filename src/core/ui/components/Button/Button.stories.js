import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

storiesOf('Button', module)
    .add('with primary style', () => (
        <>
            <Button text="Hello world" />
            <code>{'<Button text="Hello world" />'}</code>
        </>
    ))
    .add('disabled with primary style', () => (
        <>
            <Button disabled text="Hello world" />
            <code>{'<Button disabled text="Hello world" />'}</code>
        </>
    ))
    .add('with primary style and onClick handler', () => (
        <>
            <Button text="Hello world" onClick={action('clicked')} />
            <code>{`<Button text="Hello world" onClick={(event) => {}} />`}</code>
        </>
    ))
    .add('with ghost style', () => (
        <>
            <Button ghost text="Hello world" />
            <code>{'<Button ghost text="Hello world" />'}</code>
        </>
    ))
    .add('disabled with ghost style', () => (
        <>
            <Button ghost disabled text="Hello world" />
            <code>{'<Button ghost disabled text="Hello world" />'}</code>
        </>
    ))
    .add('with icon', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />
            <code>{'<Button icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />'}</code>
        </>
    ))
    .add('with icon and ghost style', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} text="Hello world" />
            <code>{'<Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} text="Hello world" />'}</code>
        </>
    ))
    .add('with icon on the right', () => (
        <>
            <Button iconAfterText={true} icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />
            <code>
                {'<Button iconAfterText={true} icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />'}
            </code>
        </>
    ))
    .add('with icon only', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} />
            <code>{'<Button icon={<FontAwesomeIcon icon={faTimes} />} />'}</code>
        </>
    ))
    .add('with icon only and ghost style', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} />
            <code>{'<Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} />'}</code>
        </>
    ));
