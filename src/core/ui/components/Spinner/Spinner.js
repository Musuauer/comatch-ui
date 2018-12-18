import React from 'react';
import PropTypes from 'prop-types';
import { comatchLogoBase64 } from './images/comatchLogoBase64';

import './Spinner.scss';

const propTypes = {
    /**
     * Source of the spinner image
     */
    imgSrc: PropTypes.string,
    /**
     * `page` sizing will take up the whole page whereas `panel` is constrained within a `Panel` component
     */
    size: PropTypes.oneOfType([PropTypes.oneOf(['page', 'panel']), PropTypes.number]),
};

const defaultProps = {
    imgSrc: comatchLogoBase64,
    size: 'page',
};

function calculateHeight(size) {
    switch (size) {
        case 'page':
            return 500;
        case 'panel':
            return 200;
        default:
            return size;
    }
}

/**
 * Displays an animated logo (the COMATCH one by default) to be used as a loading indicator.
 * The component will fill its container's width.
 * A size prop is used to set the height (since the container is likely empty, would have no height otherwise)
 * Size prop can be:
 * - `page` (default) sets height to 500px
 * - `panel` sets height to 200px
 * - a positive number: height value in px
 */

export const Spinner = ({ imgSrc, size }) => (
    <div className="Spinner" style={{ height: calculateHeight(size) }}>
        <img src={imgSrc} alt="spinner icon" />
    </div>
);

Spinner.propTypes = propTypes;

Spinner.defaultProps = defaultProps;
