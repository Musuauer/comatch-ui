import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { castStringToBoolean } from '../../../utils';
import { RadioGroupInput } from '../RadioGroupInput';

const propTypes = {
    disabled: PropTypes.bool,
    display: PropTypes.oneOf(['block', 'inline']),
    id: PropTypes.string,
    inputError: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    falseLabel: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    value: PropTypes.bool,
    trueLabel: PropTypes.string.isRequired,
};

const defaultProps = {
    disabled: false,
    display: 'block',
    id: null,
    inputError: '',
    label: '',
    onChange: noop,
    required: false,
    value: null,
};

export const RadioBooleanInput = ({
    disabled,
    display,
    id,
    inputError,
    label,
    name,
    falseLabel,
    onChange,
    required,
    value,
    trueLabel,
}) => {
    const options = [{ label: trueLabel, value: true }, { label: falseLabel, value: false }];

    function handleChange(event) {
        onChange({ ...event, target: { ...event.target, value: castStringToBoolean(event.target.value) } });
    }

    return (
        <RadioGroupInput
            disabled={disabled}
            display={display}
            id={id}
            inputError={inputError}
            label={label}
            name={name}
            onChange={handleChange}
            options={options}
            required={required}
            value={value}
        />
    );
};

RadioBooleanInput.defaultProps = defaultProps;

RadioBooleanInput.propTypes = propTypes;
