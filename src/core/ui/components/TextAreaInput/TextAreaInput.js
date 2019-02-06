import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';
import { InputLabel } from '../InputLabel';
import { InputError } from '../InputError';

import './TextAreaInput.scss';

const propTypes = {
    /**
     * Additional class names
     */
    className: PropTypes.string,
    display: PropTypes.oneOf(['block', 'inline']),
    /**
     * SVG icon
     */
    icon: PropTypes.node,
    /**
     * HTML id attribute
     */
    id: PropTypes.string,
    inputError: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    maxLength: PropTypes.number,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    htmlPlaceholder: PropTypes.node,
    required: PropTypes.bool,
    rows: PropTypes.number,
    value: PropTypes.string,
};

const defaultProps = {
    className: null,
    display: 'block',
    icon: null,
    id: null,
    inputError: null,
    label: null,
    maxLength: null,
    onFocus: noop,
    onBlur: noop,
    placeholder: '',
    htmlPlaceholder: null,
    required: false,
    rows: 5,
    value: '',
};

/**
 * A `<textarea>` input.
 */

export const TextAreaInput = ({
    className,
    display,
    htmlPlaceholder,
    icon,
    id,
    inputError,
    label,
    maxLength,
    name,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    required,
    rows,
    value,
}) => {
    const classes = classNames('Input', 'TextAreaInput', className, display, {
        'has-error': inputError,
        'with-icon': icon,
        'with-html-placeholder': htmlPlaceholder,
    });

    const showHtmlPlaceholder = htmlPlaceholder && !value;
    return (
        <div id={id} className={classes}>
            {label && <InputLabel text={label} required={required} />}
            <textarea
                className="TextAreaInput__input"
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                maxLength={maxLength}
                rows={rows}
                name={name}
            />
            {icon}
            {inputError && <InputError text={inputError} />}
            {showHtmlPlaceholder && <div className="html-placeholder">{htmlPlaceholder}</div>}
        </div>
    );
};

TextAreaInput.propTypes = propTypes;

TextAreaInput.defaultProps = defaultProps;
