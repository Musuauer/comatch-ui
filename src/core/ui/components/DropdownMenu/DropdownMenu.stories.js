import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { DropdownMenu } from './DropdownMenu';

// Can be HTML nodes or plain text
const dropdownMenuItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
const dropdownMenuItemsString = `[${dropdownMenuItems.map((item) => `"${item}"`).join(',')}]`;

storiesOf('DropdownMenu', module)
    .add('with an empty list of items', () => (
        <>
            <DropdownMenu />
            <Highlight className="html">{`<DropdownMenu />`}</Highlight>
        </>
    ))
    .add('with basic list of items', () => (
        <>
            <DropdownMenu items={dropdownMenuItems} />
            <Highlight className="html">{`<DropdownMenu items={${dropdownMenuItemsString}} />`}</Highlight>
        </>
    ));
