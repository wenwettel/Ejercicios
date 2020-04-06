//EJERCICIO 4
/*El reloj muestra 'h' horas, 'm' minutos y 's' segundos después de la medianoche. 
Su tarea es hacer que la función ‘milisegundos’’ que devuelva el tiempo convertido
 a milisegundos.
milisegundos(0, 1, 1)     // 61000
*/

const miliSegundos = (h, m, s) => {
  let horas = h * 3600000;
  let minutos = m * 60000;
  let segundos = s * 1000;
  return horas + minutos + segundos;
};

let conversionMili = miliSegundos(0, 1, 1);
console.log(conversionMili);

//EJERCICIO 5
/*Complete la función para que encuentre la media de los tres puntajes que se 
le pasaron y devuelva el valor de letra asociado con esa calificación.

Puntaje numérico                     Nota
90 <= puntaje <= 100                 'A'
80 <= puntaje <90                      'B'
70 <= puntaje <80                      'C'
60 <= puntaje <70                      'D'
0 <= puntaje <60                        'F'
Los valores probados están todos entre 0 y 100. No hay necesidad de verificar 
valores negativos o valores superiores a 100.
Ejemplo: getGrade(95,90,93)    // 'A'
*/

const calificacion = (a, b, c) => {
  let puntaje = (a + b + c) / 3;

  if (90 <= puntaje && puntaje <= 100) {
    return "A";
  } else if (80 <= puntaje && puntaje < 90) {
    return "B";
  } else if (70 <= puntaje && puntaje < 80) {
    return "C";
  } else if (60 <= puntaje && puntaje < 70) {
    return "D";
  } else if (0 <= puntaje && puntaje < 60) {
    return "F";
  }
};

let cualitativa = calificacion(80, 70, 50);

//EJERCICIO 6

/*Hubo una prueba en tu clase y la pasaste.
Felicidades, pero eres una persona ambiciosa. Desea saber si eres mejor que el
estudiante promedio en tu clase. Recibirás un array con los puntajes de los
 exámenes de tus compañeros. ¡Ahora calcule el promedio y compare su puntaje!
Devuelve Verdadero si estás mejor, falso si es es lo contrario

mejorQueElResto([2, 3], 5)        // true

*/

const mejorQueElResto = (x, y) => {
  let acumulador = 0;
  for (let nota of x) acumulador += nota; //esta solo esto dentro del for, por eso no tiene llaves.
  acumulador /= x.length;
  return acumulador < y;
};

console.log(mejorQueElResto([2, 3], 5));

console.log(mejorQueElResto([5, 4, 6], 5));

console.log(mejorQueElResto([7, 6, 8], 8));

//EJERCICIO 7
/*Determine el número total de dígitos en el entero (n> = 0) dado como entrada 
a la función.
Por ejemplo, 9 es un solo dígito, 66 tiene 2 dígitos y 128685 tiene 6 dígitos. 
*/
