console.log("Soy la tarea bu?");
//EJERCICIO 1 //
/*Necesitamos buscar a la persona con menor edad en la familia.
O sea, quién es el/la más joven de la familia.
Solo necesito saber la edad
*/

let edadesFamilia = [70, 50, 4, 3, 2, 1, 90, 80];

let edadMinima = 100;

for (let i = 0; i < edadesFamilia.length; i = i + 1) {
  if (edadesFamilia[i] < edadMinima) {
    edadMinima = edadesFamilia[i];
  }
}
console.log("El mas chiquis de casa tiene " + edadMinima + " añito");

//EJERCICIO 2//
/*Necesitamos saber si el número 30 existe en la lista
Si el número existe mostrar por consola: Eureka, existo.
Si el número no existe mostrar por consola: Doh!
*/

let lista = [1, 30, 5, 8];

let encontrado = false;

for (let j = 0; j < lista.length; j = j + 1) {
  if (lista[j] == 30) {
    encontrado = true;
  }
}

if (encontrado) {
  console.log("Eureka, existo");
} else {
  console.log("DOH!");
}

// EJERCICIO 3 //
/*Necesitamos saber cuantas veces se repite el número 5 en la lista.
Mostrar por consola cuantas veces en total aparece en la lista.
Si no aparece mostrar 0
*/

let lista2 = [10, 5, 3, 5, 0, 5];

let totalVeces = 0;

for (let k = 0; k < lista2.length; k = k + 1) {
  if (lista2[k] == 5) {
    totalVeces = 1 + totalVeces;
  }
}
console.log("el numero 5 aparece en la lista " + totalVeces + " veces");
