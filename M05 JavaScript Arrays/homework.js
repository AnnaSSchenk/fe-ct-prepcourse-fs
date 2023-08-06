/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
};
let miArray = [1,5,3]


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length === 0) {
      return undefined;
   } else {
      return array[array.length -1];
   }
};


function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
    return array.length;
};
let mieglo = [1,4,2,4];


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var resultado = [];

   for (var i = 0; i < array.length; i++) {
    resultado.push(array[i]+1)
   }
   return resultado
};
var myArray = [3,5,3,4];
console.log(incrementarPorUno(myArray));


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
  array.push(elemento);
  return array;
};
var miAr = [1,2,3,4];
console.log(agregarItemAlFinalDelArray(miAr, 5));

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
};
var myArray = [2,3,4,5];
var myElement = 1;
console.log(agregarItemAlComienzoDelArray(myArray, myElement))

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var Newpalabras = palabras.join(" ");
   return Newpalabras;
};
var myArray = ["Hello", "you"];
console.log(dePalabrasAFrase(myArray))



function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
         return true;
      }
   }
   return false;
}


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;

   for (let i = 0; i < arrayOfNums.length; i++) {
      suma += arrayOfNums[i];
   }
   return suma;
};


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var cantidadResultados = resultadosTest.length;

  if (cantidadResultados === 0) {
    return 0;
  }

  var suma = 0;
  for (var i = 0; i < cantidadResultados; i++) {
    suma += resultadosTest[i]; 
  }

  var promedio = suma / cantidadResultados; 

  return promedio; 
};
var Arr = [1,2,3];
console.log(promedioResultadosTest(Arr));


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   if (arrayOfNums.length === 0) {
      return undefined;
   }
   var max = arrayOfNums[0];
   for (var i = 1; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > max) {
         max = arrayOfNums[i]; 
      }
   }
   return max;
};
var Array = [1,8,4,6];
console.log(numeroMasGrande(Array))

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
 
      if (arguments.length === 0) {
         return 0;
      }
   
      // Si se pasa un solo argumento, simplemente retórnalo.
      if (arguments.length === 1) {
         return arguments[0];
      }
   
      // Multiplicar todos los argumentos.
      let producto = 1;
      for (let i = 0; i < arguments.length; i++) {
         producto *= arguments[i];
      }
   
      return producto;
   };

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
  var contador = 0;

  for (var i = 0; i < array.length; i++) {
   if (array[i] > 18) {
      contador++;
   }
  }
  return contador
};
var array = [3,5,3,20,30];
console.log(cuentoElementos(array));


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia >1 && numeroDeDia <7) {
      return "Es dia laboral";
   } else if (numeroDeDia == 1 || numeroDeDia == 7) {
      return "Es fin de semana";
   } else {
      return undefined;
   }
};
console.log(diaDeLaSemana(1))

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numStr = num.toString ();

   return numStr.charAt (0) === '9';
};
console.log(empiezaConNueve(980))

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if (array.length < 2) {
      return true;
   }
   for (var i = 1; i < array.length; i++){
      if (array[i]!==array[0]){
         return false;
      }
   }
   return true;
};


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesPedidos = ["Enero", "Marzo", "Noviembre"];
   var mesesEncontrados = [];

   for (var i=0; i < array.length; i++){
      var mes = array[i];
      if (mesesPedidos.includes(mes)){
         mesesEncontrados.push(mes);
      }
   }
   if (mesesEncontrados.length === 3){
      return mesesEncontrados;
   } else {
      return "No se encontraron los meses pedidos";
   }
};
var mesesArray = ["Enero", "Diciembre", "Octubre", "Marzo", "Noviembre"];
var mesesEncontrados = mesesDelAño(mesesArray);
console.log(mesesDelAño(mesesEncontrados))

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var resultados = [];
   for (var i = 0; i < 11; i++){
      var resultado = 6 * i;
      resultados.push(resultado)
      } return resultados;
   };
var tabla = tablaDelSeis();
console.log(tabla);


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var newArray = [];
   
   for (var i = 0; i < array.length; i++){
      var entry = array[i];
   if (entry>100 && entry<201){
      newArray.push(entry);
   }
} return newArray;
};
var mayor100 = [100,60,200,139,18];
var mayoresA100 =mayorACien(mayor100);
console.log(mayoresA100);

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
let nuevoArreglo = [];
   
for (let i = 0; i < 10; i++) {
   num += 2;
   nuevoArreglo.push(num);
   
   if (num === i) {
      return "Se interrumpió la ejecución"; // Interrumpir y retornar mensaje
   }
} 

return nuevoArreglo;
}


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let nuevoArreglo = [];

   for (let i = 0; i < 10; i++) {
      if (i === 5) {
         continue; // Salta la iteración cuando i es igual a 5
      }
      num += 2;
      nuevoArreglo.push(num);
   }

   return nuevoArreglo;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
