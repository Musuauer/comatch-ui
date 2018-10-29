import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

storiesOf('Button', module)
    .add('with primary style', () => (
        <Button text="Hello world" />
    ))
    .add('disabled with primary style', () => (
        <Button disabled text="Hello world" />
    ))
    .add('with primary style and onClickHandler', () => (
        <Button text="Hello world" onClickHandler={action('clicked')} />
    ))
    .add('with ghost style', () => (
        <Button ghost={true} text="Hello world" />
    ))
    .add('disabled with ghost style', () => (
        <Button ghost={true} disabled text="Hello world" />
    ))
    .add('with icon', () => (
        <Button icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />
    ))
    .add('with icon and ghost style', () => (
        <Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} text="Hello world" />
    ))
    .add('with icon on the right', () => (
        <Button iconAfterText={true} icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />
    ))
    .add('with icon only', () => (
        <Button icon={<FontAwesomeIcon icon={faTimes} />} />
    ))
    .add('with icon only and ghost style', () => (
        <Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} />
    ));
