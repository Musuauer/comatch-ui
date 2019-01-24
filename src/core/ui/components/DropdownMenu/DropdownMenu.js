import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Navigation, ORIENTATION } from '../Navigation';
import { StyledWrapper, ItemStyledWrapper } from './StyledWrapper';

const propTypes = {
    /**
     * id of the container
     */
    id: PropTypes.string,
    /**
     * Additional class names
     */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /**
     * Additional class names to be applied on each item
     */
    itemClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * The menu items
     */
    items: PropTypes.arrayOf(PropTypes.node),
};

const defaultProps = {
    id: null,
    className: null,
    itemClassName: null,

    items: [],
};

export const DropdownMenu = ({ id, className, itemClassName, items }) => (
    <StyledWrapper {...id && { id }} className={classNames(className)}>
        <Navigation
            orientation={ORIENTATION.VERTICAL}
            items={items.map((item, index) => (
                <ItemStyledWrapper key={index} className={classNames(itemClassName)}>
                    {item}
                </ItemStyledWrapper>
            ))}
        />
    </StyledWrapper>
);

DropdownMenu.propTypes = propTypes;

DropdownMenu.defaultProps = defaultProps;
