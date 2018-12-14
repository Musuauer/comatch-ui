/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MultiLangTextAreaInput } from './MultiLangTextAreaInput';

/* eslint-disable react/prop-types */
class Wrapper extends Component {
    state = {
        activeLanguage: 'en',
    };

    setLanguage = (activeLanguage) => this.setState({ activeLanguage });

    render() {
        const { value } = this.props;

        return (
            <div>
                <button type="button" onClick={() => this.setLanguage('en')}>
                    English
                </button>
                <button type="button" onClick={() => this.setLanguage('de')}>
                    German
                </button>
                <button type="button" onClick={() => this.setLanguage('fr')}>
                    French
                </button>
                <hr />
                <MultiLangTextAreaInput
                    label="A name in different language"
                    value={value}
                    activeLanguage={this.state.activeLanguage}
                    onChange={(event) => action('changed')(event.target.name, event.target.value)}
                    name="basicProfile.firstName"
                />
            </div>
        );
    }
}

storiesOf('MultiLangTextAreaInput', module).add('with initial values for all en, de, fr', () => (
    <Wrapper
        value={[
            { lang: 'en', value: 'English name' },
            { lang: 'de', value: 'German name' },
            { lang: 'fr', value: 'French name' },
        ]}
    />
)).add('with initial values only for en', () => (
    <Wrapper
        value={[
            { lang: 'en', value: 'English name' },
        ]}
    />
));
