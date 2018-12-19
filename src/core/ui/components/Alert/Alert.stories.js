import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert, ALERT_TYPE } from './Alert';
// import { RadioGroupInput } from '../RadioGroupInput/RadioGroupInput.jsx';

storiesOf('Alert', module)
    .add('with success style', () => (
        <>
            <Alert type={ALERT_TYPE.SUCCESS} message="A block alert" />
            <code>{'<Alert type={ALERT_TYPE.SUCCESS} message="A block alert" />'}</code>
        </>
    ))
    .add('with warning style', () => (
        <>
            <Alert type={ALERT_TYPE.WARNING} message="A block alert" />
            <code>{'<Alert type={ALERT_TYPE.WARNING} message="A block alert" />'}</code>
        </>
    ))
    .add('with danger style', () => (
        <>
            <Alert type={ALERT_TYPE.DANGER} message="A block alert" />
            <code>{'<Alert type={ALERT_TYPE.DANGER} message="A block alert" />'}</code>
        </>
    ))
    .add('with info style', () => (
        <>
            <Alert type={ALERT_TYPE.INFO} message="A block alert" />
            <code>{'<Alert type={ALERT_TYPE.INFO} message="A block alert" />'}</code>
        </>
    ))
    .add('with success style and display inline', () => (
        <>
            <Alert display="inline" type={ALERT_TYPE.SUCCESS} message="A block alert" />
            <code>{'<Alert display="inline" type={ALERT_TYPE.SUCCESS} message="A block alert" />'}</code>
        </>
    ))
    .add('with warning style and display inline', () => (
        <>
            <Alert display="inline" type={ALERT_TYPE.WARNING} message="A block alert" />
            <code>{'<Alert display="inline" type={ALERT_TYPE.WARNING} message="A block alert" />'}</code>
        </>
    ))
    .add('with danger style and display inline', () => (
        <>
            <Alert display="inline" type={ALERT_TYPE.DANGER} message="A block alert" />
            <code>{'<Alert display="inline" type={ALERT_TYPE.DANGER} message="A block alert" />'}</code>
        </>
    ))
    .add('with info style and display inline', () => (
        <>
            <Alert display="inline" type={ALERT_TYPE.INFO} message="A block alert" />
            <code>{'<Alert display="inline" type={ALERT_TYPE.INFO} message="A block alert" />'}</code>
        </>
    ))
    .add('with no props', () => (
        <>
            <Alert />
            <code>{'<Alert />'}</code>
        </>
    ))
    .add('with displayIcon false', () => (
        <>
            <Alert displayIcon={false} />
            <code>{'<Alert displayIcon={false} />'}</code>
        </>
    ));
