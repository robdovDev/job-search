import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('displays the company name', () => {
    render(MainNav)
    const coName = screen.getByText('BDRET Careers')
    expect(coName).toBeInTheDocument()
  })
})
