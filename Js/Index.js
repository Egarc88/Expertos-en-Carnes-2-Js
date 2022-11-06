let usuario = (prompt('Hola Bienvenido de Nuevo a Expertos en Carnes Ingresa tu Usuario.'));
let password = parseInt(prompt('Bienvenido a Expertos en Carnes Ingresa tu password.'));
let productoSeleccionado = parseInt(prompt(`Bienvenido ${usuario}! Que deseas comprar el dia de hoy? 1. Res - 2. Cerdo - 3. Mariscos - 4. Otros `));
let seguirComprando = true;
let totalCompra = 0;
let decision;



const productosArray = []

class newProduct {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock
    }
}

    const Res = new newProduct(1, 'Res', 50, 30);
        productosArray.push(Res);
    const Cerdo = new newProduct(2, 'Cerdo', 55, 25);
        productosArray.push(Cerdo);
    const Mariscos = new newProduct(3, 'Mariscos', 60, 15);
        productosArray.push(Mariscos);
    const otros = new newProduct(4, 'Otros', 20, 50);
        productosArray.push(otros);
       
// console.log(productosArray)

const carrito= []

    while(seguirComprando === true) {
/*     if (producto === 1) {
        totalCompra = totalCompra + 50
    } else if (producto === 2) {
        totalCompra = totalCompra + 55
    } else if (producto === 3) {
        totalCompra = totalCompra + 60
    } else if (producto === 4) {
        totalCompra = totalCompra + 20
    } */
const producto = productosArray.find(prod=>prod.id === productoSeleccionado)

if(producto){
    carrito.push(producto);
}

    totalCompra = totalCompra + producto.price

    alert(`${usuario}, tu total hasta ahora es de: ${totalCompra}.`)
decision = parseInt(prompt(`${usuario} Quieres seguir comprando? 1. Si | 2. No`))

if (decision === 1) {
    productoSeleccionado = parseInt(prompt(`Muy bien ${usuario}, escoge el producto que deseas comprar ahora: 1. Res | 2. Cerdo| 3. Mariscos| 4. Otros`))
} else {
    seguirComprando = false
}
console.log(carrito)

}

parseInt(alert(`${usuario}, el total de tu compra es de ${totalCompra}. Gracias por preferirnos!`))