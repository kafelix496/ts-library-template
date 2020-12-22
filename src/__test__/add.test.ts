import add from '../add'

test('Test add function', () => {
  expect(add(-2, 3)).toBe(1)
  expect(add(-2, -3)).toBe(-5)
  expect(add(2, 3)).toBe(5)
})
