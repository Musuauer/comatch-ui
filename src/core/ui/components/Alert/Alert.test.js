/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { lorem } from 'faker';
import { Alert, ALERT_TYPE } from './Alert';
import '../../../config/tests/setup';

describe('Alert', () => {
    it('should render a Alert with default props', () => {
        const item = shallow(<Alert />);
        // should have default classes .Alert.primary.without-content
        expect(item.hasClass('Alert')).to.equal(true);
        expect(item.hasClass('info')).to.equal(true);
        expect(item.hasClass('box')).to.equal(true);
        expect(item.hasClass('with-icon')).to.equal(true);
    });
    it('should render a Alert with a message', () => {
        const word = lorem.word();
        const item = shallow(<Alert message={word} />);
        // should have a header
        expect(item.find('.Alert__message').text()).to.equal(word);
    });
    it('should render an inline Alert', () => {
        const item = shallow(<Alert display="inline" />);
        // should have default classes .Alert.primary.without-content
        expect(item.hasClass('Alert')).to.equal(true);
        expect(item.hasClass('info')).to.equal(true);
        expect(item.hasClass('inline')).to.equal(true);
        expect(item.hasClass('with-icon')).to.equal(true);
    });
    it('should render a notification Alert', () => {
        const item = shallow(<Alert display="notification" />);
        // should have default classes .Alert.primary.without-content
        expect(item.hasClass('Alert')).to.equal(true);
        expect(item.hasClass('info')).to.equal(true);
        expect(item.hasClass('notification')).to.equal(true);
        expect(item.hasClass('with-icon')).to.equal(true);
    });
    it('should render Alerts of different types (danger, success, info, warning)', () => {
        const itemInfo = shallow(<Alert type={ALERT_TYPE.INFO} />);
        const itemWarning = shallow(<Alert type={ALERT_TYPE.WARNING} />);
        const itemDanger = shallow(<Alert type={ALERT_TYPE.DANGER} />);
        const itemSuccess = shallow(<Alert type={ALERT_TYPE.SUCCESS} />);
        // should have default classes .Alert.primary.without-content
        expect(itemInfo.hasClass(ALERT_TYPE.INFO)).to.equal(true);
        expect(itemWarning.hasClass(ALERT_TYPE.WARNING)).to.equal(true);
        expect(itemDanger.hasClass(ALERT_TYPE.DANGER)).to.equal(true);
        expect(itemSuccess.hasClass(ALERT_TYPE.SUCCESS)).to.equal(true);
    });
});
