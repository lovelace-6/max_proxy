import React from 'react';
import App from '../components/App.jsx';
import { shallow, mount, render } from 'enzyme';


test('<App />', () => {
  const wrapper = shallow(<App /> )
  expect(wrapper.exists()).toBe(true);
})
