const cliente: string = "Carlos";
const motoInteresada: string = "Honda CB500X";
const visitasRealizadas: number = 3;

const bienvenidaCliente: string = `Hola, ${cliente}. Interesado en: ${motoInteresada}. Visitas a tienda: ${visitasRealizadas}.`;
console.log(bienvenidaCliente);

const precioMotoBase: number = 7200;
const tasaIva: number        = 0.12;
const totalConIva: string    = `Precio total con IVA: $${(precioMotoBase * (1 + tasaIva)).toFixed(2)}`;
console.log(totalConIva);

let modeloMoto: string = "Kawasaki Ninja 400";
let disponibleStock: boolean = true;
let descuentoEspecial: number = 10;
const cotizacionFija: string = `
=== Ficha de Cotización ===
Motocicleta : Honda CB500X
Estado      : disponible
Descuento   : 0%
`;

const cotizacionDinamica: string = `
=== Ficha de Cotización ===
Motocicleta : ${modeloMoto}
Estado      : ${disponibleStock ? 'disponible para entrega' : 'bajo pedido'}
Descuento   : ${descuentoEspecial}% (Precio con desc: $${(precioMotoBase * (1 - descuentoEspecial / 100)).toFixed(2)})
`;

console.log(cotizacionFija);
console.log(cotizacionDinamica);
