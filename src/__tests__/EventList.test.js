import React from 'react';
import { shallow, mount } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event.js';
import App from '../App'
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}/>);
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
  test("render correct list of events", () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({
      events: mockData,
    });
    expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    AppWrapper.unmount();
  });
});
