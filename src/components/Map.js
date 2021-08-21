import React from 'react';
import airlineData from '../data';

const Map = ({ routes = [] }) => {
  const locations = routes.map(route => {
    const src = airlineData.airports.find(airport => airport.code === route.src)
    const dest = airlineData.airports.find(airport => airport.code === route.dest)

    return {
      x1: src.long,
      y1: src.lat,
      x2: dest.long,
      y2: dest.lat,
    };
  });

  return (
    <svg className="map" viewBox="-180 -90 360 180">
      <g transform="scale(1 -1)">
        <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>

        {locations.map(({x1, y1, x2, y2}, index) => {

          return (

            <g key={index}>
              <circle className="source" cx={x1} cy={y1}>
                <title></title>
              </circle>
              <circle className="destination" cx={x2} cy={y2}>
                <title></title>
              </circle>
              <path d={`M${x1} ${y1} L ${x2} ${y2}`} />
            </g>
          )
        })}


      </g>
    </svg>
  )
}

        //{/* for each route */}
        //<g key="">
        //  <circle className="source" cx={x1} cy={y1}>
        //    <title></title>
        //  </circle>
        //  <circle className="destination" cx={x1} cy={y1}>
        //    <title></title>
        //  </circle>
        //  <path d={`M${x1} ${y1} L ${x2} ${y2}`} />
        //</g>
        //{/* end route */}
export default Map;