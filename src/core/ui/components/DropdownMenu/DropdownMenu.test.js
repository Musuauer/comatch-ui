import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import '../../../config/tests/setup';

import classNames from 'classnames';
import { Navigation } from '../Navigation';
import { DropdownMenu } from './DropdownMenu';
import { ItemStyledWrapper } from './StyledWrapper';

describe('DropdownMenu', () => {
    const OPTIONAL_PROPS = {
        id: 'test',
        className: {
            test: true,
            skippedClassName: false,
        },
        itemClassName: 'ItemClassName',
        items: [
            'item 1',
            <span key="item-2" id="item-2">
                item 2
            </span>,
            'item 3',
        ],
    };

    it('should render correctly', () => {
        const dropdownMenu = renderer.create(<DropdownMenu />).toJSON();
        expect(dropdownMenu).toMatchSnapshot();
    });

    it('should render with default props', () => {
        const dropdownMenu = mount(<DropdownMenu />);

        expect(dropdownMenu.prop('id')).toEqual(null);
        expect(dropdownMenu.prop('className')).toEqual(null);
        expect(dropdownMenu.prop('itemClassName')).toEqual(null);
        expect(dropdownMenu.prop('items')).toEqual([]);
    });

    it('should render with custom props', () => {
        const props = { ...OPTIONAL_PROPS };
        const dropdownMenu = mount(<DropdownMenu {...props} />);

        expect(dropdownMenu.prop('id')).toEqual(props.id);
        expect(dropdownMenu.prop('className')).toEqual(props.className);
        expect(dropdownMenu.prop('itemClassName')).toEqual(props.itemClassName);
        expect(dropdownMenu.prop('items')).toEqual(props.items);
    });

    describe('verifying the HTML structure', () => {
        const props = { ...OPTIONAL_PROPS };
        const dropdownMenu = mount(<DropdownMenu {...props} />);

        it('should render a Navigation component', () => {
            expect(dropdownMenu.contains(Navigation)).toBeTruthy();
        });

        it('should render each item from the passed array', () => {
            const dropdownItems = dropdownMenu.find(ItemStyledWrapper);

            expect(dropdownItems).toHaveLength(props.items.length);
            dropdownItems.forEach((node) => {
                expect(node.hasClass(classNames(props.itemClassName))).toBeTruthy();
            });
        });
    });
});
