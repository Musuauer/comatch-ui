import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MultiSelectInput } from './MultiSelectInput';

storiesOf('MultiSelectInput', module)
    .add('single with name and options', () => (
        <>
            <MultiSelectInput
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <Highlight className="html">
                {'<MultiSelectInput' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('multiple with name options, display inline and display block', () => (
        <div>
            <MultiSelectInput
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <MultiSelectInput
                display="inline"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <Highlight className="html">
                {'<MultiSelectInput' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>\n\n'}
                {'<MultiSelectInput' +
                    '\n\tdisplay="inline"' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </div>
    ))
    .add('with label', () => (
        <div>
            <MultiSelectInput
                label="MultiSelect your fruit"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <Highlight className="html">
                {'<MultiSelectInput' +
                    '\n\tlabel="MultiSelect your fruit"' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </div>
    ))
    .add('with label and required', () => (
        <div>
            <MultiSelectInput
                label="MultiSelect your fruit"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                required
            />
            <Highlight className="html">
                {'<MultiSelectInput' +
                    '\n\trequired' +
                    '\n\tlabel="MultiSelect your fruit"' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </div>
    ))
    .add('with error', () => (
        <div>
            <MultiSelectInput
                inputError="Alarm! Meltdown Imminent!"
                label="MultiSelect your fruit"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                required
            />
            <Highlight className="html">
                {'<MultiSelectInput' +
                    '\n\tinputError="Alarm! Meltdown Imminent!"' +
                    '\n\trequired' +
                    '\n\tlabel="MultiSelect your fruit"' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </div>
    ))
    .add('with defaultValue and onChange (uncontrolled)', () => {
        const handleChange = (event) => action('changed')(event.target.name, event.target.value);
        return (
            <div>
                <MultiSelectInput
                    name="fruit"
                    onChange={handleChange}
                    options={[
                        { value: 'apple', label: 'Apple' },
                        { value: 'banana', label: 'Banana' },
                        { value: 'peach', label: 'Peach' },
                    ]}
                    defaultValue={[{ label: 'Peach', value: 'peach' }]}
                />
                <Highlight className="html">
                    {'<MultiSelectInput' +
                        `\n\tdefaultValue={[{ label: 'Peach', value: 'peach' }]}` +
                        '\n\tname="fruits"' +
                        '\n\toptions={[' +
                        `\n\t\t{ value: 'apple', label: 'Apple' },` +
                        `\n\t\t{ value: 'banana', label: 'Banana' },` +
                        `\n\t\t{ value: 'peach', label: 'Peach' },` +
                        '\n\t]}' +
                        '\n/>'}
                </Highlight>
            </div>
        );
    })
    .add('disabled', () => (
        <>
            <MultiSelectInput
                name="fruits"
                disabled
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <Highlight className="html">
                {'<MultiSelectInput' +
                    '\n\tdisabled' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('as a controlled input', () => (
        <>
            <MultiSelectInputContainer />
            <Highlight className="javascript">
                {`class MultiSelectInputContainer extends React.Component {
    state = { fruit: 'banana' };

    handleChange = (event) => {
        this.setState({ fruit: event.target.value });
        action('changed in container')(event.target.name, event.target.value);
    };

    render() {
        return (
            <MultiSelectInput
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
}`}
            </Highlight>
        </>
    ));

class MultiSelectInputContainer extends React.Component {
    state = { fruit: 'banana' };

    handleChange = (event) => {
        this.setState({ fruit: event.target.value });
        action('changed in container')(event.target.name, event.target.value);
    };

    render() {
        return (
            <MultiSelectInput
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
