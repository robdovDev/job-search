import { nextTick } from 'vue'
import { render, screen } from '@testing-library/vue'

import HeadLine from '@/components/job_search/HeadLine.vue'

describe('HeadLine', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('displays introductory action verb', () => {
    render(HeadLine)

    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i
    })
    expect(actionPhrase).toBeInTheDocument()
  })

  it('changes action verb at a consistent interval', () => {
    const setInterval = vi.fn()
    vi.stubGlobal('setInterval', setInterval)

    render(HeadLine)
    expect(setInterval).toHaveBeenCalled()
    vi.unstubAllGlobals()
  })

  it('swaps action verb after interval', async () => {
    render(HeadLine)
    vi.advanceTimersToNextTimer()

    await nextTick()
    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i
    })
    expect(actionPhrase).toBeInTheDocument()
  })

  it('removes interval when component disappears', () => {
    const clearInterval = vi.fn()
    vi.stubGlobal('clearInterval', clearInterval)

    const { unmount } = render(HeadLine)
    unmount()
    expect(clearInterval).toHaveBeenCalled()
    vi.unstubAllGlobals()
  })
})
