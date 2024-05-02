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
