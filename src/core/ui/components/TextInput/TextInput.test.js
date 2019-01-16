import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { lorem } from 'faker';
import noop from 'lodash/noop';
import '../../../config/tests/setup';

import { TextInput } from './TextInput';

describe('TextInput', () => {
    const COMMON_PROPS = {
        name: 'text-input-unit-test',
        onChange: jest.fn(),
    };

    const ASSIGNED_OPTIONAL_PROPS = {
        className: lorem.word(),
        defaultValue: lorem.word(),
        id: lorem.word(),
        inputError: 'Testing InputError Message',
        label: 'Testing Label',
        name: lorem.word(),
        placeholder: lorem.word(),
        value: lorem.word(),

        disabled: false,
        required: true,

        autoComplete: 'on',
        display: 'inline',
        type: 'password',

        maxLength: 100,

        icon: <i />,

        onBlur: jest.fn(),
        onClick: jest.fn(),
        onFocus: jest.fn(),
    };

    it('should render correctly', () => {
        const props = {
            ...COMMON_PROPS,
        };

        const thing = renderer.create(<TextInput {...props} />).toJSON();
        expect(thing).toMatchSnapshot();
    });

    it('should render with default props', () => {
        const props = {
            ...COMMON_PROPS,
        };

        const thing = mount(<TextInput {...props} />);

        // Required props:
        expect(thing.prop('name')).toEqual(props.name);
        expect(thing.prop('onChange')).toEqual(props.onChange);

        // Defaults:
        expect(thing.prop('autoComplete')).toEqual(null);
        expect(thing.prop('className')).toEqual(null);
        expect(thing.prop('defaultValue')).toEqual('');
        expect(thing.prop('disabled')).toEqual(null);
        expect(thing.prop('display')).toEqual('block');
        expect(thing.prop('icon')).toEqual(null);
        expect(thing.prop('id')).toEqual(null);
        expect(thing.prop('inputError')).toEqual('');
        expect(thing.prop('label')).toEqual('');
        expect(thing.prop('maxLength')).toEqual(null);
        expect(thing.prop('onBlur')).toEqual(noop);
        expect(thing.prop('onClick')).toEqual(noop);
        expect(thing.prop('onFocus')).toEqual(noop);
        expect(thing.prop('placeholder')).toEqual('');
        expect(thing.prop('required')).toEqual(false);
        expect(thing.prop('type')).toEqual('text');
        expect(thing.prop('value')).toEqual('');
    });

    it('should render with certain props', () => {
        const props = {
            ...COMMON_PROPS,
            ...ASSIGNED_OPTIONAL_PROPS,
        };

        const thing = mount(<TextInput {...props} />);

        // Required Props:
        expect(thing.prop('name')).toEqual(props.name);
        expect(thing.prop('onChange')).toEqual(props.onChange);

        // Optional Props:
        expect(thing.prop('className')).toEqual(props.className);
        expect(thing.prop('defaultValue')).toEqual(props.defaultValue);
        expect(thing.prop('id')).toEqual(props.id);
        expect(thing.prop('inputError')).toEqual(props.inputError);
        expect(thing.prop('label')).toEqual(props.label);
        expect(thing.prop('name')).toEqual(props.name);
        expect(thing.prop('placeholder')).toEqual(props.placeholder);
        expect(thing.prop('value')).toEqual(props.value);

        expect(thing.prop('disabled')).toEqual(props.disabled);
        expect(thing.prop('required')).toEqual(props.required);

        expect(thing.prop('autoComplete')).toEqual(props.autoComplete);
        expect(thing.prop('display')).toEqual(props.display);
        expect(thing.prop('type')).toEqual(props.type);

        expect(thing.prop('maxLength')).toEqual(props.maxLength);

        expect(thing.prop('icon')).toEqual(props.icon);

        expect(thing.prop('onBlur')).toEqual(props.onBlur);
        expect(thing.prop('onClick')).toEqual(props.onClick);
        expect(thing.prop('onFocus')).toEqual(props.onFocus);
    });

    it('should render with correct HTML structure (manipulated through props)', () => {
        const inputWithLabel = (
            <TextInput
                {...COMMON_PROPS}
                label={ASSIGNED_OPTIONAL_PROPS.label}
            />
        );

        const inputWithIcon = (
            <TextInput
                {...COMMON_PROPS}
                icon={ASSIGNED_OPTIONAL_PROPS.icon}
            />
        );

        const inputWithInputError = (
            <TextInput
                {...COMMON_PROPS}
                inputError={ASSIGNED_OPTIONAL_PROPS.inputError}
            />
        );

        const inputWithEverything = (
            <TextInput
                {...COMMON_PROPS}
                label={ASSIGNED_OPTIONAL_PROPS.label}
                icon={ASSIGNED_OPTIONAL_PROPS.icon}
                inputError={ASSIGNED_OPTIONAL_PROPS.inputError}
            />
        );

        const thingWithLabel = renderer.create(inputWithLabel).toJSON();
        const thingWithIcon = renderer.create(inputWithIcon).toJSON();
        const thingWithInputError = renderer.create(inputWithInputError).toJSON();
        const thingWithEverything = renderer.create(inputWithEverything).toJSON();

        expect(thingWithLabel).toMatchSnapshot();
        expect(thingWithIcon).toMatchSnapshot();
        expect(thingWithInputError).toMatchSnapshot();
        expect(thingWithEverything).toMatchSnapshot();
    });
});
