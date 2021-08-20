import React, { Component, useState } from 'react';
import './App.css';
import airlineData, { getAirlineById, getAirportByCode } from './data';
import Table from './components/Table';
import Select from './components/Select';

const App = () => {
  const [airlineId, setAirlineId] = useState(0);
  const [airportCode, setAirportCode] = useState('')
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

  const airlineSelectHandle = (event) => {
    setAirlineId(Number(event.target.value))
  }

  const airportSelectHandle = (event) => {
    setAirportCode(event.target.value)
  }

  const filterRoutes = () => {
    if (!airlineId  && !airportCode) {
      return airlineData.routes;
    }

    return airlineData.routes.filter(routes => {
      let isSelected;

      if (!airportCode) {
        isSelected = routes.airline === airlineId;
      } else if (!airlineId) {
        isSelected = routes.src === airportCode || routes.dest === airportCode;
      } else {
        isSelected = (routes.src === airportCode || routes.dest === airportCode) &&
                     routes.airline === airlineId;
      }

      return isSelected;
    })
  }

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <p>
        Show routes on
        <Select
          options={airlineData.airlines}
          valueKey='id'
          titleKey='name'
          allTitle='All Airlines'
          value=''
          onSelect={airlineSelectHandle}
        />
        flying in or out of
        <Select
          options={airlineData.airports}
          valueKey='code'
          titleKey='name'
          allTitle='All Airports'
          value=''
          onSelect={airportSelectHandle}
        />
      </p>
      <Table
        className="routes-table"
        columns={columns}
        rows={filterRoutes()}
        format={formatValue}
        perPage={25}
      />
    </section>
  </div>
  )
};

export default App;