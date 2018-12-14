import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioInput } from './RadioInput';

storiesOf('RadioInput', module)
    .add('unchecked with label', () => <RadioInput name="fruit" label="Label" />)
    .add('checked with label', () => <RadioInput name="fruit" label="Label" checked />);
