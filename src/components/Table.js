import React, { useState } from 'react'

const Table = ({ columns, rows, format }) => {
  let currentRows = rows.slice(0, 25)

  return(
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
  )
}

export default Table