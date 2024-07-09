import { render, screen } from '@testing-library/react'
import InputWithLabel from '@/components/building-blocks/inputs/input-with-label'
import React from 'react'

describe('Testing InputWithLabel component', () => {
  it('should render the label correctly', () => {
    render(<InputWithLabel id="test" label="Test Label" type="text" />) // ARRANGE
    const labelElement = screen.getByText('Test Label') // ACT
    expect(labelElement).toBeInTheDocument() // ASSERT
  })

  it('should render the input with correct type', () => {
    render(<InputWithLabel id="test" label="Test Label" type="password" />) // ARRANGE
    const inputElement = screen.getByLabelText('Test Label') // ACT
    expect(inputElement).toHaveAttribute('type', 'password') // ASSERT
  })

  it('should apply the correct placeholder', () => {
    render(
      <InputWithLabel
        id="test"
        label="Test Label"
        type="text"
        placeHolder="Enter text"
      />
    ) // ARRANGE
    const inputElement = screen.getByLabelText('Test Label') // ACT
    expect(inputElement).toHaveAttribute('placeholder', 'Enter text') // ASSERT
  })

  it('should use label as placeholder if placeHolder is not provided', () => {
    render(<InputWithLabel id="test" label="Test Label" type="text" />) // ARRANGE
    const inputElement = screen.getByLabelText('Test Label') // ACT
    expect(inputElement).toHaveAttribute('placeholder', 'Test Label') // ASSERT
  })
})
