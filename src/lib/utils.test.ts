import { cn } from './utils'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2')
  })

  it('handles conditional classes', () => {
    const condition = true
    expect(cn('class1', condition && 'class2', !condition && 'class3')).toBe('class1 class2')
  })

  it('merges Tailwind classes correctly', () => {
    const result = cn('px-2 py-1', 'px-4')
    expect(result).toContain('px-4')
    expect(result).toContain('py-1')
  })
})