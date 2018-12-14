import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioGroupInput } from './RadioGroupInput';

const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Peach', value: 'peach' },
];

storiesOf('RadioGroupInput', module)
    .add('basic use', () => <RadioGroupInputContainer name="fruit" options={options} />)
    .add('with label', () => <RadioGroupInputContainer name="fruit" options={options} label="Pick a fruit" />)
    .add('with display inline', () => <RadioGroupInputContainer name="fruits" options={options} display="inline" />)
    .add('with error', () => (
        <RadioGroupInputContainer name="fruits" options={options} inputError="I am the ultimate error" />
    ));

class RadioGroupInputContainer extends Component {
    state = { fruit: 'banana' };

    handleChange = (event) => {
        this.setState({ fruit: event.target.value });
        action('changed in container')(event.target.name, event.target.value);
    };

    render() {
        return <RadioGroupInput onChange={this.handleChange} value={this.state.fruit} {...this.props} />;
    }
}
