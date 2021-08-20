import React from 'react'

const Table = ({ columns, rows, format }) => {

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
        {rows.map((row, index) => {
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