import multiply from '../multiply'

test('multiply function works correctly', () => {
  expect(multiply(-2, 3)).toBe(-6)
  expect(multiply(-2, -3)).toBe(6)
  expect(multiply(2, 3)).toBe(6)
})
