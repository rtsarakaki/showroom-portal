import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import Home from './page'
import '@testing-library/jest-dom'

// Mock do useSession
jest.mock('next-auth/react', () => ({
  useSession: jest.fn()
}))

describe('Home', () => {
  it('deve renderizar o botão Go to Login quando não há sessão', () => {
    ;(useSession as jest.Mock).mockReturnValue({ data: null })
    render(<Home />)
    expect(screen.getByText('Go to Login')).toBeInTheDocument()
  })

  it('deve renderizar as informações da sessão quando há sessão', () => {
    const sessionData: { user: { name: string; email: string } } = {
      user: { name: 'John Doe', email: 'john@example.com' }
    }
    ;(useSession as jest.Mock).mockReturnValue({ data: sessionData })
    render(<Home />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument()
  })
})
