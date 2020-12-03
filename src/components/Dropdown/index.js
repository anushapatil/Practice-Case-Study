import React from 'react'

const styles = { textAlign: 'center', marginBottom: '1.5rem' }
const dropdronStyle = { width: '570px', height: '60px', color: '#8a8b8a', fontSize: '1.4375rem !important' }
const optionsStyle = { fontWeight: 'normal', whiteSpace: 'pre', minHeight: '1.2em', padding: '0px 2px 1px' }

const Dropdown = ({ list = [], callback, value, description, defaultId }) => {
  const dropdownSelected = (event) => {
    const value = event.target.value
    callback(value)
  }
  return (
    <div style={{ ...styles }}>
      <select style={dropdronStyle} onChange={dropdownSelected}>
        {list && list.map(item => 
          <option style={optionsStyle} key={item[value]} value={item[value]} selected={defaultId === item[value]}>
            {item[description]}
          </option>
        )}
      </select>
    </div>
  )
}

export default Dropdown
