import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { profileImagePlaceholderBase64 } from './images/profileImagePlaceholderBase64';

import './ThumbnailImage.scss';

const propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string,
    // A list of predefined placeholder images for the thumbnail, for the time
    // being accounts only for profileImage but might grow in the future
    placeholder: PropTypes.oneOf(['', 'profileImage']),
    skipCdnUrl: PropTypes.bool,
};

const defaultProps = {
    src: '',
    placeholder: 'profileImage',
    skipCdnUrl: false,
};

function getImageSrc(src, placeholder) {
    if (src.length) {
        return src;
    }

    switch (placeholder) {
        // no placeholder
        case '':
            return '';
        // profile image placeholder
        case 'profileImage':
        default:
            return profileImagePlaceholderBase64;
    }
}

export const ThumbnailImage = ({ alt, src, placeholder }) => {
    const classes = classNames('ThumbnailImage', {
        'with-placeholder': !src.length && placeholder.length
    });
    return (
        <div className={classes}>
            <img src={getImageSrc(src, placeholder)} alt={alt} />
        </div>
    );
};

ThumbnailImage.defaultProps = defaultProps;

ThumbnailImage.propTypes = propTypes;
