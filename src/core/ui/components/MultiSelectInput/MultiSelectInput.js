import React from 'react';
import PropTypes from 'prop-types';
import Select2 from 'react-select';
import classNames from 'classnames';
import noop from 'lodash/noop';
import { InputLabel } from '../InputLabel';
import { InputError } from '../InputError';
import { customStyles } from './custom-styles';

import './MultiSelectInput.scss';

const propTypes = {
    /**
     * Additional class names
     */
    className: PropTypes.string,
    display: PropTypes.oneOf(['block', 'inline']),
    disabled: PropTypes.bool,
    /**
     * HTML id attribute
     */
    id: PropTypes.string,
    inputError: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onInputChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        }),
    ).isRequired,
    required: PropTypes.bool,
};

const defaultProps = {
    className: null,
    display: 'block',
    disabled: false,
    id: null,
    inputError: '',
    label: '',
    onBlur: noop,
    onChange: noop,
    onInputChange: noop,
    required: false,
};

/**
 * An input similar to our `Select` input, allowing the user to select multiple options.
 *
 * This component is our customized wrapper around the 'react-select' component.
 * @see https://github.com/JedWatson/react-select
 */

export const MultiSelectInput = ({
    className,
    display,
    disabled,
    id,
    inputError,
    label,
    name,
    onBlur,
    onChange,
    onInputChange,
    options,
    required,
    ...props
}) => {
    const classes = classNames('Input', 'MultiSelectInput', className, display, {
        disabled,
        'has-error': inputError,
    });

    function handleChange(selectedOption) {
        // The 'react-select' by default passes the selected option as an
        // object to the change event. We need to restructure this schema
        // for our MultiSelectInput to conform with our other input components
        onChange({
            target: {
                value: selectedOption,
            },
        });
    }

    function handleInputChange(inputValue, { action }) {
        /**
         * Due to the nature of react-select package,
         * we need to check which type of action was emitted.
         * The only time we should notify the listener for changes
         * is when the input changes. Other types of actions - e.g.
         * blur, close, etc. - shouldn't affect the field's value
         */
        if (action === 'input-change') {
            onInputChange({
                target: {
                    value: inputValue,
                },
            });
        }
    }

    return (
        <div id={id} className={classes}>
            {label && <InputLabel text={label} required={required} />}
            <Select2
                isMulti
                className="MultiSelectInput__input"
                isDisabled={disabled}
                menuPortalTarget={document.body}
                name={name}
                onBlur={onBlur}
                onChange={handleChange}
                onInputChange={handleInputChange}
                options={options}
                styles={customStyles}
                {...props}
            />
            {inputError && <InputError text={inputError} />}
        </div>
    );
};

MultiSelectInput.defaultProps = defaultProps;

MultiSelectInput.propTypes = propTypes;
