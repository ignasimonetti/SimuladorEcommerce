
//Funcion para crear el objeto Prodcuto
function Producto(id, nombre, stock) {
    this.id = id;
    this.nombre = nombre;
    this.stock = stock;
}

//Matriz de objetos literales productos
const productos = [];

//Llamado a la funcion para crear un nuevo objeto producto e insertarlo en la matriz
const Producto1 = new Producto(0001, 'Remera Manga Corta', 50);
const Producto2 = new Producto(0002, 'Zapatilla Urbana', 40);
const Producto3 = new Producto(0003, 'Media De Vestir', 30);
const Producto4 = new Producto(0004, 'Gorra', 20);
const Producto5 = new Producto(0005, 'Camisa', 10);

productos.push(Producto1, Producto2, Producto3, Producto4, Producto5);

//Funcion para encontrar producto por medio de el ID, utilizando la funcion de orden superior find
function encontrarProducto() {
    idProducto = parseInt(prompt('Por favor ingrese codigo del producto'))
    const nombreProducto = productos.find(x => x.id === idProducto) 

    if (nombreProducto === undefined) {
        return alert('No existe el producto solicitado')
    }
    else {
        return alert(nombreProducto.nombre + ' ' + nombreProducto.stock );
    }
}
//Funcion para agregar via web un objeto producto, que analiza si el ID del producto ya existe y en el caso de que no exista lo inserta.
function agregarProductoWeb() {
    const nuevoProducto = { id: parseInt(prompt('Ingrese el codigo del producto')), nombre: prompt('Ingrese el nombre del producto'), stock: prompt('Ingrese el stock')};
    const index = productos.findIndex(object => object.id === nuevoProducto.id);

    if (nuevoProducto.nombre === null || nuevoProducto.nombre === '' || nuevoProducto.id === null || nuevoProducto.id === '' ) {
        alert('Código o Nombre Incorrecto')

    }

    else if (isNaN(nuevoProducto.id) === true){
        alert('El codigo de producto debe ser solo numerico')
    }

    else {

        if (index === -1) {
            productos.push(nuevoProducto);
            alert('El producto se agrego al sistema')
        }
        else {
            alert('El codigo de producto ya existe')
        }

    }
}

//Funcion que busca el array el objeto que tenga el id ingresado y le permite modificar / agregar el parametro 'stock' 
function agregarStock(){
    const idBuscado = { id: parseInt(prompt('Ingrese el codigo de producto que quiere modificar su stock')) }
    const index = productos.findIndex(object => object.id === idBuscado.id);

    if (index === -1) {
        alert('Codigo de Producto Inexistente')
    }

    else {
        productos[index].stock = (prompt('Por Favor ingrese el Stock'))
        alert('Stock modificado')
    }
}

//Funcion para calcular cantidad total de productos
function stockTotal(productos, fn) {

    return productos.map(typeof fn === "function" ? fn: p => p[fn]).reduce((stock,v) => stock + v, 0);
}


/* let totalCarrito = 0;
let total = 1;

function agregarAlCarrito (producto) {
    if (totalCarrito === 0) {
console.log("Agrega algún producto");
} else {
console.log("Comprar");
}
}

agregarAlCarrito (producto) */


 const products = [
    {id:1, title: "Zapatilla nike", price: 900},
    {id:2, title: "Zapatilla adidas", price: 900},
    {id:3, title: "Zapatilla puma", price: 900},
    
];


/* Funcion para interactuar con DOM */
products.forEach((categorias) => {
    const idButton = `add-cart${products.id}`
    if(document.getElementById("section-card") != null){
    var idPost=document.getElementById("section-card").innerHTML += `<div class="card">
    <div class="precio">
        <p>$18000</p>
    </div>
    <img src="/Users/ignaciosimonetti/Desktop/Proyecto Javascript/shoes.png">
    <h4>${products.title}</h4>
    <a class="boton" id="${idButton}"> Añadir al carrito</a>
    </div>`;
}})

products.forEach((categorias) => {
    const idButton  = `add-cart${products.id}`
    document.getElementById(idButton).addEventListener(`click`, () => {
        alert ("hola");
    })
});
