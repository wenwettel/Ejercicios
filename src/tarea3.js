//EJERCICIO 1
/*Escribir una función que se llame min y que devuelva
 o retorne el valor minimo entre dos numeros cualquiera.
  Ejemplo: minimo(5,3) = 3
 */

function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

let minimoNumero = min(2, 8);
console.log(minimoNumero);

//EJERCICIO 2
/*Escribir una función que se llame cuadrado 
y que devuelve o retorne el cuadrado de un número.
 Ejemplo: cuadrado(6) = 36
*/

const cuadrado = x => {
  return x * x;
};

let resultado = cuadrado(8);
console.log(resultado);

// EJERCICIO PLUS
/* Escribe una función que se llame mas grandeQue y 
reciba dos argumentos. El primer argumento es un 
array cualquiera por ejemplo [3, 8, 10] y un numero 
por ejemplo 4. 
Debe devolver verdadero si la cantidad de elementos en el array 
es mas grande que el numero.De lo contrario debe devolver false
 Ejemplo:
masGrandeQue([3,8,10], 4) = false
masGrandeQue([3,8,10], 2) = true
 */

const masGrandeQue = (x, y) => {
  if (x.length > y) {
    return true;
  } else {
    return false;
  }
};

let respuesta = masGrandeQue([5, 4, 3], 5);
console.log(respuesta);

/*ejemplo de lo que hace una comparacion: siempre te va a dar
verdadero o falso. 
*/

console.log([5, 4, 3].length > 2);

//Por lo tanto RESOLUCION CORTA ********:)

const masGrandeQue1 = (x, y) => {
  return x.length > y; //no es necesario el if xq es redudante
};

let respuesta1 = masGrandeQue1([5, 4, 3], 2);
