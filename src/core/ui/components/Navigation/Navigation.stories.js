import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navigation } from './Navigation';

// Can be HTML nodes or plain text
const navigationItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

storiesOf('Navigation', module)
    .add('with horizontal orientation', () => <Navigation orientation="horizontal" items={navigationItems} />)
    .add('with vertical orientation', () => <Navigation orientation="vertical" items={navigationItems} />)
    .add('with responsive orientation and tablet as the breakpoint', () => (
        <Navigation orientation="responsive" breakpoint="tablet" items={navigationItems} />
    ))
    .add('with responsive orientation and desktop as the breakpoint', () => (
        <Navigation orientation="responsive" breakpoint="desktop" items={navigationItems} />
    ))
    .add('with responsive orientation and large desktop as the breakpoint', () => (
        <Navigation orientation="responsive" breakpoint="desktopLarge" items={navigationItems} />
    ));
