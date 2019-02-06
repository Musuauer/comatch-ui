import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import classNames from 'classnames';
import { InputLabel } from '../InputLabel';
import { InputError } from '../InputError';
import { CheckboxInput } from '../CheckboxInput';
import { SectionHeader } from '../SectionHeader';
import { StyledWrapper } from './StyledWrapper';

export class CheckboxGroupInput extends Component {
    static propTypes = {
        checkboxesPerRow: PropTypes.oneOf([1, 2, 3, 4, 5]),
        display: PropTypes.oneOf(['block', 'inline']),
        id: PropTypes.string,
        inputError: PropTypes.string,
        label: PropTypes.string,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        // Options can now have two shapes:
        // 1) [{ value: String, label: String }], which will just render the options
        // 2) [{ title: String, options: [{ value: String, label: String}] }] which group options with headings
        options: PropTypes.oneOfType([
            PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
                    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
                }),
            ),
            PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    options: PropTypes.arrayOf(
                        PropTypes.shape({
                            label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
                            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
                        }),
                    ),
                }),
            ),
        ]).isRequired,
        required: PropTypes.bool,
        value: PropTypes.arrayOf(PropTypes.string),
    };

    static defaultProps = {
        checkboxesPerRow: 1,
        display: 'block',
        id: null,
        inputError: '',
        label: '',
        onChange: noop,
        required: false,
        value: [],
    };

    handleCheckboxChange = (event) => {
        const { name, value: checkboxGroupValues } = this.props;
        const { value: checkboxValue } = event.target;

        this.props.onChange({
            ...event,
            target: {
                ...event.target,
                name,
                // Every time one of the checkboxes is changed then we update the value of the whole group input
                value: !checkboxGroupValues.includes(checkboxValue)
                    ? [...checkboxGroupValues, checkboxValue]
                    : checkboxGroupValues.filter((value) => value !== checkboxValue),
            },
        });
    };

    // Renders options with shape of: [{ value: String, label: String}]
    renderOptions = (options) => {
        const { checkboxesPerRow, display, name, value } = this.props;

        const checkboxesDisplay = checkboxesPerRow > 1 ? 'block' : display;

        return options.map((option, index) => (
            <CheckboxInput
                key={index}
                display={checkboxesDisplay}
                label={option.label}
                name={name}
                onChange={this.handleCheckboxChange}
                value={option.value}
                checked={value.includes(option.value)}
            />
        ));
    };

    // Renders options with shape of: [{ title: String, options: [{ value: String, label: String}] }]
    // Initially renders a small SectionHeader, then calls the base renderOptions function
    renderOptionsWithTitles = (optionsWithTitles) =>
        optionsWithTitles.map(({ title, options }, index) => [
            <SectionHeader key={index} title={title} size="xs" />,
            this.renderOptions(options),
        ]);

    render() {
        const { checkboxesPerRow, display, id, inputError, label, options, required } = this.props;

        const classes = classNames('Input', 'CheckboxGroupInput', `per-row-${checkboxesPerRow}`, {
            inline: display === 'inline',
            'has-error': inputError,
        });

        const hasOptionsWithTitles = options.length && 'title' in options[0];
        const renderOptions = hasOptionsWithTitles ? this.renderOptionsWithTitles : this.renderOptions;

        return (
            <StyledWrapper
                checkboxesPerRow={checkboxesPerRow}
                className={classes}
                display={display}
                hasError={!!inputError}
                id={id}
            >
                {label && <InputLabel text={label} required={required} />}
                {renderOptions(options)}
                {inputError && <InputError text={inputError} />}
            </StyledWrapper>
        );
    }
}
