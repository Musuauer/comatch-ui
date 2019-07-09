import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { StyledHeader, StyledHeaderControls } from './StyledWrapper';
import { BACKGROUND_COLOR } from './config';
import { Splash } from '../Splash';

const propTypes = {
    backgroundColor: PropTypes.oneOf(Object.keys(BACKGROUND_COLOR)),
    children: PropTypes.node,
    className: PropTypes.string,
    controls: PropTypes.node,
    id: PropTypes.string,
    title: Splash.propTypes.title,
    titleOrientation: Splash.propTypes.orientation,
    subtitle: Splash.propTypes.subtitle,
    wrap: PropTypes.bool,
};

const defaultProps = {
    backgroundColor: 'TRANSPARENT',
    children: null,
    className: null,
    controls: null,
    id: null,
    title: Splash.defaultProps.title,
    titleOrientation: Splash.defaultProps.orientation,
    subtitle: Splash.defaultProps.subtitle,
    wrap: false,
};

const Header = ({ backgroundColor, children, className, controls, id, title, titleOrientation, subtitle, wrap }) =>
    (!!children || !!title || !!subtitle || !!controls) && (
        <StyledHeader
            backgroundColor={backgroundColor}
            className={classnames('Header', className)}
            {...(id && { id })}
            wrap={wrap}
        >
            <Splash orientation={titleOrientation} title={title} subtitle={subtitle} />
            {children}
            <StyledHeaderControls>{controls}</StyledHeaderControls>
        </StyledHeader>
    );

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export { Header };
