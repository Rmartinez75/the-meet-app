import React, { Component } from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });
  test('Textbox will render', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });
  test('change state when input changes', () => {
    const eventObject = { target: { value: 25 } };
    NumberOfEventsWrapper.find('#numberOfEvents__input').simulate(
      'change',
      eventObject
    );
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(25);
  });
});
