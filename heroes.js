let marvel = {
    name : 'Tony Stark',
    codeName : 'Iroman',
    isAlive : false,
    age : 40,
    coords : {
        lat : 35.056,
        lng : -7.0789
    },
    suit : ['Mark I', 'Marl V', 'Hulkbuster'],
    address : {
        zip : '680004',
        location : 'Malibu, California'
    }
}
//Acceder a la informacion del objeto literal
//Op 1. 
console.log(marvel);
console.log(marvel.name);
console.log(marvel['age']);
//Acceder al objeto de una propiedad Ej. Direccion
console.log(marvel.coords);
console.log(`Latitud ${marvel.coords.lat}`);
console.log(`Latitud ${marvel.coords.lng}`);
//1
console.log(`Total trajes ${marvel.suit.length}`);
console.log(`Ultimo traje ${marvel.suit[marvel.suit.length -1]}`);
//Imprimir un mensaje en consola si Iroman esta vivo
marvel.isAlive ? console.log("Esta Vivo") : console.log("Esta Muerto");
//Eliminar una propiedad del objeto literal
delete marvel.age;
console.log(marvel);
//Obtener par de valores de las propiedades
//del objeto literal
const entriesParis = Object.entries(marvel);
console.log(entriesParis);
//Bloqueo de propiedades de un Object Literal
Object.freeze(marvel);
marvel.name = 'Hul';
console.log(marvel);
//Obtener las propiedades del Objeto Literal
const propiedades = Object.getOwnPropertyDescriptor(marvel);
console.log({propiedades});
//Obtener los valores del Objeto Literal
const valores = Object.values(marvel);
console.log({propiedades, valores});
// " #Concatenar Arrays con Spread
// crea una funcion que tome dos arrays como parametros
// y devuelva un nuevo array que contenga todos
// los elementos de ambos arrays. Utiliza el operador
// de propagacion

let frutas1 = ["manzana", "pera", "piña"];
let frutas2 = ["Banano", "quiwi"];

const combinarFrutas = (frutas1, frutas2) => {
    let frutas3 = [...frutas1, ...frutas2];
    return frutas3;
};

console.log(combinarFrutas(frutas1, frutas2));

// EJERCICIO 2
// Crea una funcion que tome un objeto como parametro
// lo clone utilizando el operador de propagacion y
// modifique una propiedad específica

const usuario = {
    nombre: "Juan",
    apellido: "perez",
    id: 102577353,
};

const objeto = (usuario, nuevaPropiedad) => {
    let usuarioClon = { ...usuario };
    usuarioClon = { ...usuarioClon, ...nuevaPropiedad };

    return usuarioClon;
};
const nuevoUsuario = objeto(usuario, { nombre: "Pedro" });
console.log(usuario);
console.log(nuevoUsuario);

// EJERCICIO #3
//Crea una funcion flecha que tome una cantidad
//variable de argumentos y devuelva la suma
// de esos numeros

const otro = (...alguOtro) => {
    let suma = 0;
    for (let i = 0; i < alguOtro.length; i++) {
    suma += alguOtro[i];
}
    return suma;
};
resultado = otro(1, 2, 3, 4, 5);
console.log(resultado);

// EJERCICIO #4
//Crea una funcion que tome dos objetos como parametros
// y devuelva un nuevo objeto que combine las propiedades de ambos
//objetos. si hay propiedades con el mismo nombre, el valor
// del segundo objeto debería prevalecer

const mascota1 = {
    nombre: "michi",
    edad: "1 año",
    color: "negro",
    raza:"persa"
};
const mascota2 = {
    nombre: "michi",
    edad: "1 año",
    color: "blanco",
    tipo: "felino",
};

const mascotas = (mascota1, mascota2) => {
    let mascota = { ...mascota1, ...mascota2 };
    return mascota;
};

console.log(mascotas(mascota1, mascota2));



