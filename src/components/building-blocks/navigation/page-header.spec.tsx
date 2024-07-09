import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import PageHeader from './page-header'

// Mock useSession
jest.mock('next-auth/react', () => ({
  useSession: jest.fn()
}))

describe('PageHeader', () => {
  it('should render correctly when there is an active session', () => {
    // Configure the mock to return an active session
    ;(useSession as jest.Mock).mockReturnValue({
      data: { user: { name: 'John Doe', picture: '/avatar.png' } },
      status: 'authenticated'
    })

    render(<PageHeader />)

    // Check if the links are present
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Public')).toBeInTheDocument()
    expect(screen.getByText('Private')).toBeInTheDocument()
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })

  it('should not render the header when there is no active session', () => {
    // Configure the mock to return an inactive session
    ;(useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'unauthenticated'
    })

    render(<PageHeader />)

    // Check if the header is not present
    expect(screen.queryByRole('banner')).not.toBeInTheDocument()
  })
})
