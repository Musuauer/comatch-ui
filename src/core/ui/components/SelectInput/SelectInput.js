import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';
import { InputLabel } from '../InputLabel';
import { InputError } from '../InputError';

import './SelectInput.scss';

const propTypes = {
    display: PropTypes.oneOf(['block', 'inline']),
    disabled: PropTypes.bool,
    id: PropTypes.string,
    inputError: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        }),
    ).isRequired,
    required: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

const defaultProps = {
    display: 'block',
    disabled: false,
    id: null,
    inputError: '',
    label: '',
    onBlur: noop,
    onChange: noop,
    required: false,
    value: undefined,
};

const renderOptionsElements = (optionElements) =>
    optionElements.map((optionElement, index) => (
        <option key={index + 1} value={optionElement.value}>
            {optionElement.label}
        </option>
    ));

export const SelectInput = ({
    display,
    disabled,
    id,
    inputError,
    label,
    name,
    onBlur,
    onChange,
    options,
    required,
    value,
}) => {
    const classes = classNames('Input', 'SelectInput', display, {
        disabled,
        'has-error': inputError,
    });

    return (
        <div id={id} className={classes}>
            {label && <InputLabel text={label} required={required} />}
            <select
                className="SelectInput__input"
                disabled={disabled}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
            >
                {renderOptionsElements(options)}
            </select>
            {inputError && <InputError text={inputError} />}
        </div>
    );
};

SelectInput.defaultProps = defaultProps;

SelectInput.propTypes = propTypes;
