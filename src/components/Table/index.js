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
    <TableStyle className='row'>
      <h3>{departsDescription}</h3>
      <span>
        <strong>
          {departsStopId}
        </strong>
      </span>
      <div id="customers" class="Table">
        <Header />
        <Row list={departures} />
      </div>
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
