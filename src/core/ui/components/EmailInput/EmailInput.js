import React from 'react';
import { TextInput } from '../TextInput';

/* eslint-disable react/prop-types */
export const EmailInput = ({ type, ...props }) => <TextInput type="email" {...props} />;
