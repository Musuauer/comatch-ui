import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons/faStar';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStarHalf as faStarRegularHalf } from '@fortawesome/free-regular-svg-icons/faStarHalf';
import { faStarHalf as faStarSolidHalf } from '@fortawesome/free-solid-svg-icons/faStarHalf';
import classNames from 'classnames';
import noop from 'lodash/noop';

import './StarRatingInput.scss';

export class StarRatingInput extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        halfStars: PropTypes.bool,
        readOnly: PropTypes.bool,
        value: PropTypes.number,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        halfStars: false,
        readOnly: false,
        value: 0,
        onChange: noop,
    };

    state = {
        hoveredValue: null,
    };

    handleChange = (event) => {
        event.persist();
        this.props.onChange({
            ...event,
            target: {
                ...event.target,
                name: this.props.name,
                value: Number(event.target.value),
            },
        });
    };

    renderStarIcon(ratingIndex, hoveredValue, value) {
        const hoveredValueIsGreater = hoveredValue && hoveredValue >= ratingIndex;
        const valueIsGreater = !hoveredValue && value && value >= ratingIndex;

        const starIsFull = hoveredValueIsGreater || valueIsGreater;

        const icon = starIsFull ? faStarSolid : faStarRegular;

        const classes = classNames('StarRatingInput__icon', { full: starIsFull });

        return <FontAwesomeIcon className={classes} icon={icon} />;
    }

    renderStarIconWithHalfStars(ratingIndex, hoveredValue, value) {
        const roundedValue = Math.round(value * 2) / 2; // round int to nearest .5
        const leftHalfValueIsGreater = roundedValue > ratingIndex - 1;
        const rightHalfValueIsGreater = roundedValue > ratingIndex - 0.5;

        const leftHalfIsFull = leftHalfValueIsGreater;
        const rightHalfIsFull = rightHalfValueIsGreater;

        const leftHalfIcon = leftHalfIsFull ? faStarSolidHalf : faStarRegularHalf;
        const rightHalfIcon = rightHalfIsFull ? faStarSolidHalf : faStarRegularHalf;

        const classesLeftHalf = classNames('StarRatingInput__half-icon', { full: leftHalfIsFull });
        const classesRightHalf = classNames('StarRatingInput__half-icon', {
            full: rightHalfIsFull,
        });

        return (
            <span className="StarRatingInput__half-stars-container">
                <FontAwesomeIcon className={classesLeftHalf} icon={leftHalfIcon} />
                <FontAwesomeIcon className={classesRightHalf} icon={rightHalfIcon} />
            </span>
        );
    }

    handleMouseEnter = (ratingIndex) => {
        this.setState({ hoveredValue: ratingIndex });
    };

    handleMouseLeave = () => {
        this.setState({ hoveredValue: null });
    };

    render() {
        const { halfStars, name, value, readOnly } = this.props;
        const { hoveredValue } = this.state;

        const classes = classNames('StarRatingInput', { 'read-only': readOnly });

        return (
            <div className={classes} data-value={value}>
                {[1, 2, 3, 4, 5].map((ratingIndex) => (
                    <label
                        key={ratingIndex}
                        onMouseEnter={readOnly ? null : this.handleMouseEnter.bind(null, ratingIndex)}
                        onMouseLeave={readOnly ? null : this.handleMouseLeave}
                    >
                        <input
                            name={name}
                            type="radio"
                            value={ratingIndex}
                            onChange={readOnly ? null : this.handleChange}
                            readOnly={this.readOnly}
                        />
                        {halfStars
                            ? this.renderStarIconWithHalfStars(ratingIndex, hoveredValue, value)
                            : this.renderStarIcon(ratingIndex, hoveredValue, value)}
                    </label>
                ))}
            </div>
        );
    }
}
