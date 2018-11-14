import React from 'react';
import { storiesOf } from '@storybook/react';
import { Spinner } from './Spinner';

storiesOf('Spinner', module)
    .add('filling the page', () => (
        <div style={{ margin: 10, height: '100%', border: '1px solid navy' }}>
            <Spinner />
        </div>
    ))
    .add('filling a panel', () => {
        const mockPageStyle = {
            page: {
                margin: 10,
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
            },
            main: {
                flex: 4,
                border: '1px solid navy',
                borderRightWidth: 0,
            },
            sidebar: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            },
            sidebarSizedPanel: {
                height: '200px',
                border: '1px solid navy',
                borderBottomWidth: 0,
            },
            sidebarLoadingPanel: {
                minHeight: '20px',
                border: '1px solid navy',
            },
        };

        return (
            <div style={mockPageStyle.page}>
                <div style={mockPageStyle.main} />
                <div style={mockPageStyle.sidebar}>
                    <div style={mockPageStyle.sidebarSizedPanel} />
                    <div style={mockPageStyle.sidebarLoadingPanel}>
                        <Spinner size="panel" />
                    </div>
                </div>
            </div>
        );
    })
    .add('with a small size', () => (
        <div style={{ margin: 10, height: '100%', border: '1px solid navy' }}>
            <Spinner size={80} />
        </div>
    ));
