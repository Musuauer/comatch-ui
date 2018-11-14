import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isNull from 'lodash/isNull';
import { connect } from 'react-redux';
import { clearNotification } from '../../../redux/actions';
import { Alert } from '../../../../../components/Alert';

import './Notifications.scss';

export class NotificationsComponent extends Component {
    static propTypes = {
        clearNotification: PropTypes.func.isRequired,
        notifications: PropTypes.shape({
            type: PropTypes.string,
            message: PropTypes.string,
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

export const Notifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotificationsComponent);
