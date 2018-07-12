import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders via Enzyme shallow without crashing', () => {
  shallow(<App />)
})

it('renders via Enzyme mount without crashing', () => {
  const wrapper = mount(<App />)
  expect(wrapper.contains('Fresh Produce')).toBe(true)
})