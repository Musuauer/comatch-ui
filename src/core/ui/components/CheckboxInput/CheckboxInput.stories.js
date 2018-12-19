import React, { Component } from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CheckboxInput } from './CheckboxInput';

storiesOf('CheckboxInput', module)
    .add('single no label', () => (
        <>
            <CheckboxInput name="isFoo" />
            <Highlight className="html">{'<CheckboxInput name="isFoo" />'}</Highlight>
        </>
    ))
    .add('single with label', () => (
        <>
            <CheckboxInput label="Foo" name="isFoo" />
            <Highlight className="html">{'<CheckboxInput label="Foo" name="isFoo" />'}</Highlight>
        </>
    ))
    .add('multiple with label', () => (
        <div>
            <CheckboxInput label="Foo" name="isFoo" value="1" />
            <CheckboxInput label="Bar" name="isBar" value="2" />
        </div>
    ))
    .add('multiple with label and display inline', () => (
        <div>
            <CheckboxInput label="Foo" name="isFoo" display="inline" />
            <CheckboxInput label="Bar" name="isBar" value="2" display="inline" />
        </div>
    ))
    .add('multiple with label, display inline and display block', () => (
        <div>
            <CheckboxInput label="Foo" name="isFoo" />
            <CheckboxInput label="Bar" name="isBar" />
            <CheckboxInput label="Atomic" name="isAtomic" value="3" display="inline" />
            <CheckboxInput label="Radioactive" name="isRadioactive" value="4" display="inline" />
            <CheckboxInput label="Supersonic" name="isSupersonic" value="5" display="inline" />
            <CheckboxInput label="Hey!" name="isHey" value="6" />
            <CheckboxInput label="Ho!" name="isHo" value="7" />
        </div>
    ))
    .add('single with label and inputError', () => (
        <>
            <CheckboxInput label="Foo" name="isFoo" inputError="Alarm! Meltdown Imminent!" />
            <Highlight className="html">
                {'<CheckboxInput label="Foo" name="isFoo" inputError="Alarm! Meltdown Imminent!" />'}
            </Highlight>
        </>
    ))
    .add('multiple with label and inputError', () => (
        <div>
            <CheckboxInput label="Foo" name="isFoo" inputError="Alarm! Meltdown Imminent!" />
            <CheckboxInput label="Bar" name="isBar" inputError="Alarm! Meltdown Imminent!" />
            <CheckboxInput label="Atomic" name="isAtomic" inputError="Alarm! Meltdown Imminent!" />
            <CheckboxInput label="Radioactive" name="isRadioactive" />
            <CheckboxInput label="Supersonic" name="isSupersonic" />
        </div>
    ))
    .add('multiple with label, name, value and onChange', () => {
        const handleChange = (event) => action('changed')(event.target.name, event.target.checked);
        return (
            <div>
                <CheckboxInput label="Foo" name="isFoo" value="1" onChange={handleChange} />
                <CheckboxInput label="Bar" name="isBar" value="2" onChange={handleChange} />
                <CheckboxInput label="Atomic" name="isAtomic" value="3" onChange={handleChange} />
            </div>
        );
    })
    .add('in a container', () => <CheckboxInputContainer />);

class CheckboxInputContainer extends Component {
    state = { available: false };

    handleChange = (event) => {
        this.setState({ available: event.target.checked });
        action('changed in container')(event.target.name, event.target.checked);
    };

    render() {
        return (
            <>
                <CheckboxInput label="Available" name="available" onChange={this.handleChange} />
                <Highlight className="html">
                    {'<CheckboxInput label="Available" name="available" onChange={function() {}} />'}
                </Highlight>
            </>
        );
    }
}
