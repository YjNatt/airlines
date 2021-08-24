import React from 'react';
import airlineData from '../data';

const Map = ({ routes = [] }) => {
  const locations = routes.map((route, index) => {
    const src = airlineData.airports.find(airport => airport.code === route.src)
    const dest = airlineData.airports.find(airport => airport.code === route.dest)

    const x1 = src.long
    const y1 = src.lat
    const x2 = dest.long
    const y2 = dest.lat

    return (
      <g key={index}>
        <circle className="source" cx={x1} cy={y1}>
          <title>{src.name}</title>
        </circle>
        <circle className="destination" cx={x2} cy={y2}>
          <title>{dest.name}</title>
        </circle>
        <path d={`M${x1} ${y1} L ${x2} ${y2}`} />
      </g>
    );
  });

  return (
    <svg className="map" viewBox="-180 -90 360 180">
      <g transform="scale(1 -1)">
        <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>
        {locations}
      </g>
    </svg>
  )
}

export default Map;