/* eslint-disable */
import React from 'react';
import Highlight from 'react-highlight';
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
    .add('positioned on the right', () => (
        <>
            <PopoverWrapper position="right" />
            <Highlight className="html">{`<Popover position="right" />`}</Highlight>
        </>
    ))
    .add('positioned on the right with custom toggle', () => (
        <>
            <PopoverWrapper toggle={customToggle} position="right" />
            <Highlight className="html">{`<Popover position="right" toggle={<button>Hover me</button>} />`}</Highlight>
        </>
    ))
    .add('positioned on the left', () => (
        <>
            <PopoverWrapper position="left" />
            <Highlight className="html">{`<Popover position="left" />`}</Highlight>
        </>
    ))
    .add('positioned on the left with custom toggle', () => (
        <>
            <PopoverWrapper toggle={customToggle} position="left" />
            <Highlight className="html">{`<Popover position="left" toggle={<button>Hover me</button>} />`}</Highlight>
        </>
    ))
    .add('positioned on the bottom', () => (
        <>
            <PopoverWrapper position="bottom" />
            <Highlight className="html">{`<Popover position="bottom" />`}</Highlight>
        </>
    ))
    .add('positioned on the bottom with custom toggle', () => (
        <>
            <PopoverWrapper toggle={customToggle} position="bottom" />
            <Highlight className="html">{`<Popover position="bottom" toggle={<button>Hover me</button>} />`}</Highlight>
        </>
    ))
    .add('positioned on the top', () => (
        <>
            <PopoverWrapper position="top" />
            <Highlight className="html">{`<Popover position="top" />`}</Highlight>
        </>
    ))
    .add('positioned on the top with custom toggle', () => (
        <>
            <PopoverWrapper toggle={customToggle} position="top" />
            <Highlight className="html">{`<Popover position="top" toggle={<button>Hover me</button>} />`}</Highlight>
        </>
    ));
