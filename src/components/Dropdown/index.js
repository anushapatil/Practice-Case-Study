import React from 'react'

import Select from './styles'

const Dropdown = ({ list = [], callback, value, description, defaultId }) => {
  const dropdownSelected = (event) => {
    const value = event.target.value
    callback(value)
  }
  return (
    <div className='justify-content-center row mb-3'>
      <Select className='col-8 border border-secondary' onChange={dropdownSelected}>
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
