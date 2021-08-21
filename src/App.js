import React, { useState } from 'react';
import './App.css';
import airlineData, { getAirlineById, getAirportByCode } from './data';
import Table from './components/Table';
import Select from './components/Select';
import Map from './components/Map';

const App = () => {
  const [airlineId, setAirlineId] = useState('all');
  const [airportCode, setAirportCode] = useState('all')

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
    setAirlineId(event.target.value);
  }

  const airportSelectHandle = (event) => {
    setAirportCode(event.target.value);
  }

  const filterRoutes = (() => {
    if (airlineId === 'all' && airportCode === 'all') {
      return airlineData.routes;
    }

    return airlineData.routes.filter(routes => {
      let isSelected;

      if (airportCode === 'all') {
        isSelected = routes.airline === Number(airlineId);
      } else if (airlineId === 'all') {
        isSelected = routes.src === airportCode || routes.dest === airportCode;
      } else {
        isSelected = (routes.src === airportCode || routes.dest === airportCode) &&
                     routes.airline === Number(airlineId);
      }

      return isSelected;
    })
  })();

  const filterAirlines = (() => {
    const availableRoutes = airlineData.routes.filter(route => {
      return route.src === airportCode ||
             route.dest === airportCode ||
             airportCode === 'all'
    });

    return airlineData.airlines.map(airline => {
      const hasRoute = availableRoutes.some(route => route.airline === airline.id)
      return { ...airline, disabled: !hasRoute }
    })
  })();

  const filterAirports = (() => {
    const availableRoutes = airlineData.routes.filter(route => {
      return route.airline === Number(airlineId) ||
             airlineId === 'all'
    });

    return airlineData.airports.map(airport => {
      const hasRoute = availableRoutes.some(route => route.src === airport.code || route.dest === airport.code)
      return { ...airport, disabled: !hasRoute }
    })
  })();

  const resetSelects = (event) => {
    setAirportCode('all')
    setAirlineId('all')
  }

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <Map routes={filterRoutes}/>
      <p>
        Show routes on
        <Select
          options={filterAirlines}
          valueKey='id'
          titleKey='name'
          allTitle='All Airlines'
          value={airlineId}
          onSelect={airlineSelectHandle}
        />
        flying in or out of
        <Select
          options={filterAirports}
          valueKey='code'
          titleKey='name'
          allTitle='All Airports'
          value={airportCode}
          onSelect={airportSelectHandle}
        />
        <button type="button" onClick={resetSelects}>Show All Routes</button>
      </p>
      <Table
        className="routes-table"
        columns={columns}
        rows={filterRoutes}
        format={formatValue}
        perPage={25}
      />
    </section>
  </div>
  )
};

export default App;