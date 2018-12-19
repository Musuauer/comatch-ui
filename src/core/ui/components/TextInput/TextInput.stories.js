/* eslint-disable max-len */
import React, { Component } from 'react';
import Highlight from 'react-highlight';
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
    .add('with basic style', () => (
        <>
            <TextInput name="field" onChange={action('changed')} />
            <Highlight className="html">{`<TextInput name="field" onChange={action('changed')} />`}</Highlight>
        </>
    ))
    .add('with placeholder', () => (
        <>
            <TextInput name="field" onChange={handleChange} placeholder="Placeholder text" />
            <Highlight className="html">{`<TextInput name="field" onChange={handleChange} placeholder="Placeholder text" />`}</Highlight>
        </>
    ))
    .add('with value', () => (
        <>
            <TextInput name="field" onChange={handleChange} value="Value text" />
            <Highlight className="html">{`<TextInput name="field" onChange={handleChange} value="Value text" />`}</Highlight>
        </>
    ))
    .add('with label', () => (
        <>
            <TextInput name="field" onChange={handleChange} label="Label text" />
            <Highlight className="html">{`<TextInput name="field" onChange={handleChange} label="Label text" />`}</Highlight>
        </>
    ))
    .add('with error', () => (
        <>
            <TextInput name="field" onChange={handleChange} label="Label text" inputError="Error text" />
            <Highlight className="html">{`<TextInput name="field" onChange={handleChange} label="Label text" inputError="Error text" />`}</Highlight>
        </>
    ))
    .add('disabled', () => (
        <>
            <TextInput name="field" onChange={handleChange} placeholder="Placeholder text" disabled />
            <Highlight className="html">{`<TextInput name="field" onChange={handleChange} placeholder="Placeholder text" disabled />`}</Highlight>
        </>
    ))
    .add('in a container', () => (
        <>
            <TextInputContainer />
            <Highlight className="javascript">{`class TextInputContainer extends Component {
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
}`}</Highlight>
        </>
    ));
