import React from 'react';
import renderer from 'react-test-renderer';
import { CheckboxGroupInput } from './CheckboxGroupInput';

describe('CheckboxGroupInput', () => {
    it('should render with options correctly', () => {
        const props = {
            name: 'industries',
            options: [{ value: 'notRelevant', label: 'Not relevant' }, { value: 'agriculture', label: 'Agriculture' }],
        };

        const checkboxGroupInput = renderer.create(<CheckboxGroupInput {...props} />).toJSON();
        expect(checkboxGroupInput).toMatchSnapshot();
    });

    it('should render with grouped options correctly', () => {
        const props = {
            name: 'industries',
            options: [
                {
                    title: 'Category A',
                    options: [
                        { value: 'notRelevant', label: 'Not relevant' },
                        { value: 'agriculture', label: 'Agriculture' },
                    ],
                },
                {
                    title: 'Category B',
                    options: [{ value: 'cars', label: 'Cars' }, { value: 'banking', label: 'Banking' }],
                },
            ],
        };

        const checkboxGroupInput = renderer.create(<CheckboxGroupInput {...props} />).toJSON();
        expect(checkboxGroupInput).toMatchSnapshot();
    });

    it('should render with grouped options correctly', () => {
        const props = {
            name: 'industries',
            options: [
                {
                    title: 'Category A',
                    options: [
                        { value: 'notRelevant', label: 'Not relevant' },
                        { value: 'agriculture', label: 'Agriculture' },
                    ],
                },
                {
                    title: 'Category B',
                    options: [{ value: 'cars', label: 'Cars' }, { value: 'banking', label: 'Banking' }],
                },
            ],
        };

        const checkboxGroupInput = renderer.create(<CheckboxGroupInput {...props} />).toJSON();
        expect(checkboxGroupInput).toMatchSnapshot();
    });
});
