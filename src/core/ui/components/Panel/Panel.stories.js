import React from 'react';
import Highlight from 'react-highlight';
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
    .add('primary style with title', () => (
        <>
            <Panel title="A panel title">{panelText}</Panel>
            <Highlight className="html">{`<Panel title="A panel title">{panelText}</Panel>`}</Highlight>
        </>
    ))
    .add('primary style with title and without content', () => (
        <>
            <Panel title="A panel title" />
            <Highlight className="html">{`<Panel title="A panel title" />`}</Highlight>
        </>
    ))
    .add('primary style with green title color', () => (
        <>
            <Panel title="A panel title" titleColor="green">
                {panelText}
            </Panel>
            <Highlight className="html">
                {`<Panel title="A panel title" titleColor="green">{panelText}</Panel>`}
            </Highlight>
        </>
    ))
    .add('primary style with blue title color', () => (
        <>
            <Panel title="A panel title" titleColor="blue">
                {panelText}
            </Panel>
            <Highlight className="html">
                {`<Panel title="A panel title" titleColor="blue">{panelText}</Panel>`}
            </Highlight>
        </>
    ))
    .add('primary style with gray title color', () => (
        <>
            <Panel title="A panel title" titleColor="gray">
                {panelText}
            </Panel>
            <Highlight className="html">
                {`<Panel title="A panel title" titleColor="gray">{panelText}</Panel>`}
            </Highlight>
        </>
    ))
    .add('primary style with title and a control', () => (
        <>
            <Panel title="A panel title" controls={control} primary>
                {panelText}
            </Panel>
            <Highlight className="html">
                {`<Panel title="A panel title" controls={control} primary>{panelText}</Panel>`}
            </Highlight>
        </>
    ))
    .add('primary style with title and controls', () => (
        <>
            <Panel title="A panel title" controls={controls} primary>
                {panelText}
            </Panel>
            <Highlight className="html">
                {`<Panel title="A panel title" controls={controls} primary>{panelText}</Panel>`}
            </Highlight>
        </>
    ))
    .add('collapsible with primary style and blue title', () => (
        <>
            <Panel title="A panel title" titleColor="blue" collapsible>
                {panelText}
            </Panel>
            <Highlight className="html">
                {`<Panel title="A panel title" titleColor="blue" collapsible>{panelText}</Panel`}
            </Highlight>
        </>
    ))
    .add('collapsible with primary style and without content', () => (
        <>
            <Panel title="A panel title" collapsible />
            <Highlight className="html">{`<Panel title="A panel title" collapsible />`}</Highlight>
        </>
    ))
    .add('collapsible with primary style and huge title', () => (
        <>
            <Panel
                title="A very long and exhausting to read panel title that might as well replace the body text"
                collapsible
            >
                {panelText}
            </Panel>
            <Highlight className="html">
                {`<Panel` +
                    `\n\ttitle="A very long and exhausting to read panel` +
                    ` title that might as well replace the body text"` +
                    `\n\tcollapsible` +
                    `\n>` +
                    `\n\t{panelText}` +
                    `\n</Panel>`}
            </Highlight>
        </>
    ))
    .add('collapsible and initially expanded with primary style and blue title', () => (
        <>
            <Panel title="A panel title" titleColor="blue" collapsible expanded>
                {panelText}
            </Panel>
            <Highlight className="html">{`<Panel title="A panel title" collapsible />`}</Highlight>
        </>
    ))
    .add('collapsible with primary style and blue title with icon', () => (
        <>
            <Panel title={titleWithIcon} titleColor="blue" collapsible>
                {panelText}
            </Panel>
            <Highlight className="html">
                {'<Panel title={titleWithIcon} titleColor="blue" collapsible>\n\t{panelText}\n</Panel>'}
            </Highlight>
        </>
    ))
    .add('collapsible with primary style, title and controls', () => (
        <>
            <Panel title="A panel title" controls={controls} primary collapsible>
                {panelText}
            </Panel>
            <Highlight className="html">
                {`<Panel title="A panel title" controls={controls} primary collapsible>` +
                    `\n\t{panelText}` +
                    `\n</Panel>`}
            </Highlight>
        </>
    ))
    .add('secondary style with title', () => (
        <>
            <Panel title="A panel title" secondary>
                {panelText}
            </Panel>
            <Highlight className="html">{'<Panel title="A panel title" secondary>\n\t{panelText}\n</Panel>'}</Highlight>
        </>
    ))
    .add('secondary style with title and without content', () => (
        <>
            <Panel title="A panel title" secondary />
            <Highlight className="html">{`<Panel title="A panel title" secondary />`}</Highlight>
        </>
    ))
    .add('secondary style with title and controls', () => (
        <>
            <Panel title="A panel title" controls={controls} secondary>
                {panelText}
            </Panel>
            <Highlight className="html">
                {'<Panel title="A panel title" controls={controls} secondary>\n\t{panelText}\n</Panel>'}
            </Highlight>
        </>
    ))
    .add('collapsible with secondary style and title', () => (
        <>
            <Panel title="A panel title" collapsible secondary>
                {panelText}
            </Panel>
            <Highlight className="html">
                {'<Panel title="A panel title" collapsible secondary>\n\t{panelText}\n</Panel>'}
            </Highlight>
        </>
    ))
    .add('collapsible with secondary style and huge title', () => (
        <>
            <Panel
                title="A very long and exhausting to read panel title that might as well replace the body text"
                collapsible
                secondary
            >
                {panelText}
            </Panel>
            <Highlight className="html">
                {`<Panel` +
                    `\n\ttitle="A very long and exhausting to read panel title` +
                    ` that might as well replace the body text"` +
                    `\n\tcollapsible` +
                    `\n\tsecondary` +
                    `\n>` +
                    `\n\t{panelText}` +
                    `\n</Panel>`}
            </Highlight>
        </>
    ))
    .add('collapsible initially expanded with secondary style and title', () => (
        <>
            <Panel title="A panel title" collapsible secondary expanded>
                {panelText}
            </Panel>
            <Highlight className="html">
                {'<Panel title="A panel title" collapsible secondary expanded>\n\t{panelText}\n</Panel>'}
            </Highlight>
        </>
    ))
    .add('collapsible with secondary style, title and controls', () => (
        <>
            <Panel title="A panel title" controls={controls} collapsible secondary>
                {panelText}
            </Panel>
            <Highlight className="html">
                {'<Panel title="A panel title" controls={controls} collapsible secondary>' +
                    '\n\t{panelText}' +
                    '\n</Panel>'}
            </Highlight>
        </>
    ))
    .add('without title', () => (
        <>
            <Panel>{panelText}</Panel>
            <Highlight className="html">{`<Panel>{panelText}</Panel>`}</Highlight>
        </>
    ))
    .add('disabled', () => (
        <>
            <Panel title="A panel title" disabled />
            <Highlight className="html">{`<Panel title="A panel title" disabled />`}</Highlight>
        </>
    ));
