import React, { Fragment } from 'react'

import { NO_DEPARTURE } from './constant'

const Row = ({ list }) => {
  if (list.length === 0) return <div className='first-col'>{NO_DEPARTURE}</div>
  return (
    <Fragment>
      {list && list.map(({ route_short_name = '', terminal = '', description = '', departure_text = '' }, index) =>
        <div key={index} className='row border-bottom ml-0 mr-0'>
          <div className='col-3 first-col p-3 text-left font-weight-bold'>
            {route_short_name + terminal}
          </div>
          <div className='col-5 second-col p-3 text-left'>
            {description}
          </div>
          <div className='col-4 last-col p-3 text-right font-weight-bold'>
            {departure_text}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Row
