import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import classNames from 'classnames';
import { SlideDown } from 'react-slidedown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import 'react-slidedown/lib/slidedown.css';
import './Panel.scss';

/**
 * The `Panel` is a way to organize and present content in the different pages.
 */

export class Panel extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
        /**
         * Additional class names
         */
        className: PropTypes.string,
        /**
         * Some buttons, links or other HTML content to be placed on the right part of the header next to the title.
         */
        controls: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
        /**
         * If true, the `Panel` can expand and collapse its contents. Starts out as collapsed in the first render.
         */
        collapsible: PropTypes.bool,
        /**
         * If true, starts out as expanded in the first render
         */
        expanded: PropTypes.bool,
        disabled: PropTypes.bool,
        /**
         * HTML id attribute
         */
        id: PropTypes.string,
        onClick: PropTypes.func,
        /**
         * Alternative styling
         */
        secondary: PropTypes.bool,
        /**
         * Heading in the header of the `Panel`
         */
        title: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
        titleColor: PropTypes.oneOf(['black', 'gray', 'blue', 'green']),
    };

    static defaultProps = {
        children: null,
        className: null,
        controls: null,
        collapsible: false,
        expanded: false,
        disabled: false,
        id: null,
        onClick: noop,
        secondary: false,
        title: '',
        titleColor: 'black',
    };

    state = {
        expanded: this.props.expanded,
    };

    componentDidUpdate(prevProps) {
        if (this.props.expanded !== prevProps.expanded) {
            this.setState({ expanded: this.props.expanded });
        }
    }

    toggleOpen = () => {
        this.setState((state) => ({ expanded: !state.expanded }));
    };

    handleClick = () => {
        if (this.props.collapsible) {
            this.toggleOpen();
        }
        this.props.onClick();
    };

    renderContents() {
        const { children, collapsible } = this.props;
        const { expanded } = this.state;

        return collapsible ? (
            <SlideDown className="Panel__contents">{expanded ? children : null}</SlideDown>
        ) : (
            <div className="Panel__contents">{children}</div>
        );
    }

    renderHeaderControls() {
        const { controls, collapsible } = this.props;
        const { expanded } = this.state;

        return (
            <div className="Panel__controls">
                {controls}
                {collapsible && (
                    <FontAwesomeIcon className="Panel__chevron" icon={expanded ? faChevronUp : faChevronDown} />
                )}
            </div>
        );
    }

    renderHeader() {
        const { controls, collapsible, title, titleColor } = this.props;
        const titleClasses = classNames('Panel__title', titleColor);

        if (controls !== null || collapsible) {
            return (
                <header className="Panel__header" onClick={this.handleClick}>
                    {this.secondary ? (
                        <h6 className={titleClasses}>{title}</h6>
                    ) : (
                        <h4 className={titleClasses}>{title}</h4>
                    )}
                    {this.renderHeaderControls()}
                </header>
            );
        }
        return (
            title && (
                <header className="Panel__header" onClick={this.handleClick}>
                    {this.secondary ? (
                        <h6 className={titleClasses}>{title}</h6>
                    ) : (
                        <h4 className={titleClasses}>{title}</h4>
                    )}
                </header>
            )
        );
    }

    render() {
        const { children, className, controls, collapsible, disabled, id, secondary } = this.props;
        const { expanded } = this.state;

        const renderContent = disabled === false && children !== null;

        const classes = classNames('Panel', className, {
            collapsible,
            disabled,
            expanded,
            primary: !secondary,
            secondary,
            'without-content': children === null || disabled,
            'with-controls': controls !== null,
        });

        return (
            <section id={id} className={classes}>
                {this.renderHeader()}
                {renderContent && this.renderContents()}
            </section>
        );
    }
}
