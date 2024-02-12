alert('¡Bienvenidos a la página oficial de Meghan Trainor!');

let numeroUno = 10;
let numeroDos = 7;

let suma = numeroUno + numeroDos;
console.log(suma);

let resta = numeroDos - numeroUno;
console.log(resta);

let producto = numeroUno * numeroDos;
console.log(producto);

let division = numeroDos / numeroUno;
console.log(division);

let resto = numeroDos % numeroUno;
console.log(resto);

let nombre = "Meghan";
let apellido = "Trainor";

let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

let unColor = "Rosa"

if (unColor == "Rosa"){
    console.log("El color es Rosa");
}else{
    console.log("El color NO es Rosa");
}

/*
let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else{
    alert("Nombre de usuario ingresado " + nombreUsuario);
}
*/

//&&
let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if ((nombreIngresado !="") && (apellidoIngresado !="")) {
    alert("Nombre: "+nombreIngresado +"Apellido: "+apellidoIngresado);
}else {
    alert("Error: Ingresar nombre y apellido");
}


//||
let album = prompt("Ingresar albúm");
if ((album == "TITLE") || (album == "Title")) {
    alert("El albúm ingresado es Title");
}else {
    alert("El albúm ingresado NO ES Title")
}

//&& y ||
/*let nombreIngresado = prompt("Ingresar nombre");
if ((nombreIngresado !="") && (nombreIngresado == "MEGHAN") || (nombreIngresado == "Meghan")){
    alert("Hola Meghan");
}else {
    alert("Error: Ingresar nombre valido");
}
*/

/*
let nombreIngresadoo = prompt("Ingresar nombre");
if ((nombreIngresadoo !="") && ((nombreIngresadoo == "MEGHAN") || (nombreIngresadoo == "Meghan"))){
    alert("Hola Meghan");
}else {
    alert("Error: Ingresar nombre valido");
}
*/

//CICLOS E ITERACIONES
/*
for (let i = 0; i < 4; i ++) {
    alert (i);
}
*/

/*
const NUMERO =5;
for (let i =0; i <=10; i ++){
    const RESULTADO = NUMERO * i;
    console.log(NUMERO + " x " + i + "=" +RESULTADO);
}
*/

/*
//turnos
for (let i = 1; i <= 5; i ++) {
    let ingresarNombre = prompt("Ingresar nombre");
    alert(" Turno Nª "+i+" Nombre: "+ingresarNombre);
}

//break
for (let i = 1; i <= 7; i ++) {
    if(i == 5){
        break;
    }
    alert(i);
}
//continue
for (let i = 1; i <= 7; i ++) {
    if(i == 5){
        continue;
    }
    alert(i);
}
*/

//while ESC
/*
let entrada = prompt("Ingresar un dato");
while(entrada != "ESC"){
    alert("El usuario ingresó "+ entrada);
    entrada = prompt("Ingresar otro dato");
}
*/

//FUNCIONES
function saludar() {
    console.log("¡Hola fan de Meghan Trainor!");
}

saludar ();


let cancionIngresada = prompt("Ingresar canción")
alert("La canción ingresada es " + cancionIngresada)

/*
//si queremos repetir 2 veces, copiar y pegar
cancionIngresada = prompt("Ingresar canción")
alert("La canción ingresada es " + cancionIngresada)
cancionIngresada = prompt("Ingresar canción")
alert("La canción ingresada es " + cancionIngresada)
*/

function solicitarNombre(){
    let cancionIngresada   = prompt("Ingresar canción")
    alert("La canción ingresada es " + cancionIngresada)
}

function saludarPersona (nombre){
    console.log("Hola, "+ nombre + "¿Cómo estás?");
}

saludarPersona("Meghan");

/*
//VARIABLE LOCAL
function ingresarNombre (){
    let ingresoDeNombre = prompt("Ingresar nombre:");
    console.log("El nombre del sujeto es: " + ingresoDeNombre);
}

ingresarNombre();
//ingresarNombre();
*/

/*
//VARIABLE GLOBAL
let ingresoDeNombre = prompt("Ingresar nombre:");
let ingresoDeApellido = prompt("Ingresar apellido:");
let ingresoDeEdad = parseInt(prompt("Ingresar edad"));

function ingresarDatos (nombre, apellido, edad){
    console.log("El nombre del sujeto es: " + nombre + " El apellido es: " + apellido + " Tiene " + edad + "años");
}

ingresarDatos(ingresoDeNombre, ingresoDeApellido, ingresoDeEdad);
*/

function comprobarEdad(){
    const EDAD = parseInt(prompt("Ingresar edad"));

    if (EDAD >= 18){
        return "Es mayor de EDAD"
    } else{
        return "No es mayor de EDAD"
    }
}
const resultadoEdad = comprobarEdad();
console.log(resultadoEdad);

//OBJECTOS
let ThankYou  ={
    firstSong: "Watch me do",
    secondSong: "Me too",
    thirdSong: "NO",
};

console.log(ThankYou);
console.log(ThankYou.thirdSong);

const artista ={
    name: "",
    surname: "",
    nationaly: "",
}

artista.name = "Meghan";
artista.surname = "Trainor";
artista.nationaly = "American";

console.log(artista);

artista ["name"] = "Meghan";

console.log(artista)

//Constructores

function Albumes(lista, cancion, artista, nacionalidad){
    this.lista = lista
    this.cancion = cancion
    this.artista = artista
    this.nacionalidad = nacionalidad
}

const ALBUM_UNO = new Albumes(1, "Watch Me Do", "Meghan", "Amerciana")
const ALBUM_DOS = new Albumes(2, "Me Too", "Meghan", "Amerciana")


console.log(ALBUM_UNO);
console.log(ALBUM_DOS);

//ALBUM_DOS.cancion = "NO"
ALBUM_DOS["cancion"] = "NO"
console.log(ALBUM_DOS);


const IVA = 1.21;

function Producto(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.precioConIVA = function(){
        let precioFinal = this.precio * IVA
        return "$" + precioFinal
    }
}

const PRODUCTO_UNO = new Producto("ThankYou_Albúm", 34000, 2);
const PRODUCTO_DOS = new Producto("TakinItBack_Albúm", 27500, 2);


console.log(PRODUCTO_UNO);
console.log(PRODUCTO_UNO.precioConIVA())
console.log(PRODUCTO_DOS.precioConIVA())

//JS
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`) //"hola" + variable + "me llamo"
    }
}

const persona1 = new Persona("Meghan", 31);
const persona2 = new Persona("Lana", 28);

persona1.saludar();
persona2.saludar();

//ARRAYS

//Acceso al Array
const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]) // 1;
console.log(numeros[3]) // 4;
let resultado = numeros [1] + numeros [2]
console.log(resultado) //5


//Recorrido del Array
/*
const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
}
*/

//Length
/*
const miArray = ["marca", 3, "palabra"];
console.log(miArray.length); //imprime 3

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < numeros.length; i++) {
    alert(numeros[i]);
}
*/

//Agregar elementos
/*
const miArray = ["marca", 3, "palabra"]
miArray.push('otro elemento')
console.log(miArray.length) //4
console.log(miArray)

//otra variante

const miArray = ["marca", 3, "palabra"]
miArray.unshift('otro elemento')
console.log(miArray)
*/

//QUITAR ELEMENTOS
//POP Y SHIFT
const canciones = ["Wave", "All The Ways", "Me Too", "Dear Future Husband"]
//eliminar el ulitmo elemento
canciones.pop()
console.log(canciones)

//eliminar el primer elemento
canciones.shift()
console.log(canciones)


//splice para elminiar uno o varios elementos

const titulo = ['Title', 'Thank You', 'Treat Myself', 'Takin It Back', 'The Love Train'];
titulo.splice(1, 2)
console.log(titulo)


//JOIN

const nombres = ["Meghan", "Nicki", "Baron", "Dua"]
console.log(nombres.join(", "))
console.log(nombres.join("*"))


//Concat

const perros = ["Pepper", "Connor"]
const gatos = ["Amy", "Catriel", "Kity"]
const mascotas = perros.concat(gatos)
console.log(mascotas)


//Slice

const musica = ["Made You Look", "All About That Bass", "Lips Are Movin", "Me Too", "Mother"];
const title = musica.slice(1, 3);
console.log(title)


//IndexOf
const artistas = ["Meghan", "Lana Del Rey", "Dua Lipa", "Nicki Minaj", "Aurora"];

console.log(artistas.indexOf("Meghan"))
console.log(artistas.indexOf("Dua Lipa"))
console.log(artistas.indexOf("Madonna"))


//Includes

console.log(artistas.includes("Meghan"))
console.log(artistas.includes("Dua Lipa"))
console.log(artistas.includes("Madonna"))


//Reverse

artistas.reverse()
console.log(artistas)


//Arrays de objectos
/*
const objecto1 = {id: 1, producto: "Arroz"};
const array = [objecto1, {id: 2, producto: "Fideo"}];
array.push({id: 3, producto: "Pan"});

const productos = [{ id: 1, producto: "Arroz"},
{ id: 2, producto: "Fideos"},
{ id: 3, producto: "Pan"}];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}
*/

//ARRAYS DE LA CLASE

let productos = ["NO", "Me Too", "Wave", "Made You Look"]; //strings
let numero = [1, 2, 3, 4, 5]; //numeros
let boolean = [true, true, false, false]; //booleanos
let mezclas = [1, 2, "NO", true]; //mezclas


const USUARIOS = [
    {
        nombre: "Martin",
        apellido: "Palonsky",
        edad: 25
    },
    {
        nombre: "Agustín",
        apellido: "Sosa",
        edad: 26
    }
]

console.log(productos)
console.log(productos[3]);

console.log(USUARIOS)
console.log(USUARIOS[1]);

//RECORRIDO
//let productos = ["arroz", "banana", "fideos", "gaseosa"];
/*
for (let i = 0; i < 4; i++){
    console.log(productos[i]);
}
*/
//LENGTH
/*
let cantidadDeProductos = productos.length;
console.log("La cantidad de productos que posee el Array es: " + cantidadDeProductos)
*/
/*
let texto = "MundoCoder";
let LongitudTexto = texto.length
console.log(LongitudTexto);
*/
//PUSH
/*
let numero = [1, 2, 3];
numero.push("Scarlet Witch");
console.log(numero);
*/

//POP
/*
let numero = [1, 2, 3];
let actualizarNumero = numero.pop();
console.log(actualizarNumero)
console.log(numero)
*/

//SHIFT
/*
let numero = [1, 2, 3, 4, 5];
let actualizarNumero = numero.shift();
console.log(actualizarNumero)
console.log(numero)
*/

//SPLICE
//indice, cantidad, el tipo de dato
/*
let colores = ["Rojo", "Naranja", "Amarillo"];
colores.splice(1, 2, "Azul", "Morado");
console.log(colores);
*/

//JOIN
/*
let colores = ["Rojo", "Naranja", "Amarillo"];
let stringeColores = colores.join(" ");
console.log(stringeColores);
*/

//CONCAT
/*
let autos = ["Honda", "Toyota", "Nissan"];
let masAutos = autos.concat(["Liffa", "Cherry"]);
console.log(masAutos);
*/

//SLICE
/*
let arrayNumero = [1, 2, 3, 4, 5];
let parteDelArray = arrayNumero.slice(1, 4);
console.log(parteDelArray);

const nombres = ["Storm", "Wolverine", "Cyclope", "Jean Grey", "Scarlet Witch"];
const masculinos = nombres.slice(1, 5);
console.log(masculinos)
*/

//IndexOf
/*
let fruta = ["banana", "manzana", "frutilla", "naranja", "manzana"];
let indice = fruta.indexOf("manzana");
console.log(indice);
*/

//Includes
/*
let nombres = ["Jubilee", "Rogue", "Ice Man", "Professor X", "Bishop"];

console.log(nombres.includes("Jubilee"))
console.log(nombres.includes("Ice Man"))
console.log(nombres.includes("Elektra"))
console.log(nombres.includes("Scarlet Witch"))
console.log(nombres.includes("Bishop"))
*/

//ARRAYS CON OBJECTOS
/*
const PERSONAS = [
    {nombre: "Martin", edad: 25},
    {nombre: "Agustin", edad: 26},
    {nombre: "Javiera", edad: 58},
]

console.log(PERSONAS)

//FOR OF
for (const personaObjectos of PERSONAS){
    console.log(personaObjectos.nombre);
}
*/

//FUNCIONES DE ORDEN SUPERIOR 1
//Abstracción
/*
function sumar (a, b){
    return a + b
}
let resultado = sumar (10,3);
console.log(resultado)

function mayorQue(x){
    return(num) => num > x;
}
const mayorQueDiez = mayorQue(10);
const mayorQueVeinte = mayorQue(20);
console.log(mayorQueDiez(11))
*/

//funciones que poseen funciones
/*
function asignacionOperacion(operacion){
    if(operacion === "sumar"){
        return function(num1, num2){
            return num1 + num2
        }
    } else if(operacion === "restar") {
        return (num1, num2) => num1 - num2;
    }
}

let sumar = asignacionOperacion("sumar");
let restar = asignacionOperacion("restar");

console.log(sumar(4,6))
*/

//CALLBACK
/*
function porCadaUno(arr, fn){
    for(const elemento of arr){
        fn(elemento)
    }
}

const numeros = [0, 1, 2, 3, 4];
porCadaUno(numeros, console.log(elemento))
*/

/*
function operar(num1, num2, operacion){
    return operacion (num1, num2);
}
function suma(a, b){
    return a + b
}
function restar(a, b){
    return a - b
}
function multiplicar(a, b){
    return a * b
}
console.log(operar(5, 3, suma));
console.log(operar(10, 4, restar));
console.log(operar(7, 6, multiplicar));
*/

//forEach
/*
const Albumes2 = ["Title", "Thank You", "Treat Myself"];

for (let i = 0; i < letras.length; i++){
    const elemento = letras [i];
    console.log(elemento);
}
Albumes2.forEach(item => console.log(item));

const number = [1, 2, 3, 4];
number.forEach(function(number){
    const resultado = number *2;
    console.log(resultado);
})
*/


const Taquilla = [
    {
        album: "Title",
        recaudacion: 25000000,
        exito: true
    },
    {
        album: "Thank You",
        recaudacion: 29000000,
        exito: true
    },
    {
        album: "Treat Myself",
        recaudacion: 21000000,
        exito: false
    },
    {
        album: "My Love Train",
        recaudacion: 18000000,
        exito: false
    },
    {
        album: "Takin' it back",
        recaudacion: 32000000,
        exito: true
    },
]

const resultados = Taquilla.filter(item => item.exito === false && item.recaudacion >= 12000000);
console.log(resultados);

const serch = (letra) =>{
    return Taquilla.filter(item=>{
        return item.album.includes(letra)
    })
}

console.log(serch("Than"))


//SOME
/*
const numeros = [1, 2, 3, 4, 20, 31, 45, 40];
const numeroMayor = numeros.some(function(numeroArray){
    return numeroArray >40
})
console.log(numeroMayor);
*/

//MAPS

const productoss = [
    {nombre: "Lips Are Movin", precio: 4500},
    {nombre: "NO", precio: 34000},
    {nombre: "Me Too", precio: 37000},
    {nombre: "Made you look", precio: 29000},
]

const cambiarLetras = productoss.map(function(productoArray){
    return productoArray.nombre.toUpperCase();
})
console.log(cambiarLetras);

const porcentajeProducto = 0.2;
const PRECIO_AUMENTADO = productoss.map(function(productoArray){
    return {
        nombre: productoArray.nombre,
        precio: productoArray.precio * (1 + porcentajeProducto)
    }
})
console.log(PRECIO_AUMENTADO);
console.log(productoss);


//REDUCE
/*
const total = [1, 2, 3, 4];
let sum = 0 ;
for(let i = 0; i < total.length; i++){
    const elemento = total [i];
    sum = sum + elemento;
}
console.log(sum);
const totalFinal = total.reduce((sum, elemento) => sum + elemento, 0)
console.log(totalFinal);

const precioTotal = productos.reduce(function(acumulador, producto){
    return acumulador + producto.precio;
}, 0)
console.log(precioTotal);
*/

//SORT

const productos2 = [
    {nombre: "Lips Are Movin", precio: 4500},
    {nombre: "NO", precio: 34000},
    {nombre: "Me Too", precio: 37000},
    {nombre: "Made you look", precio: 29000},
]

//mayor a menor
productos2.sort(function(a, b){
    return b.precio - a.precio;
})
console.log(productos2);

//menor a mayor
productos2.sort(function(a, b){
    return a.precio - b.precio;
})

productos2.sort(function(a, b){
    const nombreA = a.nombre.toLocaleLowerCase();
    const nombreB = b.nombre.toLowerCase();

    if(nombreA < nombreB){
        return -1;}
        if(nombreA > nombreB){
            return 1
        }
        return 0
})

console.log(productos2);

//FUNCIONES DE ORDEN SUPERIOR 2
//Propiedades
/*
console.log(Math.E);
console.log(Math.PI);
*/
//MIN & MAX
/*
console.log( Math.max(20, 30, 10, 18, 2, 123));
console.log( Math.min(44, 32, 1, 98, -4, 5));
*/
//Ceil, Floor & Round
/*
const pi = Math.PI

//CEIL
console.log( Math.ceil(pi))

//FLOOR
console.log( Math.floor(pi))

//ROUND
console.log( Math.round(pi))
*/

//Square Root
/*
Math.sqrt(15)
Math.sqrt(8)
Math.sqrt(1)
Math.sqrt(-1)
*/

let potencia = Math.pow(2,3);
console.log(potencia);
let seno = Math.sin(Math.PI/2);
console.log(seno);
let coseno = Math.cos(Math.PI);
console.log(coseno);
let tng = Math.tan(Math.PI/4);
console.log(tng);

//RANDOM
console.log(Math.random()*10);

console.log(Math.round(Math.random()*50 + 10));

/*
function LanzarDados(){
    return Math.floor(Math.random()*5+1);
}
function simularElTiro(){
    const LANZAR_LOS_DADOS = prompt("Queres lanzar los dados (si / no)")
    if(LANZAR_LOS_DADOS === "si"){
        let resultadoDado1 = LanzarDados();
        let resultadoDado2 = LanzarDados();

        console.log(`dado 1: ${resultadoDado1}`)
        console.log(`dado 2: ${resultadoDado2}`)
        console.log(`total: ${resultadoDado1 + resultadoDado2}`);
    }else {
        console.log("Fin del juego")
    }
}

simularElTiro()
*/

//DATE
let fechaActual = new Date();
console.log(fechaActual);

let fechaEspecifica = new Date(2022,7,16);
console.log(fechaEspecifica);

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();
let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();
let milisegundos = fechaActual.getMilliseconds();
console.log(anio, mes, dia, hora, minutos, segundos, milisegundos);

function programarTarea(){
    let descripcionTarea = prompt("Ingresar tu tarea");
    let horaTarea = parseInt(prompt("Ingresar la hora"))
    if(isNaN(horaTarea) || horaTarea < 0 || horaTarea >= 24){
        console.log("Hora no valida, ingresar otra")
        return;
    }

    let minutosTarea = parseInt(prompt("Ingresar los minutos"))
    if(isNaN(minutosTarea) || minutosTarea < 0 || minutosTarea >= 60){
        console.log("Ingresa minutos validos")
        return;
    }

    let fechaTarea = new Date();
    fechaTarea.setHours(horaTarea, minutosTarea, 0, 0);

    let tiempoRestante = fechaTarea.getTime() - new Date().getTime();

    setTimeout(function(){
        console.log(`es hora de la tarea ${descripcionTarea}`)
    },tiempoRestante);
    
    console.log(`tarea programada: ${descripcionTarea} a las ${horaTarea},${minutosTarea}`)
}

programarTarea();

//DOM
const pId = document.getElementById('pId');
console.log(pId);

const pClass = document.getElementsByClassName('pClass');
console.log(pClass);

const li = document.getElementsByTagName('li');
console.log(li);

const queryId = document.querySelector('#queryid');
console.log(queryId);

const h1Elementos = document.getElementById('hElementos');
h1Elementos.innerText = "MEGHAN TRAINOR";
console.log(h1Elementos)