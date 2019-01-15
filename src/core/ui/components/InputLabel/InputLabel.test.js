import React from 'react';
import renderer from 'react-test-renderer';
import { lorem } from 'faker';

import { InputLabel } from './InputLabel';

describe('InputLabel', () => {
    const text = 'A very random text';
    it('should render correctly', () => {
        const inputLabel = renderer.create(<InputLabel  text={text} />).toJSON();
        expect(inputLabel).toMatchSnapshot();
    });
});