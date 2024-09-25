import { render, screen } from '@testing-library/react'
import Section from './section'
import '@testing-library/jest-dom'

// Mock dos componentes importados
jest.mock('../building-blocks/text/header', () => {
  const MockHeader = ({ text }: { text: string }) => <div>{text}</div>
  MockHeader.displayName = 'MockHeader'
  return MockHeader
})

jest.mock('./card', () => {
  const MockCard = ({
    title,
    description,
    icon,
    navigateTo
  }: {
    title: string
    description: string
    icon: string
    navigateTo: string
  }) => (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{icon}</div>
      <div>{navigateTo}</div>
    </div>
  )
  MockCard.displayName = 'MockCard'
  return MockCard
})

describe('Section', () => {
  const defaultProps = {
    section: {
      title: 'Test Section Title',
      cards: [
        {
          id: 1,
          title: 'Card Title 1',
          description: 'Card Description 1',
          iconSvg: 'icon1'
        },
        {
          id: 2,
          title: 'Card Title 2',
          description: 'Card Description 2',
          iconSvg: 'icon2',
          navigateTo: '/path2'
        }
      ],
      iconSvg: 'section-icon',
      slug: 'test-section'
    }
  }

  it('deve renderizar o componente Section', () => {
    render(<Section {...defaultProps} />)
    expect(screen.getByText('Test Section Title')).toBeInTheDocument()
    expect(screen.getByText('Card Title 1')).toBeInTheDocument()
    expect(screen.getByText('Card Title 2')).toBeInTheDocument()
  })
})
