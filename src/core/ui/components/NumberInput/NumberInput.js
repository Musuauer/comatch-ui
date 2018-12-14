import React from 'react';
import classNames from 'classnames';

import { TextInput } from '../TextInput';

import './NumberInput.scss';

/* eslint-disable react/prop-types */
export const NumberInput = ({ type, hideArrows, ...props }) => (
    <TextInput type="number" className={classNames('NumberInput', { 'hide-arrows': hideArrows })} {...props} />
);
