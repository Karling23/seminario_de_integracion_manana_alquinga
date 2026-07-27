const precioMoto: number        = 4999.99;
const cilindrada: number        = 250;
const temperaturaMotor: number  = 92.4;
const colorHexMoto: number      = 0xff0000;

const emailCliente: string      = "comprador@motomail.com";
const tipoMoto: string          = 'Deportiva';
const rutaFicha: string         = `/catalogo/motos/yamaha-r3`;

const esNueva: boolean                = true;
const requiereFinanciamiento: boolean = false;
const tieneDescuento: boolean         = true;

const subtotalMoto = 6000;
const descuentoMoto = 600;
const totalMoto = subtotalMoto - descuentoMoto;

const marcaSucio = "  yAMAhA  ";
console.log(marcaSucio.trim().toUpperCase());
console.log(emailCliente.includes("motomail"));
console.log(emailCliente.split("@"));
console.log(emailCliente.split("@")[1]);
let motoInfo: string = "Yamaha;R3;321cc;2024";
console.log(motoInfo.split(";")[0]);
console.log(motoInfo.split(";")[1]);

const puedeComprar: boolean = esNueva && tieneDescuento;
console.log(puedeComprar);
