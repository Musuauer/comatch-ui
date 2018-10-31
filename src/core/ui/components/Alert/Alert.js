import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faExclamationCircle, faInfoCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import './Alert.scss';

export const ALERT_TYPE = {
    SUCCESS: 'success',
    INFO: 'info',
    DANGER: 'danger',
    WARNING: 'warning',
};

const getIcon = (type) => {
    switch (type) {
        case ALERT_TYPE.SUCCESS:
            return faCheckCircle;
        case ALERT_TYPE.WARNING:
            return faExclamationCircle;
        case ALERT_TYPE.DANGER:
            return faTimesCircle;
        case ALERT_TYPE.INFO:
        default:
            return faInfoCircle;
    }
};

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    displayIcon: PropTypes.bool,
    display: PropTypes.oneOf(['box', 'inline', 'notification']),
    id: PropTypes.string,
    message: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    type: PropTypes.oneOf([ALERT_TYPE.INFO, ALERT_TYPE.DANGER, ALERT_TYPE.SUCCESS, ALERT_TYPE.WARNING]),
};

const defaultProps = {
    className: null,
    children: null,
    displayIcon: true,
    display: 'box',
    id: null,
    message: '',
    type: ALERT_TYPE.INFO,
};

export const Alert = ({ id, className, children, displayIcon, display, message, type }) => (
    <section
        className={classNames('Alert', className, type, display, { 'with-icon': displayIcon })}
        id={id}
        role="alert"
    >
        {displayIcon && <FontAwesomeIcon className="Alert__icon" icon={getIcon(type)} />}
        {message && <p className="Alert__message">{message}</p>}
        {children}
    </section>
);

Alert.defaultProps = defaultProps;

Alert.propTypes = propTypes;
