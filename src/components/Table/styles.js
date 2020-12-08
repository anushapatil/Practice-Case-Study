import styled from 'styled-components'

const padding = '15px !important'
const zeroPixel = '0px !important'

const TableStyle = styled.div`
  background-color: #f5f5f4 !important;
  padding-right: ${zeroPixel};
  padding-left: ${zeroPixel};
  padding-bottom: ${padding};
  color: #626462;
  .title {
    h3 {
      padding: ${padding};
    }
    span {
      padding: ${padding};
      margin-left: auto;
      text-align: right;
    }
  }
  .custom-row {
    margin-right: ${zeroPixel};
    margin-left: ${zeroPixel};
    border-bottom: 1px solid #626462;
  }
  .header {
    margin-right: ${zeroPixel};
    margin-left: ${zeroPixel};
    background-color: #ffd200;
    div {
      font-weight: 700;
      padding: ${padding};
      text-align: left;
    }
  }
  .text-align-right {
    text-align: right !important;
  }
  .first-col {
    font-weight: 700;
    padding: ${padding};
    text-align: left;
  }
  .last-col {
    font-weight: 700;
    padding: ${padding};
    text-align: right;
  }
  .second-col {
    padding: ${padding};
    text-align: left;
    font-weight: 400;
  }
`
export default TableStyle
