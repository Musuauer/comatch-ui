import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { SIZES, TYPES } from './config';
import { Pill } from './Pill';
import '../../../config/tests/setup';

describe('Pill', () => {
    it('should render the default Pill correctly', () => {
        const pill = renderer.create(<Pill>Hello World</Pill>).toJSON();
        expect(pill).toMatchSnapshot();
    });

    it('should have the correct default props', () => {
        const pill = mount(<Pill />);
        expect(pill.prop('className')).toEqual(null);
        expect(pill.prop('id')).toEqual(null);
        expect(pill.prop('size')).toEqual(null);
        expect(pill.prop('type')).toEqual(null);
    });

    describe('PILL_SIZES & PILL_TYPES mapping', () => {
        [null, ...Object.values(TYPES)].forEach((type) => {
            [null, ...Object.values(SIZES)].forEach((size) => {
                const pill = mount((
                    <Pill className="Test" id="test" size={size} type={type}>
                        Hello world
                    </Pill>
                ));

                expect(pill.prop('className')).toEqual('Test');
                expect(pill.prop('id')).toEqual('test');
                expect(pill.prop('size')).toEqual(size);
                expect(pill.prop('type')).toEqual(type);
            });
        });        
    });
});
