// EJERCICIO 1
/*Hacer una función que se llama esPar, que reciba
 un número y me devuelve true si es par y false si 
 es impar. Recordar que tienen la operacion resto (%)
Ejemplo: esPar(2)  // true    esPar(1)  // fals
*/

const esPar = x => {
  return x % 2 === 0;
};

let par = esPar(21);
console.log(par);

// EJERCICIO 2
/*Dada un array de enteros como strings y números,
 devuelve la suma de los valores del array como si
  todos fueran números.
Ejemplo: sumaMixta([9, 3, '7', '3']) // 9+3+7+3 = 22 
*/

const sumaMixta = x => {
  let suma = 0;
  for (let valor of x) {
    suma = Number(valor) + suma;
  }
  return suma;
};

let resultadoDeSuma = sumaMixta([9, 3, "7", "3"]);
console.log(resultadoDeSuma);
