import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('displays the company name', () => {
    render(MainNav)
    const coName = screen.getByText('BDNet')
    expect(coName).toBeInTheDocument()
  })
  it('displays menu navigation items', () => {
    render(MainNav)
    const navItems = screen.getAllByRole('listitem')
    const navTexts = navItems.map((item) => item.textContent)
    expect(navTexts).toEqual([
      'Teams',
      'Locations',
      'Life at BDRET',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe('when the user logs in', () => {
    it('displays the profile picture', async () => {
      render(MainNav)
      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      await userEvent.click(loginButton)

      profileImage = screen.getByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
