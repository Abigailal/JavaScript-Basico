
function aplicarDescuento(){
    let precioInput = document.getElementById("InputPrice"); //traemos el valor introducido en input
    let precio = parseFloat(precioInput.value); 

    let descuentoInput = document.getElementById("InputDiscount");
    let descuento = parseFloat(descuentoInput.value);

    let precioFinal = (precio * (100-descuento))/100;

    const resultP = document.getElementById("priceWithDiscount");
    resultP.innerText="El precio final es: $" + precioFinal;
}


/*    console.log({
        precioOriginal,
        descuento,
        porcentajePrecioConDescuento,
        precioConDescuento,
    })
*/
