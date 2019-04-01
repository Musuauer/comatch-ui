import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { InputLabel } from '../InputLabel';
import './ProgressBar.scss';

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
    label: PropTypes.string,
    progressiveColoring: PropTypes.bool,
    progressLabel: PropTypes.string,
    reverse: PropTypes.bool,
    secondaryColor: PropTypes.bool,
};

const defaultProps = {
    displayProgressLabel: true,
    greyBackground: false,
    label: '',
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
    progress,
    progressiveColoring,
    progressLabel,
    reverse,
    secondaryColor,
}) => {
    const progressStyle = { transform: `scaleX(${progress / 100})` };

    // per design specs, label is displayed
    // - at the right of the progress limit for progress < 80,
    // - at the left of the progress limit for progress >= 80,
    const labelOnLeft = progress >= 40;

    const labelStylePrimary = labelOnLeft
        ? { right: `calc(${100 - progress}% + 8px)` }
        : { left: `calc(${progress}% + 8px)` };

    const labelStyleReverse = labelOnLeft
        ? { right: `calc(${progress}% - 38px)` }
        : { left: `calc(${100 - progress}% - 38px)` };

    const labelStyle = !reverse ? labelStylePrimary : labelStyleReverse;

    const classes = classNames('ProgressBar', {
        'ProgressBar--danger': progressiveColoring && progress <= 39,
        'ProgressBar--warning': progressiveColoring && progress >= 40 && progress <= 74,
        'ProgressBar--secondaryColor': secondaryColor,
        'ProgressBar--greyBackground': greyBackground,
    });

    const progressClasses = classNames('ProgressBar__progress', {
        full: progress >= 100,
        reverse,
    });

    const labelClasses = classNames('ProgressBar__label', {
        'ProgressBar__label--reverse': reverse,
    });

    return (
        <div>
            <InputLabel text={label} className={labelClasses} />
            <div className={classes}>
                <div className={progressClasses} style={progressStyle} />
                <div
                    className={`ProgressBar__progress-label ${labelOnLeft && 'ProgressBar__progress-label-left'}`}
                    style={labelStyle}
                >
                    {renderProgressLabel(displayProgressLabel, progressLabel, progress)}
                </div>
            </div>
        </div>
    );
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
