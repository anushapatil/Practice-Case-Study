import React from 'react'

import Select from './styles'

const Dropdown = ({ list = [], callback, value, description, defaultId }) => {
  const dropdownSelected = (event) => {
    const value = event.target.value
    callback(value)
  }
  return (
    <div className='d-flex justify-content-center'>
      <Select onChange={dropdownSelected}>
        {list && list.map(item => 
          <option key={item[value]} value={item[value]} selected={defaultId === item[value]}>
            {item[description]}
          </option>
        )}
      </Select>
    </div>
  )
}

export default Dropdown
