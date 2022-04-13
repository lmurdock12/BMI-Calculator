/**
 * @jest-environment jsdom
 */

import App from './App';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount} from 'enzyme';

configure({ adapter: new Adapter() });
global.shallow = shallow;

describe('Testing App Submission', () => {

  it('Renders two paragraph tags', () => {
    const wrapper = mount(<App />)
    const instance = wrapper.instance();
    wrapper.find("#button").simulate("submit");
  
    expect(wrapper.find("p").length).toEqual(2);
  });

});
