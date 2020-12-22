import multiply from '../multiply'

test('Test multiply function', () => {
  expect(multiply(-2, 3)).toBe(-6)
  expect(multiply(-2, -3)).toBe(6)
  expect(multiply(2, 3)).toBe(6)
})
