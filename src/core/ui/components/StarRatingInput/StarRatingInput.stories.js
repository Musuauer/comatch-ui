import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StarRatingInput } from './StarRatingInput';

const handleChange = (event) => action('changed')(event.target.name, event.target.value);

storiesOf('StarRatingInput', module)
    .add('as input without value', () => (
        <>
            <StarRatingInput name="star" />
            <Highlight className="html">{`<StarRatingInput name="star" />`}</Highlight>
        </>
    ))
    .add('as input with value', () => (
        <>
            <StarRatingInput name="star" value={3} />
            <Highlight className="html">{`<StarRatingInput name="star" value={3} />`}</Highlight>
        </>
    ))
    .add('as input with value with onChange', () => (
        <>
            <StarRatingInput name="star" value={4} onChange={handleChange} />
            <Highlight className="html">
                {`<StarRatingInput name="star" value={4} onChange={handleChange} />`}
            </Highlight>
        </>
    ))
    .add('readonly without value', () => (
        <>
            <StarRatingInput name="star" readOnly />
            <Highlight className="html">{`<StarRatingInput name="star" readOnly />`}</Highlight>
        </>
    ))
    .add('readonly with value', () => (
        <>
            <StarRatingInput name="star" value={3} readOnly />
            <Highlight className="html">{`<StarRatingInput name="star" value={3} readOnly />`}</Highlight>
        </>
    ))
    .add('readonly with value with onChange', () => (
        <>
            <StarRatingInput name="star" value={4} onChange={handleChange} readOnly />
            <Highlight className="html">
                {'<StarRatingInput name="star" value={4} onChange={handleChange} readOnly />'}
            </Highlight>
        </>
    ))
    .add('readonly with value and half stars', () => (
        <>
            <div>
                <StarRatingInput name="star" value={0.2} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={0.4} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={1.1} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={1.4} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={1.8} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={2.1} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={2.4} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={2.8} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={3.1} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={3.4} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={3.8} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={4.1} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={4.4} readOnly halfStars />
                <br />
                <StarRatingInput name="star" value={4.8} readOnly halfStars />
            </div>
            <Highlight className="html">
                {'<div>' +
                    `\n\t<StarRatingInput name="star" value={0.2} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={0.4} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={1.1} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={1.4} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={1.8} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={2.1} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={2.4} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={2.8} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={3.1} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={3.4} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={3.8} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={4.1} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={4.4} readOnly halfStars />` +
                    `\n\t<br />` +
                    `\n\t<StarRatingInput name="star" value={4.8} readOnly halfStars />` +
                    `\n</div>`}
            </Highlight>
        </>
    ));
