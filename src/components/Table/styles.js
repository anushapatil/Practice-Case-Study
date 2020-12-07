import styled from 'styled-components'

const TableStyle = styled.div`
  .Table {
    display: table;
    color: #626462;
    font-size: 1.125rem !important;
  }
  .Title {
    display: table-caption;
    text-align: center;
    font-weight: bold;
    font-size: larger;
  }
  .Heading {
    display: table-row;
    font-weight: bold;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
  }
  .HeaderCell {
    background-color: #ffd200;
    display: table-cell;
    padding: 8px;
  }
  .Row {
    display: table-row;
  }
  .Cell {
    display: table-cell;
    padding: 0.75rem;
    padding-left: 1.5rem !important;
    border-top: none;
    border-bottom: none;
    letter-spacing: 1.28px;
  }
  .Cell:nth-child(even) {
    background-color: #f5f5f4;
  }
  .RouteCell {

  }
  .DestinationCell {

  }
  .DepartsCell {

  }
`
export default TableStyle
