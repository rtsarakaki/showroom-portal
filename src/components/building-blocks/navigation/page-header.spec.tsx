import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageHeader from './page-header'
import { Header as HeaderType } from '@/types/header'

describe('PageHeader', () => {
  const defaultProps: { header: HeaderType; session: any } = {
    header: {
      title: 'Test Header Title',
      logo: '',
      slug: '',
      buttonLogout: '',
      menus: [
        {
          id: '1',
          title: 'Menu 1',
          navigateTo: '/menu1'
        }
      ],
      profileMenus: [
        {
          id: '1',
          title: 'Profile Menu 1',
          navigateTo: '/profile-menu1',
          iconSvg: ''
        }
      ]
    },
    session: {
      user: {
        name: 'Test User',
        picture: ''
      }
    }
  }

  it('should render pageHeader component', () => {
    render(<PageHeader {...defaultProps} />)
    expect(screen.getByText('Test Header Title')).toBeInTheDocument()
  })
})
