import React from 'react';
import PropTypes from 'prop-types';

import './InputError.scss';

const propTypes = {
    /**
     * Text content of `InputError`
     */
    text: PropTypes.string.isRequired,
};

const defaultProps = {};

/**
 * An error indicator next to inputs for client side validation errors on form submissions.
 */

export const InputError = ({ text }) => (
    <span className="InputError">{text}</span>
);

InputError.defaultProps = defaultProps;

InputError.propTypes = propTypes;
