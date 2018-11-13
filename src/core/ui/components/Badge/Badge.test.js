/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { lorem } from 'faker';
import sample from 'lodash/sample';
import { allowedColors, Badge } from './Badge';
import '../../../config/tests/setup';

describe('Badge', () => {
    it('should render a Badge with default props', () => {
        const item = shallow(<Badge />);
        expect(item.hasClass('Badge')).to.equal(true);
        expect(item.hasClass('white')).to.equal(true);
        expect(item.hasClass('sm')).to.equal(true);
        expect(item.find(FontAwesomeIcon).length).to.equal(0);
        expect(item.text()).to.equal('');
    });
    it('should render a Badge with a given color', () => {
        const color = sample(allowedColors);
        const item = shallow(<Badge color={color} />);
        expect(item.hasClass(color)).to.equal(true);
    });
    it('should render a Badge with a given size', () => {
        const item = shallow(<Badge size="xs" />);
        expect(item.hasClass('xs')).to.equal(true);
    });
    it('should render a Badge with a given icon', () => {
        const icon = <FontAwesomeIcon icon={faDownload} />;
        const item = shallow(<Badge icon={icon} />);
        expect(item.find(FontAwesomeIcon).length).to.equal(1);
    });
    it('should render a Badge with given text', () => {
        const text = lorem.word();
        const item = shallow(<Badge text={text} />);
        expect(item.text()).to.equal(text);
    });
});
