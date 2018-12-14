/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import classNames from 'classnames';
import noop from 'lodash/noop';
import { PasswordInput } from './PasswordInput';
import { Popover } from '../Popover/Popover';

import './PasswordInput.stories.scss';

class PasswordInputContainer extends Component {
    static propTypes = {
        showValidationPopover: PropTypes.bool,
    };

    static defaultProps = {
        showValidationPopover: false,
    };

    state = { value: '', showPasswordPopup: false };

    renderPopoverContent = (password) => (
        <ul>
            <li
                className={classNames({
                    valid: password.length >= 7,
                })}
            >
                {'minimum 7 characters'}
            </li>
            <li
                className={classNames({
                    valid: password.search(/[a-zA-Z]/) >= 0 && password.search(/[0-9]/) >= 0,
                })}
            >
                {'at least 1 letter and 1 number'}
            </li>
            <li
                className={classNames({
                    valid: password.search(/[A-Z]/) >= 0,
                })}
            >
                {'minimum 1 capital letter'}
            </li>
        </ul>
    );

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleFocus = () => {
        this.setState({ showPasswordPopup: true });
    };

    handleBlur = () => {
        this.setState({ showPasswordPopup: false });
    };

    renderPasswordInput = (withValidation) => (
        <PasswordInput
            name="field"
            onChange={this.handleChange}
            value={this.state.value}
            onFocus={withValidation ? this.handleFocus : noop}
            onBlur={withValidation ? this.handleBlur : noop}
        />
    );

    render() {
        return (
            <div className="PasswordInputContainer">
                {this.props.showValidationPopover ? (
                    <Popover
                        position="right"
                        toggle={this.renderPasswordInput(true)}
                        open={this.state.showPasswordPopup}
                    >
                        {this.renderPopoverContent(this.state.value)}
                    </Popover>
                ) : (
                    this.renderPasswordInput()
                )}
            </div>
        );
    }
}

storiesOf('PasswordInput', module)
    .add('with basic style', () => <PasswordInputContainer />)
    .add('with password validation popover', () => (
        <PasswordInputContainer showValidationPopover />
    ));
