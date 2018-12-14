import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import get from 'lodash/get';
import classNames from 'classnames';
import { InputLabel } from '../InputLabel'
import { InputError } from '../InputError'
import { RadioInput } from '../RadioInput'

import './RadioGroupInput.scss';

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    display: PropTypes.oneOf(['block', 'inline']),
    id: PropTypes.string,
    inputError: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
        disabled: PropTypes.bool,
        label: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    })).isRequired,
    required: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

const defaultProps = {
    children: null,
    className: null,
    disabled: false,
    display: 'block',
    id: null,
    inputError: '',
    label: '',
    onChange: noop,
    required: false,
    value: null,
};

export const RadioGroupInput = ({
    className,
    children,
    disabled,
    display,
    id,
    inputError,
    label,
    name,
    onChange,
    options,
    required,
    value,
}) => {
    const classes = classNames('Input', 'RadioGroupInput', { inline: display === 'inline' }, className);

    const handleRadioChange = (event) => {
        if (event.target.checked) {
            onChange(event);
        }
    };

    return (
        <div id={id} className={classes}>
            {label && <InputLabel text={label} required={required} />}
            {options.map((option, index) => (
                <RadioInput
                    key={index}
                    display={display}
                    label={option.label}
                    disabled={disabled || option.disabled}
                    name={name}
                    onChange={handleRadioChange}
                    value={option.value}
                    checked={option.value === value}
                />
            ))}
            {React.Children.map(children, (child) => {
                if (child.type === RadioInput) {
                    return React.cloneElement(child, {
                        onChange: handleRadioChange,
                        checked: get(child, 'props.value') === value,
                    });
                }
                return child;
            })}
            {inputError && <InputError text={inputError} />}
        </div>
    );
};

RadioGroupInput.defaultProps = defaultProps;

RadioGroupInput.propTypes = propTypes;
