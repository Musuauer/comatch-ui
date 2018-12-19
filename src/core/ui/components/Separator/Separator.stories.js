import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Panel } from '../Panel';
import { Separator } from './Separator';

storiesOf('Separator', module).add('Panel with Separators', () => (
    <>
        <Panel title="Just a panel" secondary>
            Some text here
            <Separator />
            Some more text
        </Panel>
        <Highlight className="html">
            {'<Panel title="Just a panel" secondary>\n' +
                '\tSome text here' +
                '\n\t<Separator />' +
                '\n\tSome more text' +
                '\n</Panel>'}
        </Highlight>
    </>
));
