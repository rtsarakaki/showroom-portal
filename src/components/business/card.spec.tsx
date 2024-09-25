import { render, screen } from '@testing-library/react'
import Card from '@/components/business/card'
import React from 'react'

describe('Testing Card component', () => {
  it('should render the label correctly', () => {
    render(
      <Card
        key={1}
        title="Test Card"
        description="Testing card"
        icon=""
        navigateTo="/home"
      />
    ) // ARRANGE
    const cardElement = screen.getByText('Test Card') // ACT
    expect(cardElement).toBeInTheDocument() // ASSERT
  })

  it('should render the label correctly no navigate', () => {
    render(
      <Card key={1} title="Test Card" description="Testing card" icon="" />
    ) // ARRANGE
    const cardElement = screen.getByText('Test Card') // ACT
    expect(cardElement).toBeInTheDocument() // ASSERT
  })
})
