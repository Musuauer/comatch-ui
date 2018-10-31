/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Popover } from './Popover';

const PopoverWrapper = ({ position, toggle }) => {
    const styles = {
        display: 'flex',
        height: '500px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <div style={styles}>
            <Popover toggle={toggle} position={position}>
                Hello world I am a popover with a lot of dynamic content
            </Popover>
        </div>
    );
};

const customToggle = <button>Hover me</button>;

storiesOf('Popover', module)
    .add('positioned on the right', () => <PopoverWrapper position="right" />)
    .add('positioned on the right with custom toggle', () => <PopoverWrapper toggle={customToggle} position="right" />)
    .add('positioned on the left', () => <PopoverWrapper position="left" />)
    .add('positioned on the left with custom toggle', () => <PopoverWrapper toggle={customToggle} position="left" />)
    .add('positioned on the bottom', () => <PopoverWrapper position="bottom" />)
    .add('positioned on the bottom with custom toggle', () => (
        <PopoverWrapper toggle={customToggle} position="bottom" />
    ))
    .add('positioned on the top', () => <PopoverWrapper position="top" />)
    .add('positioned on the top with custom toggle', () => (
        <PopoverWrapper toggle={customToggle} position="top" />
    ));
