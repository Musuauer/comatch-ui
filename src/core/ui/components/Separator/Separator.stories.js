import React from 'react';
import { storiesOf } from '@storybook/react';
import { Panel } from '../Panel';
import { Separator } from './Separator';

storiesOf('Separator', module).add('Panel with Separators', () => (
    <Panel title="Just a panel" secondary>
        Some text here
        <Separator />
        Some more text
    </Panel>
));
