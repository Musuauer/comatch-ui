import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SIZES, TYPES } from './config';
import { StyledWrapper } from './StyledWrapper';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    size: PropTypes.oneOf(Object.values(SIZES)),
    type: PropTypes.oneOf(Object.values(TYPES)),
};

const defaultProps = {
    children: null,
    className: null,
    id: null,
    size: null,
    type: null,
};

const Pill = ({ children, className, id, size, type }) => !!children && (
    <StyledWrapper
        className={classnames('Pill', className)}
        {...(id && { id })}
        size={size}
        type={type}
    >
        {children}
    </StyledWrapper>
);

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export { Pill };
