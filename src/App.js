import React, { Component } from 'react';
import './App.css';
import airlineData, { getAirlineById, getAirportByCode } from './data';
import Table from './components/Table';

const App = () => {
  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'}
  ]

  const formatValue = (property, value) => {
    let fetchedValue;

    if (property === 'airline') {
      fetchedValue = getAirlineById(value[property]);
    } else {
      fetchedValue = getAirportByCode(value[property]);
    }

    return fetchedValue.name;
  }

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <Table
        className="routes-table"
        columns={columns}
        rows={airlineData.routes}
        format={formatValue}
        perPage={25}
      />
    </section>
  </div>
  )
};

export default App;