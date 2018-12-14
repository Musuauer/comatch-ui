import React from 'react';
import { I18n, Translate, loadTranslations } from 'react-redux-i18n';
import merge from 'lodash/merge';

/* eslint-disable no-underscore-dangle */

// Hack the translate function of our translation lib so that it accepts a locale (third optional parameter).
// If no locale provided, it will fallback to the language set in store.
function _translate(key, replacements = {}, locale) {
    let translation = '';
    try {
        const translationLocale = locale || store.getState().i18n.locale;
        translation = this._fetchTranslation(
            this._translations,
            `${translationLocale}.${key}`,
            replacements.count,
        );
    } catch (err) {
        return this._handleMissingTranslation(key, replacements);
    }
    return this._replace(translation, replacements);
}

function t(key, replacements = {}, locale) {
    return this._translate(key, replacements, locale);
}

I18n._translate = _translate.bind(I18n);
I18n.t = t.bind(I18n);

/* eslint-enable no-underscore-dangle */

export function injectTranslations(newTranslations) {
    const { translations } = store.getState().i18n;
    store.dispatch(loadTranslations(merge(translations, newTranslations)));
}

/* eslint-disable react/display-name */
// note: for now it is not possible to set a language when using the Translate helper
// For a list of possible props check out react-i18nify's docs:
// @see https://github.com/JSxMachina/react-i18nify
export const getNamespacedTranslator = (namespace = '') => (value, props, locale, usesHelper = false) => {
    const path = namespace.length ? `${namespace}.${value}` : value;
    return usesHelper ? <Translate value={path} {...props} /> : I18n.t(path, props, locale);
};

// For database fields of type multiLangString, returns the value
// in the requested language
export const getLocalizedValue = (fieldValue, lang, useFallback = true) => {
    if (!Array.isArray(fieldValue)) {
        return '';
    }
    let localizedObject = fieldValue.find((value) => value.lang === lang);
    if (!localizedObject && useFallback) {
        // if there's no value for that language, return the English one
        // if there's no English value, return the first one
        localizedObject = fieldValue.find((value) => value.lang === 'en') || fieldValue[0];
    }
    return localizedObject && localizedObject.value;
};
