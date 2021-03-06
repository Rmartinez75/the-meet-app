import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';

const locations = extractLocations(mockData);

describe('<CitySearch locations={locations} /> component', () => {
  test('render text input', () => {
    const CitySearchWrapper = shallow(<CitySearch locations={locations} />);
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });
  test('renders a list of suggestions', () => {
    const CitySearchWrapper = shallow(<CitySearch locations={locations} />);
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });
  test('renders text input correctly', () => {
    const CitySearchWrapper = shallow(<CitySearch locations={locations} />);
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });
  test('change state when text input changes', () => {
    const CitySearchWrapper = shallow(<CitySearch locations={locations} />);
    const eventObject = { target: { value: 'Berlin' } };
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });
  test('render list of suggestions correctly', () => {
    const CitySearchWrapper = shallow(<CitySearch locations={locations} />);
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length +1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i].name_string);
    }
  });
  test('selecting a suggestion should change query state', () => {
    const CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} />);
    CitySearchWrapper.setState({
      suggestions: locations,
    });

    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
  });
});

describe('<CitySearch /> integration', () => {
  test("get a list of cities when the user searches for Berlin", () => {
    const CitySearchWrapper = shallow(<CitySearch locations={locations} />);
    CitySearchWrapper.find(".city").simulate("change", {
      target: { value: "Berlin" },
    });
    expect(CitySearchWrapper.state("suggestions")).toEqual(["Berlin, Germany"]);
  });
});
