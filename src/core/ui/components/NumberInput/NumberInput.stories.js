/* eslint-disable max-len */
import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NumberInput } from './NumberInput';

class ControlledNumberInput extends React.Component {
    state = {
        value: 100,
    };

    updateValue = (event) => { this.setState({ value: event.target.value }) };

    render() {
        return <NumberInput value={this.state.value} onChange={this.updateValue} {...this.props} />;
    }
}

storiesOf('NumberInput', module)
    .add('with basic style', () => (
        <>
            <NumberInput name="field" onChange={action('changed')} />
            <Highlight className="html">{`<NumberInput name="field" onChange={action('changed')} />`}</Highlight>
        </>
    ))
    .add('with placeholder', () => (
        <>
            <NumberInput name="field" onChange={action('changed')} placeholder="Placeholder text" />
            <Highlight className="html">{`<NumberInput name="field" onChange={action('changed')}  placeholder="Placeholder text" />`}</Highlight>
        </>
    ))
    .add('with value', () => (
        <>
            <NumberInput name="field" onChange={action('changed')} value={100} />
            <Highlight className="html">{`<NumberInput name="field" onChange={action('changed')}  value={100} />`}</Highlight>
        </>
    ))
    .add('with min value set to 0', () => (
        <>
            <ControlledNumberInput name="field" min={0} />
            <Highlight className="html">{`<NumberInput name="field" min={0} />`}</Highlight>
        </>
    ))
    .add('with max value set to 101', () => (
        <>
            <ControlledNumberInput name="field" max={101} />
            <Highlight className="html">{`<NumberInput name="field" max={101} />`}</Highlight>
        </>
    ))
    .add('with min value set to 0 and max value set to 101', () => (
        <>
            <ControlledNumberInput name="field" min={0} max={101} />
            <Highlight className="html">{`<NumberInput name="field" min={0} max={101} />`}</Highlight>
        </>
    ))
    .add('with label', () => (
        <>
            <NumberInput name="field" onChange={action('changed')} label="Label text" />
            <Highlight className="html">{`<NumberInput name="field" onChange={action('changed')} label="Label text" />`}</Highlight>
        </>
    ))
    .add('with error', () => (
        <>
            <NumberInput name="field" onChange={action('changed')} label="Label text" inputError="Error text" />
            <Highlight className="html">{`<NumberInput name="field" onChange={action('changed')} label="Label text" inputError="Error text" />`}</Highlight>
        </>
    ))
    .add('hiding Chrome/Safari/Firefox up and down arrows', () => (
        <>
            <NumberInput name="field" onChange={action('changed')} hideArrows />
            <Highlight className="html">{`<NumberInput name="field" onChange={action('changed')} hideArrows />`}</Highlight>
        </>
    ));
