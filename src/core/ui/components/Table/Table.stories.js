/* eslint-disable import/no-unresolved */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from './Table';

const headingsStrings = ['City', 'Street', 'Country', 'Phone'];

const headings = [
    <tr key={0}>
        <th key={0}>City</th>
        <th key={1}>Street</th>
        <th key={2}>Country</th>
        <th key={3}>Phone</th>
    </tr>
];

const rows = [
    { city: 'Athens', street: 'Venizelou', country: 'GR', phone: '01529032810' },
    { city: 'Berlin', street: 'Freistr', country: 'DE', phone: '01529032810' },
    { city: 'New York', street: 'Nyc str', country: 'US', phone: '01529032810' },
    { city: 'Bern', street: 'Randomstr', country: 'CH', phone: '01529032810' },
    { city: 'Rome', street: 'Colstr', country: 'IT', phone: '01529032810' },
];

storiesOf('Table', module)
    .add('rendering headings and children as objects with primary style', () => (
        <Table headings={headings}>
            {rows.map(({ city, street, country, phone }, key) => (
                <tr key={key}>
                    <td>{city}</td>
                    <td>{street}</td>
                    <td>{country}</td>
                    <td>{phone}</td>
                </tr>
            ))}
        </Table>
    ))
    .add('rendering headings and cellData (serving as children) with primary style', () => (
        <Table headings={headingsStrings} cellData={rows} />
    ))
    .add('rendering a single heading and row with primary style', () => (
        <Table headings={<tr><th>Single heading</th></tr>}>
            <tr>
                <td>Athens</td>
            </tr>
        </Table>
    ))
    .add('without headings, with rows and primary style', () => <Table cellData={rows} />)
    .add('rendering headings and children as objects with secondary style', () => (
        <Table headings={headings} secondary>
            {rows.map(({ city, street, country, phone }, key) => (
                <tr key={key}>
                    <td>{city}</td>
                    <td>{street}</td>
                    <td>{country}</td>
                    <td>{phone}</td>
                </tr>
            ))}
        </Table>
    ))
    .add('rendering headings and cellData (serving as children) with secondary style', () => (
        <Table headings={headingsStrings} cellData={rows} secondary />
    ))
    .add('rendering a single heading and row with secondary style', () => (
        <Table headings={<th>Single heading</th>} secondary>
            <tr>
                <td>Athens</td>
            </tr>
        </Table>
    ))
    .add('without headings, with rows and secondary style', () => (
        <Table cellData={rows} secondary />
    ));
