import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';
import { SectionHeader } from './SectionHeader';

storiesOf('SectionHeader', module)
    .add('with title translate', () => <SectionHeader title="Fancy title" />)
    .add('with title string', () => (
        <SectionHeader title="I am the title of the Universe and of all the other universes" />
    ))
    .add('with title and buttons', () => (
        <SectionHeader title="Test title">
            <Button iconAfterText={true} icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />
            <Button iconAfterText={true} icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />
        </SectionHeader>
    ));
