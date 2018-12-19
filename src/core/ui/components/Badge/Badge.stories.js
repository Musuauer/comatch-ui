/* eslint-disable import/no-unresolved */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge } from './Badge';

storiesOf('Badge', module)
    .add('with xs size and lightblue background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="lightblue" />
            <code>{'<Badge text="Badge text" size="xs" color="lightblue" />'}</code>
        </>
    ))
    .add('with xs size and blue background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="blue" />
            <code>{'<Badge text="Badge text" size="xs" color="blue" />'}</code>
        </>
    ))
    .add('with xs size and orange background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="orange" />
            <code>{'<Badge text="Badge text" size="xs" color="orange" />'}</code>
        </>
    ))
    .add('with xs size and green background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="green" />
            <code>{'<Badge text="Badge text" size="xs" color="green" />'}</code>
        </>
    ))
    .add('with xs size and gray background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="gray" />
            <code>{'<Badge text="Badge text" size="xs" color="gray" />'}</code>
        </>
    ))
    .add('with xs size and white background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="white" />
            <code>{'<Badge text="Badge text" size="xs" color="white" />'}</code>
        </>
    ))
    .add('with sm size and lightblue background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="lightblue" />
            <code>{'<Badge text="Badge text" size="sm" color="lightblue" />'}</code>
        </>
    ))
    .add('with sm size and blue background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="blue" />
            <code>{'<Badge text="Badge text" size="sm" color="blue" />'}</code>
        </>
    ))
    .add('with sm size and orange background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="orange" />
            <code>{'<Badge text="Badge text" size="sm" color="orange" />'}</code>
        </>
    ))
    .add('with sm size and green background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="green" />
            <code>{'<Badge text="Badge text" size="sm" color="green" />'}</code>
        </>
    ))
    .add('with sm size and gray background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="gray" />
            <code>{'<Badge text="Badge text" size="sm" color="gray" />'}</code>
        </>
    ))
    .add('with sm size and white background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="white" />
            <code>{'<Badge text="Badge text" size="sm" color="white" />'}</code>
        </>
    ));
