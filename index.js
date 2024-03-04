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

//FUNCIONES
function saludar() {
    console.log("¡Hola fan de Meghan Trainor!");
}

saludar ();


let cancionIngresada = prompt("Ingresar canción")
alert("La canción ingresada es " + cancionIngresada)

function solicitarNombre(){
    let cancionIngresada   = prompt("Ingresar canción")
    alert("La canción ingresada es " + cancionIngresada)
}

function saludarPersona (nombre){
    console.log("Hola, "+ nombre + "¿Cómo estás?");
}

saludarPersona("Meghan");

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

//EVENTOS

const btn = document.getElementById("btn");

btn.addEventListener('Click', function(){
    alert('Se esta ejecutando el evento')
})

const cambiarColor = document.getElementById("cambiarColor");

cambiarColor.addEventListener('Click', function(){
    document.body.style.backgroundColor = 'blue';
});

const btnNodo = document.getElementById("btnNodo");

//El evento es Click, ON
btnNodo.onclick = function(){
    alert('Se esta ejecutando el evento a traves de un nodo')
}


let menuBoton = document.getElementById("menuBoton");
let menu = document.getElementById('menu')

menuBoton.onclick = function(){
    menu.style.display= (menu.style.display === 'block')? 'none' : 'block';
};


//eventos con raton => nos permite interactuar a traves del mouse con html

const caja = document.getElementById("caja");

//mouseover = se ejecuta cuanto estamos sobre elemento
caja.onmouseover = ()=>{
    console.log("ingreso el mouse")
}

//mouseout = se ejecuta cuando el mouse no esta sobre el elemento
caja.addEventListener('mouseout', function(){
    console.log("El mouse esta afuera de la caja")
})

//mousemove = va a detectar el movimiento del mouse sobre el elemento.

caja.onmouseover= () =>{
    console.log("Pasaste el mouse por la caja")
}


let enlace = document.getElementById("enlace");

enlace.addEventListener('mousemove',function(){
    alert ('Pasaste por encima')
})


//mousedown y mouseup = oprimen y sueltan el boton
caja.onmousedown = function(){
    console.log("Deja oprimido el boton")}

caja.onmouseup= function(){
    console.log("Suelta el mouse el mouse")
}

//eventos de teclado

//keydown y keyup => cuando se presiona una tecla y cuando se deja soltar

let campoTexto = document.getElementById('campoTexto');

campoTexto.onkeydown = ()=>{
    console.log('Presionaste una tecla KD')
}
campoTexto.onkeyup = ()=>{
    console.log('Soltaste una tecla KP')
}

const pizarrita = document.getElementById("pizarrita");
const contexto = pizarrita.getContext("2d");
let dibujando = false;

//evento mouse para dibujar

pizarrita.addEventListener('mousedown',function(event){
    dibujando = true;
    dibujar(event.pageX - pizarrita.offsetLeft, event.pageY - pizarrita.offsetTop);

});

pizarrita.addEventListener('mousemove',function(event){
    if(dibujando){
        dibujar(event.pageX - pizarrita.offsetLeft, event.pageY - pizarrita.offsetTop);

    }
})

pizarrita.addEventListener('mouseup',function(){
    dibujando = false
})

function dibujar (x, y){
    contexto.fillstyle= 'black';
    contexto.fillRect(x,y,5,5);
}

let seleccion = document.getElementById('seleccion');
let contenido = document.getElementById("contenido")

seleccion.addEventListener('change',function(){
    if(this.value === 'opcion1'){
        contenido.textContent = 'se selecciono la opcion1'
    } else if (this.value === "opcion2"){
        contenido.textContent =" se selecciono la opcion2"
    }
})

//JSON

let saludar = localStorage.getItem("numero");
let number = parseInt(saludar);
console.log(typeof number);


const modo = document.getElementById("modo");

modo.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo","dark")
    }else{
        localStorage.setItem("modo","claro");
    }
})

const bodyModo= localStorage.getItem("modo");

if(bodyModo ==="dark"){
    document.body.classList.add("dark");
}
else{
    document.body.classList.remove("dark");
}

localStorage.setItem("saludo","buenas gente");

localStorage.setItem("numero", 1234);

localStorage.setItem("booleano", true);

localStorage.removeItem('saludo');

localStorage.clear();

let persona = {nombre:"pedro", edad:25, ciudad:"mar del plata"};

const personaJSON = JSON.stringify(persona);

localStorage.setItem("persona", personaJSON);

const usuarioEnElLocal = localStorage.getItem("persona");
console.log(usuarioEnElLocal)

//JSON.parse, convierte el JSON, de string a objeto. 

const usuarioObjeto = JSON.parse(usuarioEnElLocal);
console.log(usuarioObjeto);