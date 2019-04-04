import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select2 from 'react-select';
import classNames from 'classnames';
import noop from 'lodash/noop';
import { InputLabel } from '../InputLabel';
import { InputError } from '../InputError';
import { customStyles } from './custom-styles';

import { StyledWrapper } from './StyledWrapper';

class Autocomplete extends Component {
    static propTypes = {
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
        inputValue: PropTypes.string.isRequired,
        isLoading: PropTypes.bool,
        label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
        loadingMessage: PropTypes.func,
        name: PropTypes.string.isRequired,
        noOptionsMessage: PropTypes.func,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onInputChange: PropTypes.func.isRequired,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
                value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
            }),
        ).isRequired,
        required: PropTypes.bool,
    };

    static defaultProps = {
        className: null,
        display: 'block',
        disabled: false,
        id: null,
        inputError: '',
        isLoading: false,
        label: '',
        loadingMessage: ({ inputValue }) => `Searching for "${inputValue}"...`,
        noOptionsMessage: ({ inputValue }) => `No items found with search term "${inputValue}"...`,
        onBlur: noop,
        onChange: noop,
        required: false,
    };

    handleChange = (selectedOption) => {
        const { onChange, onInputChange } = this.props;

        // The 'react-select' by default passes the selected option as an
        // object to the change event. We need to restructure this schema
        // for our MultiSelectInput to conform with our other input components
        onChange({
            target: {
                value: selectedOption,
            },
        });

        onInputChange({
            target: {
                value: selectedOption.label,
            },
        });
    };

    handleInputChange = (inputValue, { action }) => {
        const { onInputChange } = this.props;

        /**
         * Due to the nature of react-select package,
         * we need to check which type of action was emitted.
         * The only time we should notify the listener for changes
         * is when the input chagnes. Other types of actions - e.g.
         * blur, close, etc. - shouldn't affect the field's value
         */
        if (action === 'input-change') {
            onInputChange({
                target: {
                    value: inputValue,
                },
            });
        }
    };

    get classes() {
        const { className, display, disabled, inputError } = this.props;

        return classNames('Input', 'Autocomplete', className, display, {
            disabled,
            'has-error': inputError,
        });
    }

    get optionsArray() {
        const { options } = this.props;

        return options.length <= 10 ? options : options.filter((option, index) => index < 10);
    }

    get reactSelectAdditionalProps() {
        return Object.keys(this.props).reduce((selectProps, propKey) => {
            const isPropForUnderlyingSelect = !Object.prototype.hasOwnProperty.call(Autocomplete.propTypes, propKey);

            if (isPropForUnderlyingSelect) {
                // eslint-disable-next-line no-param-reassign
                selectProps[propKey] = this.props[propKey];
            }

            return selectProps;
        }, {});
    }

    get styledWrapperProps() {
        const { display, disabled, inputError } = this.props;

        return {
            display,
            disabled,
            hasError: !!inputError,
        };
    }

    render() {
        const {
            classes,
            handleChange,
            handleInputChange,
            optionsArray,
            reactSelectAdditionalProps,
            styledWrapperProps,
        } = this;
        const {
            disabled,
            id,
            inputError,
            inputValue,
            isLoading,
            label,
            loadingMessage,
            name,
            noOptionsMessage,
            onBlur,
            required,
        } = this.props;

        return (
            <StyledWrapper id={id} className={classes} {...styledWrapperProps}>
                {label && <InputLabel text={label} required={required} />}
                <Select2
                    className="Autocomplete__input"
                    closeMenuOnSelect={false}
                    isDisabled={disabled}
                    inputValue={inputValue}
                    isLoading={isLoading}
                    loadingMessage={loadingMessage}
                    name={name}
                    noOptionsMessage={noOptionsMessage}
                    onBlur={onBlur}
                    onChange={handleChange}
                    onInputChange={handleInputChange}
                    options={optionsArray}
                    styles={customStyles}
                    value={{
                        label: inputValue,
                        value: inputValue,
                    }}
                    {...reactSelectAdditionalProps}
                />
                {inputError && <InputError text={inputError} />}
            </StyledWrapper>
        );
    }
}

export { Autocomplete };
