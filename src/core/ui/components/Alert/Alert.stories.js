import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Alert, ALERT_TYPE } from './Alert';

storiesOf('Alert', module)
    .add('with success style', () => (
        <>
            <Alert type={ALERT_TYPE.SUCCESS} message="A block alert" />
            <Highlight className="html">{'<Alert type={ALERT_TYPE.SUCCESS} message="A block alert" />'}</Highlight>
        </>
    ))
    .add('with warning style', () => (
        <>
            <Alert type={ALERT_TYPE.WARNING} message="A block alert" />
            <Highlight className="html">{'<Alert type={ALERT_TYPE.WARNING} message="A block alert" />'}</Highlight>
        </>
    ))
    .add('with danger style', () => (
        <>
            <Alert type={ALERT_TYPE.DANGER} message="A block alert" />
            <Highlight className="html">{'<Alert type={ALERT_TYPE.DANGER} message="A block alert" />'}</Highlight>
        </>
    ))
    .add('with info style', () => (
        <>
            <Alert type={ALERT_TYPE.INFO} message="A block alert" />
            <Highlight className="html">{'<Alert type={ALERT_TYPE.INFO} message="A block alert" />'}</Highlight>
        </>
    ))
    .add('with success style and display inline', () => (
        <>
            <Alert display="inline" type={ALERT_TYPE.SUCCESS} message="A block alert" />
            <Highlight className="html">
                {'<Alert display="inline" type={ALERT_TYPE.SUCCESS} message="A block alert" />'}
            </Highlight>
        </>
    ))
    .add('with warning style and display inline', () => (
        <>
            <Alert display="inline" type={ALERT_TYPE.WARNING} message="A block alert" />
            <Highlight className="html">
                {'<Alert display="inline" type={ALERT_TYPE.WARNING} message="A block alert" />'}
            </Highlight>
        </>
    ))
    .add('with danger style and display inline', () => (
        <>
            <Alert display="inline" type={ALERT_TYPE.DANGER} message="A block alert" />
            <Highlight className="html">
                {'<Alert display="inline" type={ALERT_TYPE.DANGER} message="A block alert" />'}
            </Highlight>
        </>
    ))
    .add('with info style and display inline', () => (
        <>
            <Alert display="inline" type={ALERT_TYPE.INFO} message="A block alert" />
            <Highlight className="html">
                {'<Alert display="inline" type={ALERT_TYPE.INFO} message="A block alert" />'}
            </Highlight>
        </>
    ))
    .add('with no props', () => (
        <>
            <Alert />
            <Highlight className="html">{'<Alert />'}</Highlight>
        </>
    ))
    .add('with displayIcon false', () => (
        <>
            <Alert displayIcon={false} />
            <Highlight className="html">{'<Alert displayIcon={false} />'}</Highlight>
        </>
    ))
    .add('with display as notification', () => (
        <>
            <Alert display="notification" message="Notification message" />
            <Highlight className="html">{'<Alert display="notification" message="Notification message" />'}</Highlight>
        </>
    ))
    .add('with display as notification and type as danger', () => (
        <>
            <Alert display="notification" message="Notification message" type={ALERT_TYPE.DANGER} />
            <Highlight className="html">{'<Alert display="notification"'
                + 'message="Notification message" type={ALERT_TYPE.DANGER} />'}</Highlight>
        </>
    ))
    .add('with display as notification and type as success', () => (
        <>
            <Alert display="notification" message="Notification message" type={ALERT_TYPE.SUCCESS} />
            <Highlight className="html">{'<Alert display="notification"'
                + 'message="Notification message" type={ALERT_TYPE.SUCCESS} />'}</Highlight>
        </>
    ))
    .add('with display as notification and type as warning', () => (
        <>
            <Alert display="notification" message="Notification message" type={ALERT_TYPE.WARNING} />
            <Highlight className="html">{'<Alert display="notification"'
                + 'message="Notification message" type={ALERT_TYPE.WARNING} />'}</Highlight>
        </>
    ));
