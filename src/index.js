import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './core/ui/components/App';
import { importFonts } from './core/styles/fonts';

import './core/styles/base.scss';

/*
 * This is the entry point of the application that bootstraps the main layout of the app,
 * the App component onto the DOM. Instead of using directly's ReactDOM's render, we use a
 * wrapper function to enable hot reloading in development.
 */
async function render(Component) {
    const GlobalFontsStyle = await importFonts();
    ReactDOM.render(
        <div>
            <GlobalFontsStyle />
            <Component />
        </div>,
        document.getElementById('root'),
    );
}

render(App);

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
if (IS_DEVELOPMENT && module.hot) {
    // Enable hot reload instead of CRA's default "warm" reload, also see store.js
    module.hot.accept('./core/ui/components/App', () => {
        /* eslint-disable */
        const NextApp = require('./core/ui/components/App').App;
        /* eslint-enable */
        render(NextApp);
    });
}
