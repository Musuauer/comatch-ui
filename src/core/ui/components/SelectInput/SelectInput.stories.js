import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SelectInput } from './SelectInput';

storiesOf('SelectInput', module)
    .add('single with name and options', () => (
        <SelectInput
            name="fruits"
            options={[
                { value: 'apple', label: 'Apple' },
                { value: 'banana', label: 'Banana' },
                { value: 'peach', label: 'Peach' },
            ]}
        />
    ))
    .add('multiple with name options, display inline and display block', () => (
        <div>
            <SelectInput
                display="inline"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <SelectInput
                display="inline"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <SelectInput
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <SelectInput
                display="inline"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
        </div>
    ))
    .add('single with label', () => (
        <div>
            <SelectInput
                label="Select your fruit"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
        </div>
    ))
    .add('single with label and required', () => (
        <div>
            <SelectInput
                label="Select your fruit"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                required={true}
            />
        </div>
    ))
    .add('single with error', () => (
        <div>
            <SelectInput
                inputError="Alarm! Meltdown Imminent!"
                label="Select your fruit"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                required={true}
            />
        </div>
    ))
    .add('single with onChange', () => {
        const handleChange = (event) => action('changed')(event.target.name, event.target.value);
        return (
            <SelectInput
                name="fruits"
                onChange={handleChange}
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                required={true}
            />
        );
    })
    .add('single with onBlur', () => (
        <div>
            <SelectInput
                name="fruits"
                onBlur={action('blur')}
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                required={true}
            />
        </div>
    ))
    .add('with defaultValue and onChange (uncontrolled)', () => {
        const handleChange = (event) => action('changed')(event.target.name, event.target.value);
        return (
            <SelectInput
                name="fruit"
                onChange={handleChange}
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                defaultValue={'peach'}
            />
        );
    })
    .add('disabled', () => (
        <SelectInput
            name="fruits"
            disabled
            options={[
                { value: 'apple', label: 'Apple' },
                { value: 'banana', label: 'Banana' },
                { value: 'peach', label: 'Peach' },
            ]}
        />
    ))
    .add('as a controlled input', () => <SelectInputContainer />);

class SelectInputContainer extends React.Component {
    state = { fruit: 'banana' };

    handleChange = (event) => {
        this.setState({ fruit: event.target.value });
        action('changed in container')(event.target.name, event.target.value);
    };

    render() {
        return (
            <SelectInput
                name="fruit"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                onChange={this.handleChange}
                value={this.state.fruit}
            />
        );
    }
}
