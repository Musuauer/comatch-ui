import React from 'react';
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Panel } from './Panel';
import { Button } from '../Button/Button';

const panelText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque porttitor efficitur enim, vitae blandit risus hendrerit non.
Donec in dignissim felis. Aenean eget risus non est suscipit finibus.
Fusce sed ipsum dapibus mi feugiat dapibus vel vel libero. Phasellus varius.`;

const controls = [<Button key={1} text="Ghost" ghost />, <Button key={2} text="Full" />];
const control = <Button text="Ghost" ghost />;

const titleWithIcon = (
    <span>
        <FontAwesomeIcon icon={faCheck} /> Success
    </span>
);

storiesOf('Panel', module)
    .add('primary style with title', () => <Panel title="A panel title">{panelText}</Panel>)
    .add('primary style with title and without content', () => <Panel title="A panel title" />)
    .add('primary style with green title color', () => (
        <Panel title="A panel title" titleColor="green">
            {panelText}
        </Panel>
    ))
    .add('primary style with blue title color', () => (
        <Panel title="A panel title" titleColor="blue">
            {panelText}
        </Panel>
    ))
    .add('primary style with gray title color', () => (
        <Panel title="A panel title" titleColor="gray">
            {panelText}
        </Panel>
    ))
    .add('primary style with title and a control', () => (
        <Panel title="A panel title" controls={control} primary>
            {panelText}
        </Panel>
    ))
    .add('primary style with title and controls', () => (
        <Panel title="A panel title" controls={controls} primary>
            {panelText}
        </Panel>
    ))
    .add('collapsible with primary style and blue title', () => (
        <Panel title="A panel title" titleColor="blue" collapsible>
            {panelText}
        </Panel>
    ))
    .add('collapsible with primary style and without content', () => <Panel title="A panel title" collapsible />)
    .add('collapsible with primary style and huge title', () => (
        <Panel
            title="A very long and exhausting to read panel title that might as well replace the body text"
            collapsible
        >
            {panelText}
        </Panel>
    ))
    .add('collapsible and initially expanded with primary style and blue title', () => (
        <Panel title="A panel title" titleColor="blue" collapsible expanded>
            {panelText}
        </Panel>
    ))
    .add('collapsible with primary style and blue title with icon', () => (
        <Panel title={titleWithIcon} titleColor="blue" collapsible>
            {panelText}
        </Panel>
    ))
    .add('collapsible with primary style, title and controls', () => (
        <Panel title="A panel title" controls={controls} primary collapsible>
            {panelText}
        </Panel>
    ))
    .add('secondary style with title', () => (
        <Panel title="A panel title" secondary>
            {panelText}
        </Panel>
    ))
    .add('secondary style with title and without content', () => <Panel title="A panel title" secondary />)
    .add('secondary style with title and controls', () => (
        <Panel title="A panel title" controls={controls} secondary>
            {panelText}
        </Panel>
    ))
    .add('collapsible with secondary style and title', () => (
        <Panel title="A panel title" collapsible secondary>
            {panelText}
        </Panel>
    ))
    .add('collapsible with secondary style and huge title', () => (
        <Panel
            title="A very long and exhausting to read panel title that might as well replace the body text"
            collapsible
            secondary
        >
            {panelText}
        </Panel>
    ))
    .add('collapsible initially expanded with secondary style and title', () => (
        <Panel title="A panel title" collapsible secondary expanded>
            {panelText}
        </Panel>
    ))
    .add('collapsible with secondary style, title and controls', () => (
        <Panel title="A panel title" controls={controls} collapsible secondary>
            {panelText}
        </Panel>
    ))
    .add('without title', () => <Panel>{panelText}</Panel>)
    .add('disabled', () => (
        <Panel title="A panel title" disabled />
    ));
