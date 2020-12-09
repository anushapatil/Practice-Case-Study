import React, { Fragment } from 'react'

import { NO_DEPARTURE } from './constant'

const Row = ({ list }) => {
  if (list.length === 0) return <div className='first-col'>{NO_DEPARTURE}</div>
  return (
    <Fragment>
      {list && list.map(({ route_short_name = '', terminal = '', description = '', departure_text = '' }, index) =>
        <div key={index} className='row custom-row'>
          <div className='col-lg-2 first-col'>
            {route_short_name + terminal}
          </div>
          <div className='col-lg-7 second-col'>
            {description}
          </div>
          <div className='col-lg-3 last-col'>
            {departure_text}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Row
