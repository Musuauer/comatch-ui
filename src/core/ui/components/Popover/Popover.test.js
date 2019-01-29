import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import '../../../config/tests/setup';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import { Popover } from './index';


describe('Popover', () => {
    it('should render correctly', () => {
        const popover = renderer.create(<Popover />).toJSON();
        expect(popover).toMatchSnapshot();
    });

    it('should have the correct default props', () => {
        const popover = mount(< Popover />);
        expect(popover.prop('children')).toEqual([]);
        expect(popover.prop('toggle')).toEqual(null);
        expect(popover.prop('open')).toEqual(null);
    });

    it('should have the correct passed props', () => {
        const popover = mount(< Popover position='left' />);
        expect(popover.prop('position')).toEqual('left');
    });

    describe('mouse events', () => {
        it('should not fire handleMouseEnter() & handleMouseLeave() if controlledByExternalState is true', () => {
            const popover = mount(<Popover open={!null}>Ala</Popover>);
            const section = popover.find('section');
            const spyMouseEnter = jest.spyOn(popover.instance(), 'handleMouseEnter');
            const spyMouseLeave = jest.spyOn(popover.instance(), 'handleMouseLeave');

            popover.instance().forceUpdate();
            section.simulate('mouseEnter', spyMouseEnter);
            expect(spyMouseEnter).not.toHaveBeenCalled();

            section.simulate('mouseLeave', spyMouseLeave);
            expect(spyMouseLeave).not.toHaveBeenCalled();
        });

        it('should fire handleMouseEnter() & handleMouseLeave() if controlledByExternalState is false', () => {
            const popover = mount(< Popover open={null} />);
            const section = popover.find('section');

            section.simulate('mouseEnter');
            expect(popover.state('open')).toBe(true);
            expect(popover.state('renderContent')).toBe(true);
            expect(popover.find('div').props()['aria-hidden']).toEqual(false);

            section.simulate('mouseLeave');
            expect(popover.state('open')).toBe(false);
        });

        it('should fire handleTransitionEnd() on simulating onTransitionEnd and hide the popover', () => {
            const popover = mount(< Popover />);
            const section = popover.find('section');
            const spyTransitionEnd = jest.spyOn(popover.instance(), 'handleTransitionEnd')
            popover.instance().forceUpdate();

            section.simulate('transitionEnd');
            expect(spyTransitionEnd).toHaveBeenCalled();
            expect(popover.find('div').props()['aria-hidden']).toEqual(true);
        });
    })

    describe('should render the correct classes', () => {
        it('should have a position class', () => {
            const popover = renderer.create(<Popover position='left' />).toJSON();
            expect(popover).toMatchSnapshot();
        });

        it('should have an open class when open is true', () => {
            const popover = renderer.create(<Popover open />).toJSON();
            expect(popover).toMatchSnapshot();
        });
    });

    describe('should render correct content', () => {
        it('should render faQuestionCircle icon if no toggle is passed', () => {
            const popover = mount(< Popover toggle={null} />);
            const icon = popover.find('FontAwesomeIcon');

            expect(icon.prop('icon')).toEqual(faQuestionCircle);
        });

        it('should render a toggle if provided by props', () => {
            const customToggle = <button icon='customIcon'>Hover me</button>;
            const popover = mount(<Popover toggle={customToggle} />);
            const button = popover.find('button');

            expect(button.prop('icon')).toEqual('customIcon');
            expect(button.text()).toEqual('Hover me');
        });
    });
});

