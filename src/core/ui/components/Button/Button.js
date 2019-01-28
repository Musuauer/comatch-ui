import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import classNames from 'classnames';

import { StyledWrapper, PopupMenuStyledWrapper } from './StyledWrapper';

const propTypes = {
    /**
     * Additional class names
     */
    className: PropTypes.string,
    disabled: PropTypes.bool,
    /**
     * Alternative styling with white background and primary colored text
     */
    ghost: PropTypes.bool,
    /**
     * If true, uses `<a>` instead of `<button>`
     */
    href: PropTypes.string,
    /**
     * HTML id attribute
     */
    id: PropTypes.string,
    /**
     * SVG icon
     */
    icon: PropTypes.node,
    iconAfterText: PropTypes.bool,
    onClick: PropTypes.func,
    /**
     * To be used with `href`, could set for example `target="_blank"`
     */
    target: PropTypes.string,
    /**
     * Text content of `Button`
     */
    text: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /**
     * A PopupMenu node to be toggled when clicking on the button
     */
    popupMenu: PropTypes.node,
    /**
     * The position of the PopupMenu (if such is present of course)
     */
    popupMenuPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
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
    popupMenu: null,
    popupMenuPosition: 'bottom',
};

/**
 * A `Button` component with different stylistic variations. By default the styling is `full`,
 * but `ghost` is an alternative version with reversed colors.
 *
 * If `href` is set an `<a>` is used instead of `<button>`. If the `target` prop is set to `_blank`
 * in combination with `href`, then it will also add the prop `rel="noopener noreferrer"` for
 * additional security.
 */

export class Button extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showPopupMenu: false,
        };

        this.node = null;
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
    }

    setNodeRef = (node) => {
        this.node = node;
    };

    onTogglePopupMenu = () => this.setState({ showPopupMenu: !this.state.showPopupMenu });

    onClick = (event) => {
        const { onTogglePopupMenu } = this;
        const { disabled, onClick, popupMenu } = this.props;

        if (disabled && event) {
            event.preventDefault();
            return;
        }

        if (popupMenu) {
            onTogglePopupMenu();
        }

        if (onClick) {
            onClick();
        }
    };

    onPopupMenuClick = (event) => {
        if (event) {
            event.stopPropagation();
        }
    };

    handleClickOutside = (event) => {
        if (event && this.node && this.node.contains(event.target)) {
            return;
        }

        this.setState({ showPopupMenu: false });
    };

    render() {
        const { setNodeRef, onClick, onPopupMenuClick } = this;
        const { showPopupMenu } = this.state;
        const {
            id,
            className,
            href,
            target,

            ghost,
            disabled,

            text,
            type,
            icon,
            iconAfterText,

            popupMenu,
            popupMenuPosition,
        } = this.props;

        const styledProps = {
            disabled,
            ghost,
            full: !ghost,
            onlyIcon: !text,
            iconAfterText: text && iconAfterText,

            ...(href && { as: 'a' }),
            ...(!!popupMenuPosition && { popupMenuPosition }),
        };
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

        const calculatedProps = {
            id,
            onClick,
            className: classNames('Button', className, {
                full: !ghost,
                disabled,
                ghost,
                'only-icon': !text,
                'icon-after-text': text && iconAfterText,
            }),

            ...(href
                ? {
                      href,
                      target,
                      rel: target && 'noopener noreferrer',
                  }
                : {
                      type,
                  }),
        };

        return (
            <StyledWrapper ref={setNodeRef} {...styledProps} {...calculatedProps}>
                {content}
                {!!popupMenu && showPopupMenu && (
                    <PopupMenuStyledWrapper onClick={onPopupMenuClick}>{popupMenu}</PopupMenuStyledWrapper>
                )}
            </StyledWrapper>
        );
    }
}

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;
