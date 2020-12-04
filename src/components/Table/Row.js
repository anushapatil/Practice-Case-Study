import React from 'react'

import Cell from './Cell'
import { NO_DEPARTURE } from './constant'

const Row = ({ list }) => {
  if (list.length === 0) return <Cell data={NO_DEPARTURE} />
  return (
    <div>
      {list && list.map(({
        route_short_name = '',
        terminal = '',
        description = '',
        departure_text = ''
      }, index) =>
        <div key={index} class="Row">
          <Cell data={route_short_name + terminal} />
          <Cell data={description} />
          <Cell data={departure_text} />
        </div>
      )}
    </div>
  )
}

export default Row
