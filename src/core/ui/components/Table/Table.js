import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Table.scss';

const propTypes = {
    cellData: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    headings: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    secondary: PropTypes.bool,
};

const defaultProps = {
    cellData: [],
    children: null,
    className: '',
    headings: null,
    secondary: false,
};

function renderHeadings(headings) {
    if (headings.length && typeof headings[0] === 'string') {
        return (
            <tr>
                {headings.map((heading, key) => <th key={key}>{heading}</th>)}
            </tr>
        );
    }

    return headings;
}

function renderCells(cellData, children) {
    if (cellData.length) {
        return cellData.map((object, trKey) => (
            <tr key={trKey}>
                {Object.keys(object).map((key, tdKey) => <td key={tdKey}>{object[key]}</td>)}
            </tr>
        ));
    }

    return children;
}

export const Table = ({ cellData, children, className, headings, secondary }) => (
    <div className={classNames('Table', className, { primary: !secondary, secondary })}>
        <table className="Table__table">
            {headings && (
                <thead>
                    {renderHeadings(headings)}
                </thead>
            )}
            <tbody>{renderCells(cellData, children)}</tbody>
        </table>
    </div>
);

Table.propTypes = propTypes;

Table.defaultProps = defaultProps;
