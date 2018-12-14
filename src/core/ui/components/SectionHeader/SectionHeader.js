import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './SectionHeader.scss';

const propTypes = {
    addOn: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'xl']),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

const defaultProps = {
    addOn: null,
    children: [],
    className: null,
    size: 'xl',
    title: '',
};

function getHeading(size, title, addOn) {
    switch (size) {
        case 'xs':
            return (
                <span>
                    <h6 className="SectionHeader__title">{title}</h6>
                    {addOn && <span className="SectionHeader__addOn">{addOn}</span>}
                </span>
            );
        case 'sm':
            return (
                <span>
                    <h4 className="SectionHeader__title">{title}</h4>
                    {addOn && <span className="SectionHeader__addOn">{addOn}</span>}
                </span>
            );
        case 'xl':
        default:
            return (
                <span>
                    <h1 className="SectionHeader__title">{title}</h1>
                    {addOn && <span className="SectionHeader__addOn">{addOn}</span>}
                </span>
            );
    }
}

export const SectionHeader = ({ addOn, children, className, size, title }) => {
    const classes = classNames('SectionHeader', className, `size-${size}`);
    return (
        <header className={classes}>
            {getHeading(size, title, addOn)}
            <div className="SectionHeader__controls">{children}</div>
        </header>
    );
};

SectionHeader.defaultProps = defaultProps;

SectionHeader.propTypes = propTypes;
