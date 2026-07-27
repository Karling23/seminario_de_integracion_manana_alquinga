const preciosMotos: number[] = [3000, 4500, 6000, 8500, 12000];
const marcasMotos: Array<string> = ["Honda", "Yamaha", "Suzuki"];

const cilindradasInferidas = [125, 250, 300];

console.log(`Precios de motos: ${preciosMotos}`);
console.log(`Marcas de motos: ${marcasMotos}`);
console.log(`Cilindradas: ${cilindradasInferidas}`);

const preciosConDescuento: number[] = preciosMotos.map((p) => p * 0.90);
const motosCaras: number[] = preciosMotos.filter((p) => p > 5000);
const totalInventarioVal: number = preciosMotos.reduce((acc, p) => acc + p, 0);

console.log(`Con Descuento: ${preciosConDescuento}`);
console.log(`Motos Caras: ${motosCaras}`);
console.log(`Total Inventario: $${totalInventarioVal}`);

preciosMotos.push(15000);
preciosMotos.unshift(2500);
const ultimaMoto = preciosMotos.pop();
const primeraMoto = preciosMotos.shift();

console.log(`Después de mutaciones: ${preciosMotos}`);
console.log(`Primera: ${primeraMoto}, Última: ${ultimaMoto}`);

const existePrecio: boolean = preciosMotos.includes(6000); 
console.log(`Existe precio 6000: ${existePrecio}`);

const indicePrecio: number = preciosMotos.indexOf(6000);      
console.log(`Índice del precio 6000: ${indicePrecio}`);

const motoCaraEncontrada: number | undefined = preciosMotos.find((p) => p > 8000); 
console.log(`Moto de alta gama encontrada: $${motoCaraEncontrada}`); 
