import React from 'react';
import {mount} from 'enzyme';
import { Provider } from 'mobx-react';
import Store from '../stores';
import MainContainer from './index';

describe('Test Integration of all components', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Provider Store={Store}><MainContainer/></Provider>);
    })

    it('Adding Element will reflect in list', () => {
            wrapper.find('input').simulate('change',{ target: {value:'first item'} });
            wrapper.find('form').simulate('submit');
            const listItemsNumber = wrapper.find('li').length;
            expect(listItemsNumber).toEqual(1);
    });
});
