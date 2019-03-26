import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isFunction from 'lodash/isFunction';

import { StyledButtonWrapper, StyledContentWrapper, StyledContent, StyledWrapper } from './StyledWrapper';

/*
 * `onTargetClick` triggers only an event if the
 * event comes from its actual target and not from
 * a child. This can be used to prevent events being
 * triggered by childs through event bubbling.
 */
const onTargetClick = (click) => (event) => {
    if (event.target === event.currentTarget) {
        click(event);
    }
};

export class Flyout extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
        className: PropTypes.string,
        delayMs: PropTypes.number,
        isOpen: PropTypes.bool,
        button: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    };

    static defaultProps = {
        className: '',
        delayMs: 250,
        isOpen: false,
        button: 'Flyout',
    };

    state = {
        isOpen: this.props.isOpen,
        fadeout: !this.props.isOpen,
    };

    componentWillUnmount() {
        if (this.timerId) {
            this.clearTimeout();
        }
    }

    clearTimeout = () => {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = undefined;
        }
    };

    delay = (fn, delay) => {
        this.clearTimeout();
        this.timerId = setTimeout(fn, delay);
    };

    open = () => {
        this.setState({ isOpen: true, fadeout: true });
        this.delay(() => this.setState({ isOpen: true, fadeout: false }), 0);
    };

    close = () => {
        this.setState({ isOpen: true, fadeout: true });
        this.delay(() => this.setState({ isOpen: false, fadeout: true }), this.props.delayMs);
    };

    toggleOpen = () => {
        if (this.state.isOpen) {
            this.close();
        } else {
            this.open();
        }
    };

    render() {
        const { toggleOpen } = this;
        const { children, className, button, delayMs } = this.props;
        const { isOpen, fadeout } = this.state;
        const fadeTransition = {
            transition: `opacity ${delayMs}ms ease-in`,
            opacity: fadeout ? 0 : 1,
        };

        return (
            <StyledWrapper open={isOpen} className={classNames('Flyout', className, { 'Flyout--open': isOpen })}>
                {isOpen && (
                    <StyledContentWrapper
                        onClick={onTargetClick(toggleOpen)}
                        className="Flyout__content-wrapper"
                        style={fadeTransition}
                    >
                        <StyledContent className="Flyout__content">{children}</StyledContent>
                    </StyledContentWrapper>
                )}
                <StyledButtonWrapper className="Flyout__button-wrapper" onClick={toggleOpen}>
                    {isFunction(button) ? button() : button}
                </StyledButtonWrapper>
            </StyledWrapper>
        );
    }
}
