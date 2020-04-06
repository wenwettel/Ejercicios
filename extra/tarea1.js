console.warn("EJERCICIO 1");
/* crear una función llamada sumaDePositivos que
  reciba una lista y que devuelva la suma de solo los números 
  positivos de esta lista [1,-4,7,12] => 1 + 7 + 12 = 20
si no hay nada para sumar, devolver 0
sumaDePositivos([1, -4, 7, 12])
*/

const sumaDePositivos = lista => {
  let acumulador = 0;
  for (let valor of lista) {
    if (valor >= 0) {
      acumulador = valor + acumulador;
    }
  }
  return acumulador;
};

let suma = sumaDePositivos([1, -4, 7, -2]);
console.log(suma);

console.warn("EJERCICIO 2");

/*Crear una función que hace las 4 operaciones basicas
 y se llame operacionBasica. Debe recibir 3 argumentos, 
 el primero es una string y los otros dos son números
operacionBasica('+', 4, 7)         // 11
operacionBasica('-', 15, 18)       //  -3
operacionBasica('*', 5, 5)         // 25
operacionBasica('/', 49, 7)        //  7
*/

const operacionBasica = (z = "", x, y) => {
  if (z == "+") {
    return x + y;
  } else if (z == "-") {
    return x - y;
  } else if (z == "*") {
    return x * y;
  } else if (z == "/") {
    return x / y;
  }
};

operacionBasica("+", 8, 8);
operacionBasica("-", 5, 4);
operacionBasica("*", 10, 10);
operacionBasica("/", 150, 48);

//solucion con switch

const operacioneBasicaSwitch = (z = "", x, y) => {
  switch (z) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
  }
};

let operacion = operacioneBasicaSwitch("-", 4, 5);
console.log(operacion);

console.warn("EJERCICIO 3");

/* Un héroe se dirige al castillo para completar su misión.
 Sin embargo, le han dicho que el castillo está rodeado por 
 un par de poderosos dragones. cada dragón necesita 2 balas
  para ser derrotado, nuestro héroe no tiene idea de cuántas 
  balas debería llevar ... Suponiendo que agarrará un número
   específico de balas y avanzará para luchar contra otro 
   número específico de dragones, ¿sobrevivirá?
Devolver verdadero, de lo contrario falso.

hero(10, 5) // true
hero(7, 4) // false
*/

const heroe = (x, y) => {
  return x >= y * 2;
};

let sobrevivira = heroe(8, 4);
console.log(sobrevivira);
