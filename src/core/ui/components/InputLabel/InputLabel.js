import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './InputLabel.scss';

const propTypes = {
    /**
     * Additional class names
     */
    className: PropTypes.string,
    /**
     * HTML for attribute
     */
    htmlFor: PropTypes.string,
    /**
     * HTML id attribute
     */
    id: PropTypes.string,
    required: PropTypes.bool,
    /**
     * If true will use `<span>` instead of `<label>`
     */
    span: PropTypes.bool,
    /**
     * Text content of `Button`
     */
    text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

const defaultProps = {
    className: null,
    htmlFor: null,
    id: null,
    required: false,
    span: false,
};

/**
 * A label element to be used with inputs. By default uses a `<label>` tag,
 * but can also be a `<span>` if the `span` prop is set to true.
 */

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
