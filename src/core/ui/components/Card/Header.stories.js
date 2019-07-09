import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';
import { BACKGROUND_COLOR } from './config';

const Collection = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    min-height: 125px;

    .Header {
        margin: 20px;
    }
`;

const BasicContent = styled.div`
    padding: 10px 15px;
`;

storiesOf('Card|Card.Header', module)
    .add('default', () => (
        <>
            <Card.Header />
            <Highlight className="html">{'<Card.Header />'}</Highlight>
        </>
    ))
    .add('with different `backgroundColor`', () => (
        <>
            <Collection>
                {Object.keys(BACKGROUND_COLOR).map((backgroundColor) => (
                    <Card.Header key={backgroundColor} backgroundColor={backgroundColor}>
                        <BasicContent>{backgroundColor}</BasicContent>
                    </Card.Header>
                ))}
            </Collection>
            <Highlight className="html">
                {Object.keys(BACKGROUND_COLOR).map(
                    (backgroundColor, index) =>
                        `${index ? '\n\n' : ''}<Card.Header backgroundColor={${backgroundColor}}>` +
                        `\n\t<BasicContent>{${backgroundColor}}</BasicContent>` +
                        `\n</Card.Header>`,
                )}
            </Highlight>
        </>
    ));
