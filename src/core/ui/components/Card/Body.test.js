import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Body } from './Body';
import { BACKGROUND_COLOR, ORIENTATION } from './config';
import '../../../config/tests/setup';

describe('Card.Body', () => {
    it('should render the default Body correctly', () => {
        const body = renderer.create(<Body>body</Body>).toJSON();
        expect(body).toMatchSnapshot();
    });

    it('should render a customized Body correctly', () => {
        const body = renderer
            .create(
                <Body
                    backgroundColor={BACKGROUND_COLOR.PRIMARY}
                    className="ABody"
                    id="a-body"
                    orientation={ORIENTATION.HORIZONTAL}
                    wrap
                >
                    <div>some content...</div>
                </Body>,
            )
            .toJSON();
        expect(body).toMatchSnapshot();
    });

    // it('should have the correct default props', () => {
    //     const avatar = mount(<Body />);
    //     expect(avatar.prop('badgeChildren')).toEqual(null);
    //     expect(avatar.prop('className')).toEqual(null);
    //     expect(avatar.prop('diameter')).toEqual(45);
    //     expect(avatar.prop('id')).toEqual(null);
    //     expect(avatar.prop('popoverChildren')).toEqual(null);
    //     expect(avatar.prop('popoverPosition')).toEqual('bottom');
    //     expect(avatar.prop('src')).toEqual(null);
    // });
});
