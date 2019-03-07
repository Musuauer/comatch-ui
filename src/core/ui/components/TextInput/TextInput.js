import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import { InputLabel } from '../InputLabel';
import { InputError } from '../InputError';

import './TextInput.scss';

// TextInput needs to have an implementation as an ES6 class, as opposed
// to a functional component, as it is used also internally by the DateInput.
// The DateInput uses the npm package react-datepicker, which needs to maintain
// an internal ref of the TextInput, thus a class is needed.

/**
 * An input of type `text`.
 */

export class TextInput extends Component {
    static propTypes = {
        autoComplete: PropTypes.oneOf(['on', 'off', null]),
        /**
         * Additional class names
         */
        className: PropTypes.string,
        /**
         * Fallback default for `value`
         */
        defaultValue: PropTypes.string,
        disabled: PropTypes.bool,
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
        /**
         * Used for type="number" to define minimum allowed value
         */
        min: PropTypes.number,
        /**
         * Used for type="number" to define maximum allowed value
         */
        max: PropTypes.number,
        name: PropTypes.string.isRequired,
        onBlur: PropTypes.func,
        onChange: PropTypes.func.isRequired,
        onClick: PropTypes.func,
        onFocus: PropTypes.func,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        type: PropTypes.oneOf(['text', 'tel', 'email', 'number', 'password']),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    static defaultProps = {
        autoComplete: null,
        className: null,
        defaultValue: '',
        disabled: null,
        display: 'block',
        icon: null,
        id: null,
        inputError: '',
        label: '',
        maxLength: null,
        min: null,
        max: null,
        onBlur: noop,
        onClick: noop,
        onFocus: noop,
        placeholder: '',
        required: false,
        type: 'text',
        value: '',
    };

    render() {
        const {
            autoComplete,
            className,
            defaultValue,
            disabled,
            display,
            icon,
            id,
            inputError,
            label,
            maxLength,
            min,
            max,
            name,
            onBlur,
            onChange,
            onClick,
            onFocus,
            placeholder,
            required,
            type,
            value,
        } = this.props;

        const classes = classNames('Input', 'TextInput', className, display, {
            disabled,
            'has-error': inputError,
            'with-icon': icon,
        });

        return (
            <div id={id} className={classes}>
                {label && <InputLabel text={label} required={required} />}
                <input
                    autoComplete={autoComplete}
                    className="TextInput__input"
                    disabled={disabled}
                    maxLength={maxLength}
                    min={min}
                    max={max}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    onClick={onClick}
                    onFocus={onFocus}
                    placeholder={placeholder}
                    type={type}
                    value={isNil(value) ? defaultValue : value}
                />
                {icon}
                {inputError && <InputError text={inputError} />}
            </div>
        );
    }
}
