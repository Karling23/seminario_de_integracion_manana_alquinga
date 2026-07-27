type FichaBasica = [string, number];
type ColorPinturaRGB = [number, number, number];
type Transaccion = [string, number];

const especificaciones: FichaBasica = ["Yamaha MT-07", 689];
const colorMoto: ColorPinturaRGB = [0, 102, 204];
const ventaReciente: Transaccion = ["KTM Duke 390", 5400];

const [modelo, cc] = especificaciones;
const [r, g, b] = colorMoto;
const [motoVendida, precioFacturado] = ventaReciente;

console.log(`Moto: ${modelo}, Cilindrada: ${cc} cc`);
console.log(`Pintura oficial RGB: rgb(${r},${g},${b})`);
console.log(`Vendido: ${motoVendida} por $${precioFacturado}`);

type RangoPrecios = [minimo: number, maximo: number];
const rangoPresupuesto: RangoPrecios = [3000, 12000];
