// FUNCIONES: 


 1° EJERCICIO.
function esMayorEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
}
console.log(esMayorEdad(20)); // Devuelve true
console.log(esMayorEdad(16)); // Devuelve false

// 2° EJERCICIO.
function calcularAreaRectangulo(base, altura) {
    let area = base * altura;
    return area
}
console.log(calcularAreaRectangulo(5, 10)); // Devuelve 50
console.log(calcularAreaRectangulo(3, 7)); // Devuelve 21

// 3° EJERCICIO.
function esPalindromo(cadena) {
    let cadenaInvertida = cadena.split("").reverse().join("");
    return cadena === cadenaInvertida;
}
console.log(esPalindromo("radar")); // Devuelve true
console.log(esPalindromo("hola")); // Devuelve false

// 4° EJERCICIO.
function generaNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio;
}
console.log(generaNumeroAleatorio()); // Devuelve un número aleatorio entre 1 y 10
console.log(generaNumeroAleatorio()); // Devuelve otro número aleatorio entre 1 y 10

  