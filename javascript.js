// FUNCIONES: 1° EJERCICIO.
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
console.log(calcularAreaRectangulo(5, 10)); 
console.log(calcularAreaRectangulo(3, 7)); 

// 3° EJERCICIO.
function esPalindromo(cadena) {
    let cadenaInvertida = cadena.split("").reverse().join("");
    return cadena === cadenaInvertida;
}
console.log(esPalindromo("radar")); 
console.log(esPalindromo("hola")); 

// 4° EJERCICIO.
function generaNumeroAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  return numeroAleatorio;
}
console.log(generaNumeroAleatorio()); 
console.log(generaNumeroAleatorio()); 

// EJERCICIOS DE ARREGLOS.
// 1° EJERCICIO.
function obtenerSuma(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma;
}
console.log(obtenerSuma([1, 2, 3, 4, 5]));
console.log(obtenerSuma([10, -5, 8, 3])); 

// 2° EJERCICIO.
function obtenerPares(arreglo) {
    var pares = [];
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        pares.push(arreglo[i]);
      }
    }
    return pares;
}
console.log(obtenerPares([1, 2, 3, 4, 5, 6])); // Devuelve [2, 4, 6]
console.log(obtenerPares([10, 15, 20, 25])); // // Devuelve [10, 20]

// 3° EJERCICIO.
function obtenerPromedioPonderado(notas, pesos) {
    if (notas.length !== pesos.length) {
        // El método throw reanuda la ejecución de un generador al lanzar un error en éste y regresar un objeto con las dos propiedades done y value.
      throw new Error("Los arreglos deben tener la misma longitud.");
    }
    let totalNotas = 0;
    let totalPesos = 0;
    for (let i = 0; i < notas.length; i++) {
      totalNotas += notas[i] * pesos[i];
      totalPesos += pesos[i];
    }
    const promedioPonderado = totalNotas / totalPesos;
    return promedioPonderado;
}
// 4° EJERCICIO.
function obtenerMaximo(arreglo) {
    if (arreglo.length === 0) {
      throw new Error("El arreglo está vacío.");
    }

    let maximo = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > maximo) {
        maximo = arreglo[i];
      }
    }
    return maximo;
}
const numeros = [5, 9, 2, 14, 8, 1];
const maximo = obtenerMaximo(numeros);
console.log("El número máximo es:", maximo);

// EJERCICIOS DE OBJETOS.
// 1° EJERCICIO.

let producto = {
    nombre: "Nombre del producto",
    precio: 0,
    cantidad: 0
  };
  function calculaTotal(producto) {
    return producto.precio * producto.cantidad;
}
let miProducto = {
    nombre: "Camiseta",
    precio: 15,
    cantidad: 2
};

let totalPagar = calculaTotal(miProducto);
console.log("Total a pagar: $" + totalPagar);

// 2° EJERCICIO.

let persona = {
    nombre: "",
    edad: 0,
    profesion: ""
};
// Presentar a la persona
  function presentarPersona(persona) {
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("Profesión: " + persona.profesion);
};
presentarPersona(miPersona);

// 4° EJERCICIO.

function esMayorEdad(persona) {
    return persona.edad >= 18;
};
let resultado = esMayorEdad(miPersona);
console.log(resultado); // Devuelve true si es mayor de edad, de lo contrario false
  