/* Tarea con for Of
 */

//EJERCICIO 1 //
/*Necesitamos buscar a la persona con menor edad en la familia.
O sea, quién es el/la más joven de la familia.
Solo necesito saber la edad
*/

let edadesFamilia = [70, 50, 4, 3, 2, 1, 90, 80];

let edadMinima = 100;

for (let valor of edadesFamilia) {
  if (valor < edadMinima) {
    edadMinima = valor;
  }
}
console.log(" El mas joven de casa tiene " + edadMinima + " año");

//EJERCICIO 2//
/*Necesitamos saber si el número 30 existe en la lista
Si el número existe mostrar por consola: Eureka, existo.
Si el número no existe mostrar por consola: Doh!
*/

let lista = [1, 30, 5, 8];

let encontrado = false;

for (let numero of lista) {
  if (numero == 30) {
    encontrado = true;
  }
}
if (encontrado) {
  console.log("Eureka, Existo");
} else {
  console.log(" Doh!");
}

// EJERCICIO 3 //
/*Necesitamos saber cuantas veces se repite el número 5 en la lista.
Mostrar por consola cuantas veces en total aparece en la lista.
Si no aparece mostrar 0
*/

let lista2 = [10, 5, 3, 5, 0, 5];

let totalVeces = 0;

for (let number of lista2) {
  if (number == 5) {
    totalVeces = totalVeces + 1;
  }
}
console.log("El numero 5 se repite " + totalVeces + " veces");
