import React, { useState } from 'react'

const Table = ({ columns, rows, format, perPage }) => {
  const [rowIndex, setRowIndex] = useState(0);
  let currentRows = rows.slice(rowIndex, rowIndex + perPage)

  const nextPageHandle = (event) => {
    setRowIndex(rowIndex + perPage)
  }

  const prevPageHandle = (event) => {
    setRowIndex(rowIndex - perPage)
  }

  const prevPageButtonDisable = () => {
    return rowIndex - perPage < 0
  }

  const nextPageButtonDisable = () => {
    return rowIndex + perPage >= rows.length
  }

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
        <p>Showing {rowIndex + 1} - {rowIndex + perPage} of {rows.length} total routes</p>
        <button type="button" disabled={prevPageButtonDisable()} onClick={prevPageHandle}>Previous Page</button>
        <button type="button" disabled={nextPageButtonDisable()} onClick={nextPageHandle}>Next Page</button>
      </div>
    </div>
  )
}

export default Table