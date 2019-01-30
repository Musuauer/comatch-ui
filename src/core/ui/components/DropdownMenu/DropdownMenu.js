import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Navigation, ORIENTATION } from '../Navigation';
import { StyledWrapper, ItemStyledWrapper } from './StyledWrapper';

const propTypes = {
    /**
     * Additional class names
     */
    className: PropTypes.string,
    /**
     * id of the container
     */
    id: PropTypes.string,
    /**
     * Additional class names to be applied on each item
     */
    itemClassName: PropTypes.string,
    /**
     * The menu items
     */
    items: PropTypes.arrayOf(PropTypes.node),
};

const defaultProps = {
    className: null,
    id: null,
    itemClassName: null,
    items: [],
};

export const DropdownMenu = ({ className, id, itemClassName, items }) => (
    <StyledWrapper {...id && { id }} className={classNames('DropdownMenu', className)}>
        <Navigation
            orientation={ORIENTATION.VERTICAL}
            items={items.map((item, index) => (
                <ItemStyledWrapper key={index} className={classNames('DropdownMenu__item', itemClassName)}>
                    {item}
                </ItemStyledWrapper>
            ))}
        />
    </StyledWrapper>
);

DropdownMenu.propTypes = propTypes;

DropdownMenu.defaultProps = defaultProps;
