/* eslint-disable import/no-unresolved */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StickyBanner } from './StickyBanner';

/* eslint-disable react/prop-types */
const Wrapper = ({ scrollTopVisibilityThreshold }) => (
    <div style={{ height: '1500px' }}>
        <StickyBanner scrollTopVisibilityThreshold={scrollTopVisibilityThreshold}>
            hello
        </StickyBanner>
    </div>
);

storiesOf('StickyBanner', module)
    .add('with basic style', () => <Wrapper />)
    .add('becoming visible after scrollTop of HTML from top is 250px', () => (
        <Wrapper scrollTopVisibilityThreshold={250} />
    ));
