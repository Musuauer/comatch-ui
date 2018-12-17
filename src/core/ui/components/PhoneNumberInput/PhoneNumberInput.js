import React from 'react';
import { TextInput } from '../TextInput';

/* eslint-disable react/prop-types */
export const PhoneNumberInput = ({ type, ...props }) => <TextInput type="tel" {...props} />;
