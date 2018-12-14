import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TextInput } from './TextInput';

const handleChange = (event) => action('changed')(event.target.name, event.target.value);

class TextInputContainer extends Component {
    state = { description: 'this is my text' };

    handleChange = (event) => {
        this.setState({ description: event.target.value });
        action('changed in container')(event.target.name, event.target.value);
    };

    handleFocus = (event) => {
        action('focused in container')(event);
    };

    handleBlur = (event) => {
        action('blured in container')(event);
    };

    render() {
        return (
            <TextInput
                name="field"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                value={this.state.description}
            />
        );
    }
}

storiesOf('TextInput', module)
    .add('with basic style', () => <TextInput name="field" onChange={action('changed')} />)
    .add('with placeholder', () => <TextInput name="field" onChange={handleChange} placeholder="Placeholder text" />)
    .add('with value', () => <TextInput name="field" onChange={handleChange} value="Value text" />)
    .add('with label', () => <TextInput name="field" onChange={handleChange} label="Label text" />)
    .add('with error', () => (
        <TextInput name="field" onChange={handleChange} label="Label text" inputError="Error text" />
    ))
    .add('disabled', () => <TextInput name="field" onChange={handleChange} placeholder="Placeholder text" disabled />)
    .add('in a container', () => <TextInputContainer />);
