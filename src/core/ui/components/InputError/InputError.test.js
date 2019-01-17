import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { InputError } from './InputError';
import '../../../config/tests/setup';

describe('InputError', () => {
    const testText = 'Testing InputError';

    it('should render correctly', () => {
        const inputError = renderer.create(<InputError text={testText} />).toJSON();
        expect(inputError).toMatchSnapshot();
    });

    it('should render an InputError with properly mapped props', () => {
        const inputError = mount(<InputError text={testText} />);

        expect(inputError.prop('text')).toEqual(testText);
        expect(inputError.text()).toEqual(testText);
    });
});
