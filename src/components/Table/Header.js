import React from 'react'

const headers = [ 'ROUTE', 'DESTINATION', 'DEPARTS']

const Header = () => {
  return (
    <div class="Heading">
      {headers.map((data, index) =>
        <div class="HeaderCell" key={index}>
          <p>{data}</p>
        </div>
      )}
    </div>
  )
}

export default Header
