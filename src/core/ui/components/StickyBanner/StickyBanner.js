import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './StickyBanner.scss';

/**
 * A banner that appear on the top of the browser's window the follows the user as they scroll down.
 */

export class StickyBanner extends Component {
    static propTypes = {
        /**
         * Value in pixels. If defined determines at which distance
         * from the document's top the `StickyBanner` will become visible.
         */
        scrollTopVisibilityThreshold: PropTypes.number,
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
        /**
         * Additional class names
         */
        className: PropTypes.string,
    };

    static defaultProps = {
        scrollTopVisibilityThreshold: null,
        children: null,
        className: null,
    };

    state = {
        isShown: false,
    };

    componentDidMount() {
        const { scrollTopVisibilityThreshold } = this.props;

        if (scrollTopVisibilityThreshold) {
            // If scrollTopVisibilityThreshold is defined, then we must attach an event
            // handler on document to monitor when to hide/show the sticky bar.
            const htmlEl = document.querySelector('html');
            this.documentScrollListener = () => {
                const { isShown } = this.state;
                if (htmlEl.scrollTop >= scrollTopVisibilityThreshold && !isShown) {
                    this.setState({ isShown: true });
                } else if (htmlEl.scrollTop < scrollTopVisibilityThreshold && isShown) {
                    this.setState({ isShown: false });
                }
            };
            document.addEventListener('scroll', this.documentScrollListener);
        }
    }

    componentWillUnmount() {
        const { scrollTopVisibilityThreshold } = this.props;

        if (scrollTopVisibilityThreshold && this.documentScrollListener) {
            // remove event listener and clean up
            document.removeEventListener('scroll', this.documentScrollListener);
            this.documentScrollListener = null;
        }
    }

    render() {
        const { scrollTopVisibilityThreshold, children, className } = this.props;

        const classes = classNames('StickyBanner', className, {
            animated: scrollTopVisibilityThreshold,
            shown: scrollTopVisibilityThreshold && this.state.isShown,
        });
        return (
            <section className={classes}>
                <div className="StickyBanner__content">{children}</div>
            </section>
        );
    }
}
