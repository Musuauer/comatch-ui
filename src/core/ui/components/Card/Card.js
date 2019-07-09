import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Header } from './Header';
import { BACKGROUND_COLOR } from './config';
import { StyledWrapper } from './StyledWrapper';

const propTypes = {
    backgroundColor: PropTypes.oneOf(Object.keys(BACKGROUND_COLOR)),
    bordered: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
    inline: PropTypes.bool,
};

const defaultProps = {
    backgroundColor: 'WHITE',
    bordered: false,
    className: null,
    children: null,
    id: null,
    inline: false,
};

const Card = ({ backgroundColor, bordered, children, className, id, inline }) =>
    !!children && (
        <StyledWrapper
            backgroundColor={backgroundColor}
            bordered={bordered}
            className={classnames('Card', className)}
            inline={inline}
            {...(id && { id })}
        >
            {children}
        </StyledWrapper>
    );

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

Card.Header = Header;

export { Card };
