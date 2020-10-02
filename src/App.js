import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOEvents from './NumberOfEvents';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CitySearch />
        <EventList />
        <NumberOEvents />
      </div>
    );
  }
}

export default App;
