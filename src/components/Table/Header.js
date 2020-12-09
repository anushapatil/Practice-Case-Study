import React from 'react'

import { ROUTE, DESTINATION, DEPARTS } from './constant'

const Header = () => {
  return (
    <div className='row header'>
      <div className='col-lg-2'>
        {ROUTE}
      </div>
      <div className='col-lg-7'>
        {DESTINATION}
      </div>
      <div className='col-lg-3 text-align-right'>
        {DEPARTS}
      </div>
    </div>
  )
}

export default Header
