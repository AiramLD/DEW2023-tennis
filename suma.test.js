const {suma,resta, multiplicacion} = require('./suma');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
}); 

test('sumar 11 + 22 es igual a 33', () => {
    expect(suma(11, 22)).toBe(33);
  }); 
  test('restar 5 - 2  es igual a 3', () => {
    expect(resta(5, 2)).toBe(3);
  }); 
  test('producto de 4 * 0 es igual a 0', () =>  {
    expect(multiplicacion(4, 0)).toBe(0);
  });