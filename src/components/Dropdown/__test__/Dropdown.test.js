// Link.react.test.js
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import Dropdown from '../'

const mockRoutesData = [
  {
    agency_id: 0,
    route_id: '000',
    route_label: 'Select route'
  },
  {
  agency_id: 1,
  route_id: '901',
  route_label: 'METRO Blue Line'
}]

// UI testing
test('Snapshot Dropdwons', () => {
  
  const component = renderer.create(
    <Dropdown
      list={mockRoutesData}
      value='route_id'
      description='route_label'
      callback={() => jest.fn()}
      defaultId='0'
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

// DOM testing
test('Selecting option from dropdown should trigger callback', () => {
  // Setup
  const mockCallback = jest.fn()
  const { getByTestId, getAllByTestId } = render(
    <Dropdown
      list={mockRoutesData}
      value='route_id'
      description='route_label'
      callback={mockCallback}
      defaultId='0'
      data-testid='select'
    />
  )

  // Execute
  fireEvent.change(getByTestId('select'), {
    target: { value: '901' },
  })

  // Assert
  let options = getAllByTestId('select-option')
  expect(options[0].selected).toBeFalsy()
  expect(options[1].selected).toBeTruthy()
  expect(mockCallback).toHaveBeenCalledWith('901')
})

