import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Pill } from './Pill';
import { SIZES, TYPES } from './config';

const PillCollection = styled.div`
    .Pill ~ .Pill {
        margin: 10px;
    }
`;

storiesOf('Pill', module)
    .add('empty', () => (
        <>
            <Pill />
            <Highlight className="html">{'<Pill />'}</Highlight>
        </>
    ))
    .add('sizes', () => (
        <>
            <PillCollection>
                <Pill>Hello world</Pill>
                {Object.values(SIZES).map((size) => (
                    <Pill key={size} size={size}>
                        Hello world
                    </Pill>
                ))}
            </PillCollection>
            <Highlight className="html">
                {Object.values(SIZES).reduce(
                    (acc, size) => `${acc}\n<Pill size={PILL_SIZES.${size}}>Hello world</Pill>`,
                    '<Pill>Hello world</Pill>',
                )}
            </Highlight>
        </>
    ))
    .add('types', () => (
        <>
            <PillCollection>
                <Pill>Hello world</Pill>
                {Object.values(TYPES).map((type) => (
                    <Pill key={type} type={type}>
                        Hello world
                    </Pill>
                ))}
            </PillCollection>
            <Highlight className="html">
                {Object.values(TYPES).reduce(
                    (acc, type) => `${acc}\n<Pill type={PILL_TYPES.${type}}>Hello world</Pill>`,
                    '<Pill>Hello world</Pill>',
                )}
            </Highlight>
        </>
    ))
    .add('sizes & types', () => (
        <>
            <PillCollection>
                {[null, ...Object.values(TYPES)].map((type) => (
                    <div key={type}>
                        {[null, ...Object.values(SIZES)].map((size) => (
                            <Pill key={`${type}--${size}`} size={size} type={type}>
                                Hello world
                            </Pill>
                        ))}
                    </div>
                ))}
            </PillCollection>
            <Highlight className="html">
                {[null, ...Object.values(TYPES)].reduce(
                    (acc, type, index) =>
                        `${acc}${index ? '\n' : ''}<div>\n${[null, ...Object.values(SIZES)].reduce(
                            (subAcc, size, subIndex) =>
                                `${subAcc}${subIndex ? '\n' : ''}\t<Pill${size ? ` size={PILL_SIZES.${size}}` : ''}${
                                    type ? ` type={PILL_TYPES.${type}}` : ''
                                }>Hello world</Pill>`,
                            '',
                        )}\n</div>`,
                    '',
                )}
            </Highlight>
        </>
    ));
