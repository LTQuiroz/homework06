function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var menor = Math.min(a, b);
  var mayor = Math.max(a, b);


  var producto = 1;


  if (menor <= 0 && mayor >= 0) {
    return 0;
  }


  for (var i = menor; i <= mayor; i++) {
    producto *= i;
  }

  return producto;
}

module.exports = productoEntreNúmeros;