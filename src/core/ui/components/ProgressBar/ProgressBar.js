import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { InputLabel } from '../InputLabel';
import { StyledWrapper } from './StyledWrapper';

const propTypes = {
    displayProgressLabel: PropTypes.bool,
    greyBackground: PropTypes.bool,
    progress(props, propName) {
        const value = props[propName];
        if ((!value && value !== 0) || value < 0 || value > 100) {
            return new Error('StepProgressBar requires progress prop as number between 0 and 100');
        }
        return false;
    },
    /** Label/title of the progress bar */
    label: PropTypes.string,
    /** Position of the label/title of the progress bar */
    labelPosition: PropTypes.oneOf(['right', 'left']),
    /** Lighter colouring of the progress bar and it's labels */
    lightVersion: PropTypes.bool.isRequired,
    progressiveColoring: PropTypes.bool,
    progressLabel: PropTypes.string,
    /** Progress bar from left to right */
    reverse: PropTypes.bool,
    secondaryColor: PropTypes.bool,
};

const defaultProps = {
    displayProgressLabel: true,
    greyBackground: false,
    label: '',
    labelPosition: 'right',
    lightVersion: false,
    progressiveColoring: false,
    progressLabel: '',
    reverse: false,
    secondaryColor: false,
};

function renderProgressLabel(displayProgressLabel, progressLabel, progress) {
    if (displayProgressLabel) {
        return progressLabel.length > 0 ? progressLabel : `${progress}%`;
    }

    return null;
}

export const ProgressBar = ({
    displayProgressLabel,
    greyBackground,
    label,
    labelPosition,
    lightVersion,
    progress,
    progressiveColoring,
    progressLabel,
    reverse,
    secondaryColor,
}) => {
    const progressStyle = { transform: `scaleX(${progress / 100})` };

    // per design specs, label is displayed
    // - at the right of the progress limit for progress < 40,
    // - at the left of the progress limit for progress >= 40,
    const progressLabelOnLeft = progress >= 40;

    // styles for progress bar from right to left
    const progressLabelPrimaryStyle = progressLabelOnLeft
        ? { right: `calc(${100 - progress}% + 8px)` }
        : { left: `calc(${progress}% + 8px)` };

    // styles for progress bar from left to right
    const progressLabelReverseStyle = progressLabelOnLeft
        ? { right: `calc(${progress}% - 38px)` }
        : { left: `calc(${100 - progress}% - 38px)` };

    const progressLabelStyle = !reverse ? progressLabelPrimaryStyle : progressLabelReverseStyle;

    const classes = classNames('ProgressBar', {
        'ProgressBar--danger': progressiveColoring && progress <= 39,
        'ProgressBar--warning': progressiveColoring && progress >= 40 && progress <= 74,
        'ProgressBar--secondaryColor': secondaryColor,
        'ProgressBar--greyBackground': greyBackground,
        'ProgressBar--lightVersion': lightVersion,
    });

    const progressClasses = classNames('ProgressBar__progress', {
        full: progress >= 100,
        reverse,
    });

    const labelClasses = classNames('ProgressBar__label', {
        'ProgressBar__label--left': labelPosition === 'left',
        'ProgressBar__label--lightVersion': lightVersion,
    });

    return (
        <StyledWrapper>
            <InputLabel text={label} className={labelClasses} />
            <div className={classes}>
                <div className={progressClasses} style={progressStyle} />
                <div
                    className={`ProgressBar__progress-label ${progressLabelOnLeft &&
                        'ProgressBar__progress-label-left'} ${lightVersion &&
                        'ProgressBar__progress-label-lightVersion'}`}
                    style={progressLabelStyle}
                >
                    {renderProgressLabel(displayProgressLabel, progressLabel, progress)}
                </div>
            </div>
        </StyledWrapper>
    );
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
