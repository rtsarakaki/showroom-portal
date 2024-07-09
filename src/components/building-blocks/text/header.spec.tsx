import { render } from '@testing-library/react'
import Header from './header'

describe('Header Component', () => {
  it('should render the text correctly', () => {
    const { getByText } = render(<Header text="Test Header" size="3" />)
    expect(getByText('Test Header')).toBeInTheDocument()
  })

  it('should apply the correct class for size 5', () => {
    const { container } = render(<Header text="Test Header" size="5" />)
    expect(container.firstChild).toHaveClass('text-5xl')
  })

  it('should apply the correct class for size 4', () => {
    const { container } = render(<Header text="Test Header" size="4" />)
    expect(container.firstChild).toHaveClass('text-4xl')
  })

  it('should apply the correct class for size 3', () => {
    const { container } = render(<Header text="Test Header" size="3" />)
    expect(container.firstChild).toHaveClass('text-3xl')
  })

  it('should apply the correct class for size 2', () => {
    const { container } = render(<Header text="Test Header" size="2" />)
    expect(container.firstChild).toHaveClass('text-2xl')
  })

  it('should not apply the text-1xl class for size 1', () => {
    const { container } = render(<Header text="Test Header" size="1" />)
    expect(container.firstChild).not.toHaveClass('text-1xl')
  })

  it('should apply the additional class passed via className', () => {
    const { container } = render(
      <Header text="Test Header" size="3" className="extra-class" />
    )
    expect(container.firstChild).toHaveClass('extra-class')
  })
})
