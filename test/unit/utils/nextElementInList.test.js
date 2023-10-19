import nextElementInList from '@/utils/nextElementInList'

describe('nextElementInList', () => {
  it('locates element in list and returns next element', () => {
    const list = ['A', 'B', 'C']
    const value = 'A'
    const result = nextElementInList(list, value)
    expect(result).toBe('B')
  })

  describe('when passed element is last in the list', () => {
    it('returns the first element in the list', () => {
      const list = ['A', 'B', 'C']
      const value = 'C'
      const result = nextElementInList(list, value)
      expect(result).toBe('A')
    })
  })
})
