import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('displays the company name', () => {
    render(MainNav)
    const coName = screen.getByText('BDRET Careers')
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
})
