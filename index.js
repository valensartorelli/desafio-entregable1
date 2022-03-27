let producto = prompt("Ingrese el nombre del producto elegido")

let cantidadProducto = parseInt(prompt("Ingrese la cantidad que quiere comprar"))


let precioProducto = 0;
let precioTotal = 0;

function total () {
    
    if (producto == "Jean" || producto == "jean") {
        precioProducto = 4000;
    } else if (producto == "Remera" || producto == "remera") { 
        precioProducto = 1400;
    } else if (producto == "Short" || producto == "short") {
        precioProducto = 2500; 
    } 

    precioTotal = precioProducto * cantidadProducto;
    return precioTotal;
}

let totalFinal = total();

alert("El total de " + cantidadProducto + " " + producto + " es de $" + totalFinal)

