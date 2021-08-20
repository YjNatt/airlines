import React, { useState } from 'react'

const Table = ({ columns, rows, format }) => {
  let currentIndex = 0;
  let currentRows = rows.slice(currentIndex, currentIndex + 25)

  return(
    <div>
      <table>
        <thead>
          <tr>
            {columns.map(col => {
              return <th key={col.property}>{col.name}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => {
            return(
              <tr key={index}>
                <td>{format('airline', row)}</td>
                <td>{format('src', row)}</td>
                <td>{format('dest', row)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <p>Showing {currentIndex + 1} - {currentIndex + 25} of {rows.length} total routes</p>
      </div>
    </div>
  )
}

export default Table