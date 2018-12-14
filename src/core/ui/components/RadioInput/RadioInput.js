import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';
import { InputLabel } from '../InputLabel';
import { InputError } from '../InputError';

import './RadioInput.scss';

const propTypes = {
    checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    disabled: PropTypes.bool,
    display: PropTypes.oneOf(['block', 'inline']),
    id: PropTypes.string,
    inputError: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

const defaultProps = {
    checked: null,
    disabled: false,
    display: 'block',
    id: null,
    inputError: '',
    label: '',
    onChange: noop,
    value: '',
};

export const RadioInput = ({ checked, disabled, display, id, inputError, label, onChange, name, value }) => {
    const classes = classNames('RadioInput', display, { disabled, 'has-error': inputError });

    return (
        <div id={id} className={classes}>
            <label>
                <input
                    type="radio"
                    id={id}
                    name={name}
                    onChange={onChange}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                />
                <div className="RadioInput__input" role="radio" />
                {label && <InputLabel className="RadioInput__label" span={true} text={label} />}
            </label>
            {inputError && <InputError text={inputError} />}
        </div>
    );
};

RadioInput.defaultProps = defaultProps;

RadioInput.propTypes = propTypes;
