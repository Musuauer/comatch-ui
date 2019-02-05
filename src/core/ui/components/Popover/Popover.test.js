import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import '../../../config/tests/setup';

import { Popover } from './index';


describe('Popover', () => {
    it('should render correctly', () => {
        const popover = renderer.create(<Popover />).toJSON();
        expect(popover).toMatchSnapshot();
    });

    it('should have the correct default props', () => {
        const popover = mount(<Popover />);
        expect(popover.prop('children')).toEqual([]);
        expect(popover.prop('toggle')).toEqual(null);
        expect(popover.prop('open')).toEqual(null);
    });

    describe('passed props', () => {
        describe('custom toggel', () => {
            it('should render correctly', () => {
                const customToggle = <button icon='customIcon'>Hover me</button>;
                const popover = mount(<Popover toggle={customToggle} />);
                const button = popover.find('button');

                expect(button.prop('icon')).toEqual('customIcon');
                expect(button.text()).toEqual('Hover me');
            });
        });

        describe('position', () => {
            it('should render properly', () => {
                const popover = mount(<Popover position='left' />);
                expect(popover.prop('position')).toEqual('left');
            });
        });
    });

    describe('mouse events', () => {
        describe('controlledByExternalState true', () => {
            it('should not fire handleMouseEnter() & handleMouseLeave()', () => {
                const popover = mount(<Popover open={!null}>Ala</Popover>);
                const section = popover.find('section');
                const spyMouseEnter = jest.spyOn(popover.instance(), 'handleMouseEnter');
                const spyMouseLeave = jest.spyOn(popover.instance(), 'handleMouseLeave');

                section.simulate('mouseEnter', spyMouseEnter);
                expect(spyMouseEnter).not.toHaveBeenCalled();

                section.simulate('mouseLeave', spyMouseLeave);
                expect(spyMouseLeave).not.toHaveBeenCalled();
            });
        });

        describe('controlledByExternalState false', () => {
            let popover;
            let section;
            beforeEach(() => {
                popover = mount(<Popover open={null} />);
                section = popover.find('section');
            });

            it('should fire handleMouseEnter(), handleMouseLeave() & handleTransitionEnd()', () => {
                const spyMouseEnter = jest.spyOn(popover.instance(), 'handleMouseEnter');
                const spyMouseLeave = jest.spyOn(popover.instance(), 'handleMouseLeave');
                const spyTransitionEnd = jest.spyOn(popover.instance(), 'handleTransitionEnd')
                popover.instance().forceUpdate();

                section.simulate('mouseEnter', spyMouseEnter);
                expect(spyMouseEnter).toHaveBeenCalled();

                section.simulate('mouseLeave', spyMouseLeave);
                expect(spyMouseLeave).toHaveBeenCalled();

                section.simulate('transitionEnd');
                expect(spyTransitionEnd).toHaveBeenCalled();
            });

            it('should set open and renderContent to true on mouseEnter', () => {
                section.simulate('mouseEnter');
                expect(popover.state('open')).toBe(true);
                expect(popover.state('renderContent')).toBe(true);
            });

            it('should set open and renderContent to false on mouseLeave', () => {
                section.simulate('mouseLeave');
                expect(popover.state('open')).toBe(false);
                expect(popover.state('renderContent')).toBe(false);
            });

            it('should set open and renderContent to false on mouseLeave', () => {
                section.simulate('mouseLeave');
                expect(popover.state('open')).toBe(false);
                expect(popover.state('renderContent')).toBe(false);
            });
        });
    });
});

