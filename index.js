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

const PRODUCTO_UNO = new Producto("ThankYou_Albúm", 800, 2);
const PRODUCTO_DOS = new Producto("TakinItBack_Albúm", 3400, 2);


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