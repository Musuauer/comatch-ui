import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { InputError } from './InputError';
import '../../../config/tests/setup';

const testText = 'Testing InputError';

describe('InputError', () => {
    it('should render correctly', () => {
        const inputError = renderer.create(<InputError text={testText} />).toJSON();
        expect(inputError).toMatchSnapshot();
    });

    it('should render an InputError with default props', () => {
        const item = shallow(<InputError text={testText} />);

        // should have a default classe .InputError
        expect(item.hasClass('InputError')).toEqual(true);
    });

    it('should render an InputError with specified text', () => {
        const item = shallow(<InputError text={testText} />);

        expect(item.text()).toEqual(testText);
    });
});
