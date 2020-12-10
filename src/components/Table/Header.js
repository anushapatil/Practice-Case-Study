import React from 'react'

import { ROUTE, DESTINATION, DEPARTS } from './constant'

const Header = () => {
  return (
    <div className='row ml-0 mr-0 bg-warning'>
      <div className='col-3 p-3 text-left font-weight-bold'>
        {ROUTE}
      </div>
      <div className='col-5 p-3 text-left font-weight-bold'>
        {DESTINATION}
      </div>
      <div className='col-4 p-3 text-right font-weight-bold'>
        {DEPARTS}
      </div>
    </div>
  )
}

export default Header
