const soma = (a, b) => a + b;

test('is i call soma function with 4 and 5 it shoult return 9', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
