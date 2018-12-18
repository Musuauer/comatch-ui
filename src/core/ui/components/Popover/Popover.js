import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import noop from 'lodash/noop';

import './Popover.scss';

/**
 * The `Popover` is used as a tooltip to display explanatory text next to inputs or other content.
 */

export class Popover extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
        /**
         * Determines where to position the `Popover` relative to its toggle
         */
        position: PropTypes.oneOf(['left', 'right', 'bottom', 'top']).isRequired,
        /**
         * The React.Node that serves as the toggle that triggers the `Popover` open when hovered
         */
        toggle: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
        /**
         * Makes the `open` state of the `Popover` controllable from the outside
         */
        open: PropTypes.bool,
    };

    static defaultProps = {
        children: [],
        toggle: null,
        open: null,
    };

    state = {
        open: false,
        renderContent: false,
    };

    static getDerivedStateFromProps(props) {
        if (props.open !== null) {
            if (props.open === true) {
                return {
                    open: true,
                    renderContent: true,
                };
            }
            return { open: false };
        }
        return false;
    }

    handleMouseEnter = () =>
        this.setState({
            open: true,
            renderContent: true,
        });

    handleMouseLeave = () => this.setState({ open: false });

    handleTransitionEnd = () => {
        if (!this.state.open) {
            this.setState({
                renderContent: false,
            });
        }
    };

    render() {
        // Check if the component is controlled from the outside or not.
        const controlledByExternalState = this.props.open !== null;

        const { children, position, toggle } = this.props;
        const { open, renderContent } = this.state;
        const classes = classNames('Popover', position, { open });

        return (
            <section
                onMouseEnter={controlledByExternalState ? noop : this.handleMouseEnter}
                onMouseLeave={controlledByExternalState ? noop : this.handleMouseLeave}
                onTransitionEnd={this.handleTransitionEnd}
                className={classes}
            >
                {toggle || <FontAwesomeIcon icon={faQuestionCircle} className="Popover__toggle Popover__icon" />}
                <div aria-hidden={!renderContent} role="tooltip" className="Popover__content">
                    {renderContent ? children : null}
                </div>
            </section>
        );
    }
}
