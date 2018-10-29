import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import classNames from 'classnames';

import './Button.scss';

const propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    ghost: PropTypes.bool,
    href: PropTypes.string,
    id: PropTypes.string,
    icon: PropTypes.node,
    iconAfterText: PropTypes.bool,
    onClick: PropTypes.func,
    target: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

const defaultProps = {
    className: '',
    disabled: false,
    ghost: false,
    href: '',
    id: null,
    icon: null,
    iconAfterText: false,
    onClick: noop,
    target: null,
    text: '',
    type: 'button',
};

function renderLinkButton(classes, content, disabled, href, id, onClick, target) {
    const finalOnClick = disabled ? (evt) => evt.preventDefault() : onClick;
    const rel = target && 'noopener noreferrer';
    return (
        <a className={classes} href={href} target={target} id={id} rel={rel} onClick={finalOnClick}>
            {content}
        </a>
    );
}

function renderHtmlButton(classes, content, disabled, id, onClick, type) {
    return (
        <button className={classes} id={id} type={type} onClick={onClick} disabled={disabled}>
            {content}
        </button>
    );
}

export const Button = ({
    className,
    disabled,
    ghost,
    href,
    id,
    icon,
    iconAfterText,
    onClick,
    target,
    text,
    type,
}) => {
    const classes = classNames('Button', className, {
        full: !ghost,
        disabled,
        ghost,
        'only-icon': !text,
        'icon-after-text': text && iconAfterText,
    });
    const content = iconAfterText ? (
        <span>
            {text}
            {icon}
        </span>
    ) : (
        <span>
            {icon}
            {text}
        </span>
    );

    return href
        ? renderLinkButton(classes, content, disabled, href, id, onClick, target)
        : renderHtmlButton(classes, content, disabled, id, onClick, type);
};

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;
