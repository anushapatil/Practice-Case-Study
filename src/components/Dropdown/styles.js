import styled from 'styled-components'

const Select = styled.select`
  display: inline-block;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1.4375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #626462;
  vertical-align: middle;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px;
  background-color: #fff;
  border: 1px solid #e3e3e0;
  border-radius: 0;
  appearance: none;
  @media (max-width: 1200px) {
    font-size: calc(1.26875rem + 0.225vw);
  }
  @media (min-width: 768px) {
    max-width: 570px;
    margin: 0 auto 1rem auto; 
  }
  @media (min-width: 992px) {
    width: 521px;
  }
  :focus {
    border-color: #51cfff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 151, 208, 0.25);
  }
  :focus::-ms-value {
    color: #626462;
    background-color: #fff;
  }
  :disabled {
    color: #626462;
    background-color: #e3e3e0;
  }
`
export default Select
