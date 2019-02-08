import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isNull from 'lodash/isNull';
import noop from 'lodash/noop';
import isEqual from 'lodash/isEqual';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons/faCalendarAlt';
import moment from 'moment';
import { TextInput } from '../TextInput';

import './DateInput.scss';

/**
 * A convenience wrapper around the DatePicker component of the react-datepicker package.
 *
 * For a full list of all potential props check:
 * https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md
 */

export class DateInput extends Component {
    static propTypes = {
        /**
         * A string according to which the date in the DateInput is formatted
         */
        dateFormat: PropTypes.string,
        inputError: PropTypes.string,
        label: PropTypes.string,
        /**
         * Needed by the DatePicker
         */
        locale: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onClick: PropTypes.func,
        // eslint-disable-next-line valid-jsdoc
        /**
         * The value must be a moment.js object
         */
        value: (props, propName) => {
            const prop = props[propName];
            // eslint-disable-next-line no-underscore-dangle
            if (prop && !prop._isAMomentObject) {
                return new Error(
                    `Invalid prop \`${propName}\` supplied to` +
                        ` DateInput. Expected a momentjs instance, ` +
                        `but got the value ${prop} of type ${typeof prop}. Validation failed.`,
                );
            }
            return false;
        },
    };

    static defaultProps = {
        dateFormat: 'DD.MM.YYYY',
        inputError: '',
        label: '',
        onClick: noop,
        value: moment(),
    };

    state = {
        date:
            // eslint-disable-next-line no-underscore-dangle
            this.props.value && this.props.value._isAMomentObject && this.props.value.isValid()
                ? this.props.value
                : null,
    };

    static getDerivedStateFromProps(props, state) {
        // `date` state needs to be updated in case the prop is changed outside of the component.
        if (!isEqual(props.value, state.date)) {
            return {
                // eslint-disable-next-line no-underscore-dangle
                date: props.value && props.value._isAMomentObject && props.value.isValid() ? props.value : null,
            };
        }

        return null;
    }

    // Signature of handleChange is like this in this case because of the library we're using
    handleChange = (date, event) => {
        const { name } = this.props;
        const value = isNull(date) ? date : date.toDate();

        // in the state we set directly date, because we want either null or a moment object
        this.setState({ date });

        // in the onChange we pass value which would be either null or a date object
        this.props.onChange({
            ...event,
            target: {
                ...event.target,
                name,
                value,
            },
        });
    };

    render() {
        const { locale, inputError, label, name, onClick, onChange, value, ...props } = this.props;
        const popperClasses = classNames('DateInput__popper', { 'with-error': inputError });

        return (
            <DatePicker
                autoComplete="off"
                customInput={
                    <TextInput
                        label={label}
                        inputError={inputError}
                        icon={<FontAwesomeIcon icon={faCalendarAlt} />}
                        name={name}
                        onChange={noop}
                        onClick={onClick}
                    />
                }
                locale={locale}
                name={name}
                nextMonthButtonLabel=""
                onChange={this.handleChange}
                popperClassName={popperClasses}
                previousMonthButtonLabel=""
                selected={this.state.date}
                utcOffset={0}
                {...props}
            />
        );
    }
}
