import React, { Component } from 'react';
import airlineData, { getAirlineById, getAirportByCode } from './data';
import './App.css';

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <table>
      <thead>
        <tr>
          <th>Airline</th>
          <th>Source Airport</th>
          <th>Destination Airport</th>
        </tr>
      </thead>
      <tbody>
        {airlineData.routes.map((route, index) => {
          return(
            <tr key={index}>
              <td>{getAirlineById(route.airline).name}</td>
              <td>{getAirportByCode(route.src).name}</td>
              <td>{getAirportByCode(route.dest).name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </section>
</div>
)

export default App;