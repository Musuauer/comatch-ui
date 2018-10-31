import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert, ALERT_TYPE } from './Alert';
// import { RadioGroupInput } from '../RadioGroupInput/RadioGroupInput.jsx';

storiesOf('Alert', module)
    .add('with success style', () => (
        <Alert type={ALERT_TYPE.SUCCESS} message="A block alert" />
    ))
    .add('with warning style', () => (
        <Alert type={ALERT_TYPE.WARNING} message="A block alert" />
    ))
    .add('with danger style', () => (
        <Alert type={ALERT_TYPE.DANGER} message="A block alert" />
    ))
    .add('with info style', () => (
        <Alert type={ALERT_TYPE.INFO} message="A block alert" />
    ))
    .add('with success style and display inline', () => (
        <Alert display="inline" type={ALERT_TYPE.SUCCESS} message="A block alert" />
    ))
    .add('with warning style and display inline', () => (
        <Alert display="inline" type={ALERT_TYPE.WARNING} message="A block alert" />
    ))
    .add('with danger style and display inline', () => (
        <Alert display="inline" type={ALERT_TYPE.DANGER} message="A block alert" />
    ))
    .add('with info style and display inline', () => (
        <Alert display="inline" type={ALERT_TYPE.INFO} message="A block alert" />
    ))
    .add('with no props', () => (
        <Alert />
    ))
    .add('with displayIcon false', () => (
        <Alert displayIcon={false} />
    ))
    // .add('with displayIcon false and children', () => (
    //     <Alert displayIcon={false}>
    //         { <RadioGroupInput
    //             name="fruits"
    //             options={[
    //                 { label: 'Apple', value: 'apple' },
    //                 { label: 'Banana', value: 'banana' },
    //                 { label: 'Peach', value: 'peach' },
    //             ]}
    //         /> }
    //     </Alert>
    // ))
    // .add('with displayIcon false, message and children', () => (
    //     <Alert displayIcon={false} message="What's up Doc?">
    //         { <RadioGroupInput
    //             name="fruits"
    //             options={[
    //                 { label: 'Apple', value: 'apple' },
    //                 { label: 'Banana', value: 'banana' },
    //                 { label: 'Peach', value: 'peach' },
    //             ]}
    //         /> }
    //     </Alert>
    // ));
