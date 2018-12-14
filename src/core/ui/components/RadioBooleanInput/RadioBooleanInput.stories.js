import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioBooleanInput } from './RadioBooleanInput';

class RadioBooleanInputContainer extends React.Component {
    state = { available: true };

    handleChange = (event) => {
        this.setState({ available: JSON.parse(event.target.value) });
        action('changed in container')(event.target.name, event.target.value);
    };

    render() {
        return (
            <RadioBooleanInput
                name="available"
                onChange={this.handleChange}
                value={this.state.available}
                trueLabel="yes"
                falseLabel="no"
            />
        );
    }
}

storiesOf('RadioBooleanInput', module)
    .add('with name', () => <RadioBooleanInput trueLabel="yes" falseLabel="no" name="choice" />)
    .add('with name and display inline', () => (
        <RadioBooleanInput name="choice" trueLabel="yes" falseLabel="no" display="inline" />
    ))
    .add('with name and display block', () => (
        <RadioBooleanInput name="choice" trueLabel="yes" falseLabel="no" display="block" />
    ))
    .add('with name and label', () => (
        <RadioBooleanInput name="choice" trueLabel="yes" falseLabel="no" label="I am the ultimate label" />
    ))
    .add('with name and error', () => (
        <RadioBooleanInput name="choice" trueLabel="yes" falseLabel="no" inputError="I am the ultimate error" />
    ))
    .add('with name, label and error', () => (
        <RadioBooleanInput
            name="choice"
            label="I am the ultimate label"
            trueLabel="yes"
            falseLabel="no"
            inputError="I am the ultimate error"
        />
    ))
    .add('with name, label and display inline', () => (
        <RadioBooleanInput
            name="choice"
            display="inline"
            trueLabel="yes"
            falseLabel="no"
            label="I am the ultimate label"
        />
    ))
    .add('with name, error and display inline', () => (
        <RadioBooleanInput
            name="choice"
            display="inline"
            trueLabel="yes"
            falseLabel="no"
            inputError="I am the ultimate error"
        />
    ))
    .add('with name, label, error and display inline', () => (
        <RadioBooleanInput
            name="choice"
            display="inline"
            label="I am the ultimate label"
            inputError="I am the ultimate error"
            trueLabel="yes"
            falseLabel="no"
        />
    ))
    .add('with onChange', () => {
        const handleChange = (event) => action('changed')(event.target.name, event.target.value);
        return <RadioBooleanInput name="choice" trueLabel="yes" falseLabel="no" onChange={handleChange} />;
    })
    .add('in a container', () => <RadioBooleanInputContainer />);
