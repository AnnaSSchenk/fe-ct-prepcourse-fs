/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var primeraLetraMayuscula = nombre.charAt(0).toUpperCase();

   var restoNombre = nombre.slice(1);

   var nombreConPrimeraMayuscula = primeraLetraMayuscula + restoNombre;
 
   return nombreConPrimeraMayuscula;
};
var funcionNombre = mayuscula("anna");
console.log(funcionNombre)

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
};
function miCallBack (){
   return "This is my CallBack";
}
//invocarCallback(miCallBack);
console.log(miCallBack())


function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
 return cb(num1, num2)
};

function suma(a, b) {
   return a+b;
}

function resta (a,b) {
   return a-b;
};

var resultadoSuma = operacionMatematica(2,3,suma);
console.log(resultadoSuma);


function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var sumaTotal = arrayOfNumbers.reduce((acumulador, numero)=> acumulador + numero, 0);
   cb(sumaTotal);
};
function callBackErgebnis(resultado){
   console.log(resultado);
};

var numeros = [1,4,3,4];
sumarArray(numeros,callBackErgebnis)

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (var i =0; i < array.length; i++){
      cb(array[i]);
   }
}

function imprimirElemento(elemento){
   console.log(elemento);
}

let ar = [1,4,2,5,6];
let result = forEach(ar,imprimirElemento);
console.log(result)

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var newArray = [];
   for (let i =0; i < array.length; i++){
      newArray.push(cb(array[i]));
   }; return newArray;
};
function retornar (elemento){
   return elemento;
};
var arr = [3,5,3,5,8];
var Result = map(arr,retornar);
console.log(Result);

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var newArreglo = arrayOfStrings.filter((elemento) => elemento.startsWith("a")|| elemento.startsWith("A"));
   
   return newArreglo;
};

var myArray = ["Hi", "anna", "nice", "Amelie"];
var res = filter(myArray);
console.log(res)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
