import React from 'react';
import Highlight from 'react-highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

const PopupMenu = (
    <div style={{ background: '#e06c75', padding: '10px', height: '100px' }}>
        <span>Popup Menu</span>
    </div>
);

storiesOf('Button', module)
    .add('with primary style', () => (
        <>
            <Button text="Hello world" />
            <Highlight className="html">{'<Button text="Hello world" />'}</Highlight>
        </>
    ))
    .add('disabled with primary style', () => (
        <>
            <Button disabled text="Hello world" />
            <Highlight className="html">{'<Button disabled text="Hello world" />'}</Highlight>
        </>
    ))
    .add('with primary style and onClick handler', () => (
        <>
            <Button text="Hello world" onClick={action('clicked')} />
            <Highlight className="html">{`<Button text="Hello world" onClick={(event) => {}} />`}</Highlight>
        </>
    ))
    .add('with ghost style', () => (
        <>
            <Button ghost text="Hello world" />
            <Highlight className="html">{'<Button ghost text="Hello world" />'}</Highlight>
        </>
    ))
    .add('disabled with ghost style', () => (
        <>
            <Button ghost disabled text="Hello world" />
            <Highlight className="html">{'<Button ghost disabled text="Hello world" />'}</Highlight>
        </>
    ))
    .add('with icon', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />
            <Highlight className="html">
                {'<Button icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />'}
            </Highlight>
        </>
    ))
    .add('with icon and ghost style', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} text="Hello world" />
            <Highlight className="html">
                {'<Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} text="Hello world" />'}
            </Highlight>
        </>
    ))
    .add('with icon on the right', () => (
        <>
            <Button iconAfterText={true} icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />
            <Highlight>
                {'<Button iconAfterText={true} icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />'}
            </Highlight>
        </>
    ))
    .add('with icon only', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} />
            <Highlight className="html">{'<Button icon={<FontAwesomeIcon icon={faTimes} />} />'}</Highlight>
        </>
    ))
    .add('with icon only and ghost style', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} />
            <Highlight className="html">
                {'<Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} />'}
            </Highlight>
        </>
    ))
    .add('with popupMenu', () => (
        <>
            <div style={{ textAlign: 'center', height: '150px' }}>
                <Button
                    text="Click to toggle popup menu"
                    popupMenu={(
                        <div style={{ background: '#e06c75', padding: '10px', height: '100px' }}>
                            <span>Popup Menu</span>
                        </div>
                    )}
                />
            </div>
            <Highlight className="html">
                {`
<Button
    text="Click to toggle popup menu"
    popupMenu={(
        <div style={{ background: '#e06c75', padding: '10px', height: '100px' }}>
\t\t            <span>Popup Menu</span>
\t        </div>
\t  )}
/>
                `}
            </Highlight>
        </>
    ))
    .add('with popupMenu on top', () => (
        <>
            <div style={{ textAlign: 'center', height: '150px', paddingTop: '100px' }}>
                <Button
                    text="Click to toggle popup menu"
                    popupMenu={(
                        <div style={{ background: '#e06c75', padding: '10px', height: '100px' }}>
                            <span>Popup Menu</span>
                        </div>
                    )}
                    popupMenuPosition="top"
                />
            </div>
            <Highlight className="html">
                {`
<Button
    text="Click to toggle popup menu"
    popupMenuPosition="top"
    popupMenu={(
        <div style={{ background: '#e06c75', padding: '10px', height: '100px' }}>
\t\t            <span>Popup Menu</span>
\t        </div>
\t  )}
/>
                `}
            </Highlight>
        </>
    ))
    .add('with popupMenu to the left', () => (
        <>
            <div style={{ textAlign: 'center', height: '150px' }}>
                <Button
                    text="Click to toggle popup menu"
                    popupMenu={(
                        <div style={{ background: '#e06c75', padding: '10px', height: '100px' }}>
                            <span>Popup Menu</span>
                        </div>
                    )}
                    popupMenuPosition="left"
                />
            </div>
            <Highlight className="html">
                {`
<Button
    text="Click to toggle popup menu"
    popupMenuPosition="left"
    popupMenu={(
        <div style={{ background: '#e06c75', padding: '10px', height: '100px' }}>
\t\t            <span>Popup Menu</span>
\t        </div>
\t  )}
/>
                `}
            </Highlight>
        </>
    ))
    .add('with popupMenu to the right', () => (
        <>
            <div style={{ textAlign: 'center', height: '150px' }}>
                <Button
                    text="Click to toggle popup menu"
                    popupMenu={(
                        <div style={{ background: '#e06c75', padding: '10px', height: '100px' }}>
                            <span>Popup Menu</span>
                        </div>
                    )}
                    popupMenuPosition="right"
                />
            </div>
            <Highlight className="html">
                {`
<Button
    text="Click to toggle popup menu"
    popupMenuPosition="right"
    popupMenu={(
        <div style={{ background: '#e06c75', padding: '10px', height: '100px' }}>
\t\t            <span>Popup Menu</span>
\t        </div>
\t  )}
/>
                `}
            </Highlight>
        </>
    ));
