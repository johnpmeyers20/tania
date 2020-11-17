import React, { Component } from 'react';
import { render } from 'react-dom';

const TableHeader = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Job</th>
        <th scope="col"></th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
  return (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        <button onClick={() => props.removeCharacter(index)}>Delete</button>
      </td>
    </tr>
  )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  const { characterData, removeCharacter } = props

  return (
    <table className='table text-center table-striped'>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}


export default Table;