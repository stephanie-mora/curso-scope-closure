// Variables
var a; // Declaración de la variable nombrada "a"
var b = b; // Declaramos y asignamos una variable al mismo tiempo 

// Reasignacion También podemos reasignar una variable existente y redeclarar variables 
// Trabajando con las variables previamente declaradas:
b = 'bb'; // Reasignación
var a = 'aa'; // Redeclaración 

// Global Scope
// Cualquier variable en el documento pasará a ser variable global.

// Esto nos dice que las variables deben de estar declaradas dentro del documento pero no dentro de un 
// bloque para que estén dentro del Global Scope y puedan ser utilizados dentro de otros bloques
var fruit = 'Apple'; // Variable asignada en Global scope

// Leyendo el valor directamente desde un console.log
console.log(fruit);

// Leyendo la variable desde dentro de una función
function bestFruit(){
    console.log(fruit);
}

bestFruit(); // Mandando a llamar nuestra función

// Tener cuidado al momento de declarar
function countries(){
    country = 'Colombia'; // No se define el scope y se toma como Global
    console.log(country);
}

// Por lo tanto se imprime dos veces la palabra 'Colombia'
countries();
console.log(country);