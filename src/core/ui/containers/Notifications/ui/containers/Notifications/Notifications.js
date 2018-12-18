import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isNull from 'lodash/isNull';
import { connect } from 'react-redux';
import { clearNotification } from '../../../redux/actions';
import { Alert } from '../../../../../components/Alert';

import './Notifications.scss';

class NotificationsComponent extends Component {
    static propTypes = {
        /**
         * Action that reset the `Notification` container
         */
        clearNotification: PropTypes.func.isRequired,
        /**
         * The currently shown notification, with type, message, timeout
         */
        notifications: PropTypes.shape({
            /**
             * Notification type can be 'danger', 'info', 'success', 'warning'
             */
            type: PropTypes.string,
            /**
             * Message to be displayed in the `Notifications` component
             */
            message: PropTypes.string,
            /**
             * Defined in ms. When expired it the `Notifications` component will slide out
             */
            timeout: PropTypes.number,
        }).isRequired,
    };

    static defaultProps = {
        notifications: {
            type: 'info',
            message: null,
            props: null,
            timeout: null,
        },
    };

    state = {
        isShown: false,
    };

    componentDidUpdate(prevProps, prevState) {
        const { message, timeout } = this.props.notifications;
        const { isShown } = this.state;

        const thereIsAMessage = message && message.length > 0;
        const thereIsATimer = !isNull(this.timerId);
        const statesAreEqual = isShown === prevState.isShown;

        if (thereIsAMessage && statesAreEqual) {
            // State equality is checked to make sure all changes are based on props
            if (!isShown) {
                this.setState({ isShown: true }, () => {
                    this.timerId = setTimeout(() => {
                        this.setState({ isShown: false });
                    }, timeout);
                });
            } else if (isShown && thereIsATimer) {
                // reset timeout
                clearTimeout(this.timerId);
                this.timerId = setTimeout(() => {
                    this.setState({ isShown: false });
                }, timeout);
            }
        }
    }

    componentWillUnmount() {
        this.props.clearNotification();
        clearInterval(this.timerId);
    }

    handleTransitionEnd = () => {
        if (!this.state.isShown) {
            this.props.clearNotification();
        }
    };

    render() {
        const { isShown } = this.state;
        const { message, type } = this.props.notifications;
        const classes = classNames('Notifications', { shown: isShown });
        return (
            <section onTransitionEnd={this.handleTransitionEnd} className={classes} id="Notifications">
                <Alert display="notification" message={message} type={type} />
            </section>
        );
    }
}

function mapStateToProps({ notifications }) {
    return { notifications };
}

const mapDispatchToProps = { clearNotification };

/**
 * The `Notifications` container renders a notification box on the top right of the screen,
 * with `position: fixed`. It can have the same states as an `Alert` component (danger, success,warning, info).
 *
 * It displays important success messages, such as the correct submission of a form or errors such as
 * an unresolved call to your API.
 */

export const Notifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotificationsComponent);
