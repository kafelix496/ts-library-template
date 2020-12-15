import add from '../add'

test('test add', () => {
  expect(add(2, 3)).toBe(5)
  expect(add(-3, 3)).toBe(0)
})
