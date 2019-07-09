import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';
import { BACKGROUND_COLOR } from './config';

const CardCollection = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    min-height: 125px;

    .Card {
        margin: 20px;
    }
`;

const BasicContent = styled.div`
    padding: 10px 15px;
`;

storiesOf('Card|Card', module)
    .add('default', () => (
        <>
            <Card />
            <Highlight className="html">{'<Card />'}</Highlight>
        </>
    ))
    .add('with different `backgroundColor`', () => (
        <>
            <CardCollection>
                {Object.keys(BACKGROUND_COLOR).map((backgroundColor) => (
                    <Card key={backgroundColor} backgroundColor={backgroundColor}>
                        <BasicContent>{backgroundColor}</BasicContent>
                    </Card>
                ))}
            </CardCollection>
            <Highlight className="html">
                {Object.keys(BACKGROUND_COLOR).map(
                    (backgroundColor, index) =>
                        `${index ? '\n\n' : ''}<Card backgroundColor={${backgroundColor}}>` +
                        `\n\t<BasicContent>{${backgroundColor}}</BasicContent>` +
                        `\n</Card>`,
                )}
            </Highlight>
        </>
    ));
