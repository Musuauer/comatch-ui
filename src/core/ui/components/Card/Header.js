import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { StyledHeader } from './StyledWrapper';
import { BACKGROUND_COLOR } from './config';

const propTypes = {
    backgroundColor: PropTypes.oneOf(Object.keys(BACKGROUND_COLOR)),
    className: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
    wrap: PropTypes.bool,
};

const defaultProps = {
    backgroundColor: 'TRANSPARENT',
    className: null,
    children: null,
    id: null,
    wrap: false,
};

const Header = ({ backgroundColor, children, className, id, wrap }) =>
    !!children && (
        <StyledHeader
            backgroundColor={backgroundColor}
            className={classnames('Header', className)}
            {...(id && { id })}
            wrap={wrap}
        >
            {children}
        </StyledHeader>
    );

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export { Header };
