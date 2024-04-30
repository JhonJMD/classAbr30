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
console.log(`Ultimo traje ${marvel.suit[marvel.length -1]}`);