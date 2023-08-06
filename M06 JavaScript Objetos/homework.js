/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   Gato = {
      nombre: nombre,
      edad: edad,
      meow: function(){
         return "Meow!"
      }
   };
   return Gato;
};
var MiGato = crearGato("Anna",23)
//var edad = Gato.edad;
console.log(MiGato.nombre)

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   Nuevo = {
      nombre: nombre,
      email: email,
      password: password
   };
   return Nuevo;
};
var Mio = nuevoUsuario("Anna","asschenk","Anni");
console.log(Mio.nombre);

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
   return objeto;
};
var miObjeto = {};
var Ejemplo = agregarPropiedad(miObjeto,"nuevo");
console.log(Ejemplo)

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   if (typeof objeto[metodo] === 'function') {
      objeto[metodo]();
   }
};
var myObject = {
   Analyse: function (){
      console.log("El metodo se llama Analyse")
   }
};
invocarMetodo(myObject, "Analyse")

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   if ("numeroMisterioso" in objetoMisterioso){
   var numeroFinal = objetoMisterioso.numeroMisterioso*5;
   return numeroFinal;
} else {
   return 0;
}
};
var objetoMisterioso = {numeroMisterioso: 5}
var Ergebnis = multiplicarNumeroDesconocidoPorCinco(objetoMisterioso);
console.log(Ergebnis);

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   if (propiedad in objeto){
      delete objeto[propiedad]
   } else {
      return "propiedad no es parte de objeto";
   };
return objeto;
};
var myNewObject = {pais: "Alemania", vida: "buena", idioma: "aleman"};
var resultado = eliminarPropiedad(myNewObject, "pais");
console.log(resultado)

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.email !== undefined && objetoUsuario.email !== null) {
      return true;
   } else {
      return false;
   }
};
var miEmail = {name: "Anna", email: "anna.schenk", age: 23};
var result = tieneEmail(miEmail);
console.log(result)

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return propiedad in objeto;
};
var iLikeObjects = {saludo: "Hallo", name: "Anna", life: "Age"};
var res = tienePropiedad(iLikeObjects, "Age");
console.log(res);

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return objetoUsuario.password === password;    
};
var myUser = {user: "Anna", password: "secret"};
console.log(verificarPassword(myUser, "secret"));


function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   
   objetoUsuario["password"] = nuevaPassword;
   delete objetoUsuario["nuevaPassword"];
   return objetoUsuario;
};
var myPW = {usuario: "Anna", password: "Hola"};
console.log(actualizarPassword(myPW, "Hola123"));

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
};
var misAmigos = {amigos: ["Lucas", "Felipe", "Richard"]};
console.log(agregarAmigo(misAmigos, "Luca"));

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
   objetoMuchosUsuarios[i].esPremium = true;
}

return objetoMuchosUsuarios
};
var objetoMuchosUsuarios = [{usuario1: "nombre1", esPremium: false}, {usuario2: "nombre2", esPremium: false}];
console.log(pasarUsuarioAPremium(objetoMuchosUsuarios));

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   var suma = 0;
   for (var i = 0; i < objetoUsuario.posts.length; i++){
      suma+= objetoUsuario.posts[i].likes;  
   }
   return suma;
};
var myLikes = {nombres: ["Ali", "Baba"], posts: [{post: "post1", likes: 3}, {post: "post2", likes: 2}]};
console.log(sumarLikesDeUsuario(myLikes));

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   let precioFinal = objetoProducto.precio - (objetoProducto.precio * objetoProducto.porcentajeDeDescuento);

   // Add the "calcularPrecioDescuento" property as a function to the "objetoProducto"
   objetoProducto.calcularPrecioDescuento = function () {
      return precioFinal;
   };
   return objetoProducto;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
