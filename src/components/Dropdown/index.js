import React from 'react'

const Dropdown = ({ list = [], callback }) => {
  const dropdownSelected = (event) => {
    const value = event.target.value
    callback(value)
  }
  return (
    <select onChange={dropdownSelected}>
      {list && list.map(({ Route, Description }) => 
        <option key={Route} value={Route}>
          {Description}
        </option>
      )}
    </select>
  )
}

export default Dropdown
