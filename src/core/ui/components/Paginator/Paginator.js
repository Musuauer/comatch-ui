import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import { StyledWrapper as StyledReactPaginate } from './StyledWrapper';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: null,
};

/**
 * A wrapper around `react-paginate`.
 *
 * For a complete reference on the available prop types check the documentation
 * of the `react-paginate` package, [click here](https://github.com/AdeleD/react-paginate).
 */

export const Paginator = ({ className, ...props }) => (
    <StyledReactPaginate className={classNames('Paginator', className)}>
        <ReactPaginate breakLabel="…" previousLabel="«" nextLabel="»" {...props} />
    </StyledReactPaginate>
);

Paginator.propTypes = propTypes;

Paginator.defaultProps = defaultProps;
