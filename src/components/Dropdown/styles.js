import styled from 'styled-components'

const color = '#626462'

const Select = styled.select`
  padding: 0.375rem 1.75rem;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px;
  appearance: none;
  color: ${color};
  :focus {
    border-color: #51cfff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 151, 208, 0.25);
  }
  :focus::-ms-value {
    color: ${color};
    background-color: #fff;
  }
  :disabled {
    color: ${color};
    background-color: #e3e3e0;
  }
`
export default Select
