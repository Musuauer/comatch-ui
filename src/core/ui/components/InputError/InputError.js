import React from 'react';
import PropTypes from 'prop-types';

import './InputError.scss';

const propTypes = {
    text: PropTypes.string.isRequired,
};

const defaultProps = {};

export const InputError = ({ text }) => (
    <span className="InputError">{text}</span>
);

InputError.defaultProps = defaultProps;

InputError.propTypes = propTypes;
