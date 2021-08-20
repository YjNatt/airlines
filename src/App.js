import React, { Component } from 'react';
import airlineData, { getAirlineById, getAirportByCode } from './data';
import './App.css';

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <p>
      Welcome to the app!
    </p>
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
              <td>{route.airline}</td>
              <td>{route.src}</td>
              <td>{route.dest}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </section>
</div>
)

export default App;