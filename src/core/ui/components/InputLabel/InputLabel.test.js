import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { InputLabel } from './InputLabel';
import '../../../config/tests/setup';

const text = 'A very random text';

describe('InputLabel', () => {

    it('should render correctly', () => {
        const inputLabel = renderer.create(<InputLabel  text={text} />).toJSON();
        expect(inputLabel).toMatchSnapshot();
    });

    let item;
    beforeEach(() => {
        item = shallow(<InputLabel text={text}/>);
    })
    it('should render InputLabel as a default class', () => {
        expect(item.hasClass('InputLabel')).toEqual(true);
    });
    it('should render InputLabel with extra className if passed by the props', () => {
        const className = 'A very random className';
        item.setProps({ className });
        expect(item.hasClass(className)).toEqual(true);
    });
    it('should have asterisk after the text if the required prop is set to true', () => {
        item.setProps({ required: true });
        expect(item.find('label').text()).toEqual(`${text}*`);
    });
    it('should render a <span> instead of <label> if span prop is set to true', () => {
        item.setProps({ span: true });
        expect(item.find('label').length).toEqual(0);
        expect(item.find('span').length).toEqual(1);
    });
    it('should set an id attribute if the id prop is given', () => {
        const id = 'A very random id';
        item.setProps({ id });
        expect(item.prop('id')).toEqual(id);
    });
});