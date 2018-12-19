/* eslint-disable import/no-unresolved */
import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { ThumbnailImage } from './ThumbnailImage';
import { comatchLogoBase64 } from '../Spinner/images/comatchLogoBase64';

storiesOf('ThumbnailImage', module)
    .add('with profile image placeholder', () => (
        <>
            <ThumbnailImage alt="picture" />
            <Highlight className="html">{`<ThumbnailImage alt="picture" />`}</Highlight>
        </>
    ))
    .add('with no src and no placeholder', () => (
        <>
            <ThumbnailImage placeholder="" alt="picture" />
            <Highlight className="html">{`<ThumbnailImage placeholder="" alt="picture" />`}</Highlight>
        </>
    ))
    .add('with src defined', () => (
        <>
            <ThumbnailImage src={comatchLogoBase64} alt="picture" />
            <Highlight className="html">{`<ThumbnailImage src={comatchLogoBase64} alt="picture" />`}</Highlight>
        </>
    ));
