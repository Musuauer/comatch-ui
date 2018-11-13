import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Badge.scss';

export const allowedColors = ['green', 'orange', 'gray', 'white', 'blue', 'lightblue'];

const propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(allowedColors),
    icon: PropTypes.node,
    size: PropTypes.oneOf(['xs', 'sm']),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

const defaultProps = {
    color: 'white',
    icon: null,
    size: 'sm',
    text: '',
};

export const Badge = ({ className, color, icon, size, text }) => {
    const classes = classNames('Badge', className, color, size);
    return (
        <div className={classes}>
            {icon}
            {text}
        </div>
    );
};

Badge.defaultProps = defaultProps;

Badge.propTypes = propTypes;
