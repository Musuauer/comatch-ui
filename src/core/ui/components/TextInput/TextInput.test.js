import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { lorem } from 'faker';
import noop from 'lodash/noop';
import '../../../config/tests/setup';

import { TextInput } from './TextInput';

describe('TextInput', () => {
    const REQUIRED_PROPS = {
        name: 'text-input-unit-test',
        onChange: jest.fn(),
    };

    const OPTIONAL_PROPS = {
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
            ...REQUIRED_PROPS,
        };

        const textInputComponent = renderer.create(<TextInput {...props} />).toJSON();
        expect(textInputComponent).toMatchSnapshot();
    });

    it('should render with default props', () => {
        const props = {
            ...REQUIRED_PROPS,
        };

        const textInputComponent = mount(<TextInput {...props} />);

        // Required props:
        expect(textInputComponent.prop('name')).toEqual(props.name);
        expect(textInputComponent.prop('onChange')).toEqual(props.onChange);

        // Defaults:
        expect(textInputComponent.prop('autoComplete')).toEqual(null);
        expect(textInputComponent.prop('className')).toEqual(null);
        expect(textInputComponent.prop('defaultValue')).toEqual('');
        expect(textInputComponent.prop('disabled')).toEqual(null);
        expect(textInputComponent.prop('display')).toEqual('block');
        expect(textInputComponent.prop('icon')).toEqual(null);
        expect(textInputComponent.prop('id')).toEqual(null);
        expect(textInputComponent.prop('inputError')).toEqual('');
        expect(textInputComponent.prop('label')).toEqual('');
        expect(textInputComponent.prop('maxLength')).toEqual(null);
        expect(textInputComponent.prop('onBlur')).toEqual(noop);
        expect(textInputComponent.prop('onClick')).toEqual(noop);
        expect(textInputComponent.prop('onFocus')).toEqual(noop);
        expect(textInputComponent.prop('placeholder')).toEqual('');
        expect(textInputComponent.prop('required')).toEqual(false);
        expect(textInputComponent.prop('type')).toEqual('text');
        expect(textInputComponent.prop('value')).toEqual('');
    });

    it('should render with certain props', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };

        const textInputComponent = mount(<TextInput {...props} />);

        // Required Props:
        expect(textInputComponent.prop('name')).toEqual(props.name);
        expect(textInputComponent.prop('onChange')).toEqual(props.onChange);

        // Optional Props:
        expect(textInputComponent.prop('className')).toEqual(props.className);
        expect(textInputComponent.prop('defaultValue')).toEqual(props.defaultValue);
        expect(textInputComponent.prop('id')).toEqual(props.id);
        expect(textInputComponent.prop('inputError')).toEqual(props.inputError);
        expect(textInputComponent.prop('label')).toEqual(props.label);
        expect(textInputComponent.prop('name')).toEqual(props.name);
        expect(textInputComponent.prop('placeholder')).toEqual(props.placeholder);
        expect(textInputComponent.prop('value')).toEqual(props.value);

        expect(textInputComponent.prop('disabled')).toEqual(props.disabled);
        expect(textInputComponent.prop('required')).toEqual(props.required);

        expect(textInputComponent.prop('autoComplete')).toEqual(props.autoComplete);
        expect(textInputComponent.prop('display')).toEqual(props.display);
        expect(textInputComponent.prop('type')).toEqual(props.type);

        expect(textInputComponent.prop('maxLength')).toEqual(props.maxLength);

        expect(textInputComponent.prop('icon')).toEqual(props.icon);

        expect(textInputComponent.prop('onBlur')).toEqual(props.onBlur);
        expect(textInputComponent.prop('onClick')).toEqual(props.onClick);
        expect(textInputComponent.prop('onFocus')).toEqual(props.onFocus);
    });

    it('should render correctly with a Label', () => {
        const inputWithLabel = (
            <TextInput
                {...REQUIRED_PROPS}
                label={OPTIONAL_PROPS.label}
            />
        );
        const textInputComponentWithLabel = renderer.create(inputWithLabel).toJSON();
        const mountedTextInput = mount(inputWithLabel);
        const textInputContainerNode = mountedTextInput.children().at(0);

        expect(textInputComponentWithLabel).toMatchSnapshot();
        expect(textInputContainerNode.children()).toHaveLength(2);
        expect(textInputContainerNode.children().at(0).name()).toBe('InputLabel');
        expect(textInputContainerNode.children().at(1).name()).toBe('input');
    });

    it('should render correctly with an Icon', () => {
        const inputWithIcon = (
            <TextInput
                {...REQUIRED_PROPS}
                icon={OPTIONAL_PROPS.icon}
            />
        );
        const mountedTextInput = mount(inputWithIcon);
        const textInputContainerNode = mountedTextInput.children().at(0);
        const textInputComponentWithIcon = renderer.create(inputWithIcon).toJSON();

        expect(textInputComponentWithIcon).toMatchSnapshot();
        expect(textInputContainerNode.children()).toHaveLength(2);
        expect(textInputContainerNode.children().at(0).name()).toBe('input');
        expect(textInputContainerNode.children().at(1).name()).toBe('i');
    });

    it('should render correctly with an InputError', () => {
        const inputWithInputError = (
            <TextInput
                {...REQUIRED_PROPS}
                inputError={OPTIONAL_PROPS.inputError}
            />
        );
        const mountedTextInput = mount(inputWithInputError);
        const textInputContainerNode = mountedTextInput.children().at(0);
        const textInputComponentWithInputError = renderer.create(inputWithInputError).toJSON();

        expect(textInputComponentWithInputError).toMatchSnapshot();
        expect(textInputContainerNode.children()).toHaveLength(2);
        expect(textInputContainerNode.children().at(0).name()).toBe('input');
        expect(textInputContainerNode.children().at(1).name()).toBe('InputError');
    });
});
