import React from 'react';
import { storiesOf } from '@storybook/react';
import { Notifications } from './Notifications';
import { ALERT_TYPE } from '../../../../../components/Alert';
import { Button } from '../../../../../components/Button';
import * as actions from '../../../redux/actions';
import { store } from '../../../../../../../../.storybook/store';

function renderNotification(type, message) {
    store.dispatch(actions.showNotification({ type, message }));
}

storiesOf('Notifications', module)
    .add('render a notification with success style', () => (
        <>
            <Button
                text="Click me"
                onClick={() => renderNotification(ALERT_TYPE.SUCCESS, 'Successfully displayed a notification.')}
            />
            <Notifications />
        </>
    ))
    .add('render a notification with danger style', () => (
        <>
            <Button text="Click me" onClick={() => renderNotification(ALERT_TYPE.DANGER, 'There was an error.')} />
            <Notifications />
        </>
    ))
    .add('render a notification with warning style', () => (
        <>
            <Button text="Click me" onClick={() => renderNotification(ALERT_TYPE.WARNING, 'There is a warning.')} />
            <Notifications />
        </>
    ))
    .add('render a notification with info style', () => (
        <>
            <Button
                text="Click me"
                onClick={() => renderNotification(ALERT_TYPE.INFO, 'So much information.')}
            />
            <Notifications />
        </>
    ));
