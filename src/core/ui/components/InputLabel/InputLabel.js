import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './InputLabel.scss';

const propTypes = {
    className: PropTypes.string,
    htmlFor: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
    span: PropTypes.bool,
    text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

const defaultProps = {
    className: null,
    htmlFor: null,
    id: null,
    required: false,
    span: false,
};

export const InputLabel = ({ className, htmlFor, id, required, span, text }) =>
    span ? (
        <span id={id} className={classNames('InputLabel', className)}>
            {text}
            {required && '*'}
        </span>
    ) : (
        <label id={id} className={classNames('InputLabel', className)} htmlFor={htmlFor}>
            {text}
            {required && '*'}
        </label>
    );

InputLabel.defaultProps = defaultProps;

InputLabel.propTypes = propTypes;
