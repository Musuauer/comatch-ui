import React, { Component } from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';
import { Flyout } from './Flyout';

const LoremText = () => (
    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et accumsan libero, ac varius turpis. Quisque
        euismod, dolor sed finibus sollicitudin, lorem risus pulvinar neque, quis ultrices sapien elit nec odio. Morbi
        elementum purus sapien, at aliquam tortor volutpat ut. Sed nisl massa, dapibus at suscipit et, sollicitudin
        vitae orci. Vestibulum faucibus lacus vitae urna porta, quis efficitur massa semper. Duis feugiat blandit ligula
        nec sodales. Sed ultricies vitae nunc eu tempus. Sed vitae accumsan ipsum. Nunc eu pulvinar lacus. Ut ac
        tincidunt arcu. Aliquam varius congue mi in placerat. Vestibulum quam quam, malesuada a ipsum et, dictum
        scelerisque ante. Donec lobortis nibh eget iaculis vehicula. Ut ornare interdum lobortis.
    </div>
);

class FlyoutWrapper extends Component {
    render() {
        return (
            <Flyout
                ref={(ref) => {
                    this.flyout = ref;
                }}
            >
                <LoremText />
                <Button onClick={() => this.flyout.close()} text="Close" />
            </Flyout>
        );
    }
}

storiesOf('Flyout', module)
    .add('show flyout on page', () => (
        <>
            <Flyout>
                <LoremText />
            </Flyout>
            <Highlight className="html">{'<Flyout> <div>Lorem ipsum...</div> </Flyout>'}</Highlight>
        </>
    ))
    .add('close with button placed in the flyout', () => (
        <>
            <FlyoutWrapper />
            <Highlight className="html">
                {'<Flyout ref={(ref) => { this.flyout = ref;}}> <div>Lorem ipsum...</div> ' +
                    '<Button onClick={() => this.flyout.close()} text="Close" /> </Flyout>'}
            </Highlight>
        </>
    ));
