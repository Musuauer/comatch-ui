import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CheckboxGroupInput } from './CheckboxGroupInput';

const industries = [
    { value: 'notRelevant', label: 'Not relevant' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'machinery', label: 'Machinery' },
    { value: 'cars', label: 'Cars' },
    { value: 'banking', label: 'Banking' },
    { value: 'relevant', label: 'Relevant' },
    { value: 'tourism', label: 'Tourism' },
    { value: 'industry', label: 'Industry' },
    { value: 'aeronautics', label: 'Aeronautics' },
    { value: 'insurance', label: 'Insurance' },
];

const industriesWithCategories = [
    {
        title: 'Category A',
        options: [
            { value: 'notRelevant', label: 'Not relevant' },
            { value: 'agriculture', label: 'Agriculture' },
            { value: 'machinery', label: 'Machinery' },
        ],
    },
    {
        title: 'Category B',
        options: [
            { value: 'cars', label: 'Cars' },
            { value: 'banking', label: 'Banking' },
            { value: 'relevant', label: 'Relevant' },
        ],
    },
    {
        title: 'Category C',
        options: [
            { value: 'tourism', label: 'Tourism' },
            { value: 'industry', label: 'Industry' },
            { value: 'aeronautics', label: 'Aeronautics' },
            { value: 'insurance', label: 'Insurance' },
        ],
    },
];

storiesOf('CheckboxGroupInput', module)
    .add('with display block', () => (
        <>
            <CheckboxGroupInput
                onChange={(evt) => action('changed')(evt.target.name, evt.target.value)}
                name="industries"
                options={industries}
                value={['cars']}
            />
            <Highlight className="html">
                {'<CheckboxGroupInput onChange={function() {}} name="industries" options={industries} ' +
                    'value={["cars"]} />'}
            </Highlight>
        </>
    ))
    .add('with display block, label and error', () => (
        <>
            <CheckboxGroupInput
                onChange={(evt) => action('changed')(evt.target.name, evt.target.value)}
                name="industries"
                label="Industries"
                options={industries}
                inputError="Need to check more"
                value={['cars']}
            />
            <Highlight className="html">
                {'<CheckboxGroupInput onChange={function() {}} name="industries" label="Industries" ' +
                    'options={industries} inputError="Need to check more" value={["cars"]} />'}
            </Highlight>
        </>
    ))
    .add('with display inline', () => (
        <>
            <CheckboxGroupInput
                onChange={(evt) => action('changed')(evt.target.name, evt.target.value)}
                display="inline"
                name="industries"
                options={industries.slice(0, 2)}
                value={['cars']}
            />
            <Highlight className="html">
                {'<CheckboxGroupInput onChange={function() {}} display="inline" name="industries" ' +
                    'options={industries.slice(0, 2)} value={["cars"]} />'}
            </Highlight>
        </>
    ))
    .add('with display inline, label and error', () => (
        <>
            <CheckboxGroupInput
                onChange={(evt) => action('changed')(evt.target.name, evt.target.value)}
                display="inline"
                name="industries"
                label="Industries"
                options={industries.slice(0, 2)}
                inputError="Need to check more"
                value={['cars']}
            />
            <Highlight className="html">
                {'<CheckboxGroupInput onChange={function() {}} display="inline" name="industries" ' +
                    'label={Industries} options={industries.slice(0, 2)} inputError="Need to check more ' +
                    'value={["cars"]} />'}
            </Highlight>
        </>
    ))
    .add('with 2 checkboxes per row and label', () => (
        <>
            <CheckboxGroupInput
                checkboxesPerRow={2}
                onChange={(evt) => action('changed')(evt.target.name, evt.target.value)}
                name="industries"
                options={industries}
                label="Industries"
                value={['cars']}
            />
            <Highlight className="html">
                {'<CheckboxGroupInput checkboxesPerRow={2} onChange={function() {}} name="industries" ' +
                    'options={industries} label="Industries" value={["cars"]} />'}
            </Highlight>
        </>
    ))
    .add('with 2 checkboxes per row, label and error', () => (
        <>
            <CheckboxGroupInput
                checkboxesPerRow={2}
                onChange={(evt) => action('changed')(evt.target.name, evt.target.value)}
                name="industries"
                options={industries}
                label="Industries"
                inputError="Need to check more"
                value={['cars']}
            />
            <Highlight className="html">
                {'<CheckboxGroupInput checkboxesPerRow={2} onChange={function() {}} name="industries" ' +
                    'options={industries} label="Industries" inputError="Need to check more" value={["cars"]} />'}
            </Highlight>
        </>
    ))
    .add('with 2 checkboxes per row', () => (
        <>
            <CheckboxGroupInput
                checkboxesPerRow={2}
                onChange={(evt) => action('changed')(evt.target.name, evt.target.value)}
                name="industries"
                options={industries}
                value={['cars']}
            />
            <Highlight className="html">
                {'<CheckboxGroupInput checkboxesPerRow={2} onChange={function() {}} name="industries" ' +
                    'options={industries} value={["cars"]} />'}
            </Highlight>
        </>
    ))
    .add('with 2 checkboxes per row, using categories', () => (
        <>
            <CheckboxGroupInput
                checkboxesPerRow={2}
                onChange={(evt) => action('changed')(evt.target.name, evt.target.value)}
                name="industries"
                options={industriesWithCategories}
                value={['cars']}
            />
            <Highlight className="html">
                {'<CheckboxGroupInput checkboxesPerRow={2} onChange={function() {}} name="industries" ' +
                    'options={industriesWithCategories} value={["cars"]} />'}
            </Highlight>
        </>
    ))
    .add('with 3 checkboxes per row', () => (
        <>
            <CheckboxGroupInput
                checkboxesPerRow={3}
                onChange={(evt) => action('changed')(evt.target.name, evt.target.value)}
                name="industries"
                options={industries}
                value={['cars']}
            />
            <Highlight className="html">
                {'<CheckboxGroupInput checkboxesPerRow={3} onChange={function() {}} name="industries" ' +
                    'options={industries} value={["cars"]} />'}
            </Highlight>
        </>
    ))
    .add('with 4 checkboxes per row', () => (
        <>
            <CheckboxGroupInput
                checkboxesPerRow={4}
                onChange={(evt) => action('changed')(evt.target.name, evt.target.value)}
                name="industries"
                options={industries}
                value={['cars']}
            />
            <Highlight className="html">
                {'<CheckboxGroupInput checkboxesPerRow={4} onChange={function() {}} name="industries" ' +
                    'options={industries} value={["cars"]} />'}
            </Highlight>
        </>
    ))
    .add('with 5 checkboxes per row', () => (
        <>
            <CheckboxGroupInput
                checkboxesPerRow={5}
                onChange={(evt) => action('changed')(evt.target.name, evt.target.value)}
                name="industries"
                options={industries}
                value={['cars']}
            />
            <Highlight className="html">
                {'<CheckboxGroupInput checkboxesPerRow={5} onChange={function() {}} name="industries" ' +
                    'options={industries} value={["cars"]} />'}
            </Highlight>
        </>
    ));
