/* eslint-disable import/no-unresolved */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThumbnailImage } from './ThumbnailImage';
import { comatchLogoBase64 } from '../Spinner/images/comatchLogoBase64';

storiesOf('ThumbnailImage', module)
    .add('with profile image placeholder', () => <ThumbnailImage alt="picture" />)
    .add('with no src and no placeholder', () => (
        <ThumbnailImage placeholder="" alt="picture" />
    ))
    .add('with src defined', () => <ThumbnailImage src={comatchLogoBase64} alt="picture" />);
