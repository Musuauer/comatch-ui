import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';

import './TabNavigation.scss';

/**
 * A tab navigation that can appear above a `Panel`.
 *
 * When the tabs are clicked they will usually reveal different parts of the content.
 */

export class TabNavigation extends Component {
    static propTypes = {
        // eslint-disable-next-line valid-jsdoc
        /**
         * Determines which tab should be active
         */
        activeTabIndex: (props, propName, componentName) => {
            const prop = props[propName];
            if (typeof prop !== 'number') {
                return new Error(
                    `Invalid prop \`${propName}\` of type \`${typeof prop}\` supplied to` +
                        ` \`${componentName}\`. Expected number.`,
                );
            }
            if (Array.isArray(props.children) && prop > props.children.length) {
                return new Error(
                    `Invalid prop \`${propName}\` supplied to` +
                        ` \`${componentName}\`. Value of \`${propName}\` ` +
                        `must be less or equal to props.children.length`,
                );
            }
            return false;
        },
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
        /**
         * Updates the state with the active tab before invoking `onTabClick`
         */
        handleTabClick: PropTypes.func,
        onTabClick: PropTypes.func,
    };

    static defaultProps = {
        activeTabIndex: 0,
        children: null,
        handleTabClick: null,
        onTabClick: noop,
    };

    state = {
        activeTabIndex: this.props.activeTabIndex,
    };

    componentDidUpdate(prevProps) {
        if (this.props.activeTabIndex !== prevProps.activeTabIndex) {
            this.setState({ activeTabIndex: this.props.activeTabIndex });
        }
    }

    handleTabClick = (index) => {
        this.setState({ activeTabIndex: index });
        this.props.onTabClick();
    };

    render() {
        const { children } = this.props;
        const { activeTabIndex } = this.state;
        const handleTabClick = this.props.handleTabClick || this.handleTabClick;

        return (
            <nav className="TabNavigation">
                <ul className="TabNavigation__list">
                    {React.Children.map(children, (child, key) => {
                        const classes = classNames('TabNavigation__list-item', {
                            active: activeTabIndex === key,
                        });

                        return (
                            <li className={classes} key={key} onClick={() => handleTabClick(key)}>
                                {child}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}
