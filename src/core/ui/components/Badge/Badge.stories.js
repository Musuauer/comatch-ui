/* eslint-disable import/no-unresolved */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge } from './Badge';

storiesOf('Badge', module)
    .add('with xs size and lightblue background-color', () => (
        <Badge text="Badge text" size="xs" color="lightblue" />
    ))
    .add('with xs size and blue background-color', () => (
        <Badge text="Badge text" size="xs" color="blue" />
    ))
    .add('with xs size and orange background-color', () => (
        <Badge text="Badge text" size="xs" color="orange" />
    ))
    .add('with xs size and green background-color', () => (
        <Badge text="Badge text" size="xs" color="green" />
    ))
    .add('with xs size and gray background-color', () => (
        <Badge text="Badge text" size="xs" color="gray" />
    ))
    .add('with xs size and white background-color', () => (
        <Badge text="Badge text" size="xs" color="white" />
    ))
    .add('with sm size and lightblue background-color', () => (
        <Badge text="Badge text" size="sm" color="lightblue" />
    ))
    .add('with sm size and blue background-color', () => (
        <Badge text="Badge text" size="sm" color="blue" />
    ))
    .add('with sm size and orange background-color', () => (
        <Badge text="Badge text" size="sm" color="orange" />
    ))
    .add('with sm size and green background-color', () => (
        <Badge text="Badge text" size="sm" color="green" />
    ))
    .add('with sm size and gray background-color', () => (
        <Badge text="Badge text" size="sm" color="gray" />
    ))
    .add('with sm size and white background-color', () => (
        <Badge text="Badge text" size="sm" color="white" />
    ));
