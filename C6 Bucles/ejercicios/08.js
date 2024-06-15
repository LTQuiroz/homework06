function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:

   switch (true) {
    case (a > 0 && a < 10):
      return true;
    default:
      return false;
  }
}

module.exports = esPositivoOInferiorA10;
