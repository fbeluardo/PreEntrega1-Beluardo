const VALOR_IVA = 0.21;

const PRODUCTO = prompt("Ingresa el nombre del producto");
const PRECIO = prompt("Ingresa el precio del producto");
const DESCUENTO_PESOS = prompt ("Ingrese el descuento del producto en pesos argentinos")
const TOTAL = (PRECIO - DESCUENTO_PESOS) * (1 + VALOR_IVA);

const PRECIO_FINAL =
  "El precio final de los " + PRODUCTO + " es de: $" + TOTAL + " pesos argentinos";

alert(PRECIO_FINAL);

