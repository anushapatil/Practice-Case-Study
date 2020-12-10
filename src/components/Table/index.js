import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from './Header'
import Row from './Row'
import TableStyle from './styles'

const Table = ({
  departures,
  departsDescription,
  departsStopId
}) => {
  return (
    <TableStyle className='pl-0 pr-0 pb-3 bg-light bg-secondary'>
      <div className='title d-flex p-3'>
        <h4>{departsDescription}</h4>
        <span>
          <strong>
            Stop #:
          </strong>
          {departsStopId}
        </span>
      </div>
      <Header />
      <Row list={departures} />
    </TableStyle>
  )
}

Table.propTypes = {
  departures: PropTypes.array,
  departsDescription: PropTypes.string,
  departsStopId: PropTypes.number
}

const mapStateToProps = (state) => ({
  departures: state.transit.departures,
  departsDescription: state.transit.departsDescription,
  departsStopId: state.transit.departsStopId
})

export default connect(mapStateToProps)(Table)