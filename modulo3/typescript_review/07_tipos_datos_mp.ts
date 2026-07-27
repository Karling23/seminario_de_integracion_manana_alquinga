const stockInicial: number = 42;
const precioPromedio: number = 5499.99;
const temperaturaFreno: number = -12.5;
const colorHexRojo: number = 0xff0000;
const binarioMotos: number = 0b1100;
const octalMotos: number = 0o14;
const valorInventario: number = 1_500_000;

console.log(colorHexRojo);
console.log(binarioMotos);
console.log(valorInventario);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isFinite(precioPromedio / 0));
console.log(Number.isNaN(0 / 0));

const saludoTienda: string = "Bienvenidos a Motos Premium";
const slogan: string = 'La velocidad en dos ruedas';
const templateFicha: string = `Ficha de ${"Suzuki GSX-R"}`;

const clienteNombre: string = "Juan";
const motosCompradas: number = 2;

const saludoCliente: string = `Hola, ${clienteNombre}. Has comprado ${motosCompradas} motos con nosotros.`;
const esClienteFrecuente: string = `Tu estado es: ${motosCompradas >= 2 ? "Frecuente" : "Nuevo"}.`;

const fichaTecnicaReporte: string = `
  Marca: Yamaha
  Modelo: MT-07
  Cilindrada: 689 cc
`.trim();

console.log("  kawasaki  ".trim());      
console.log("BMW MOTORRAD".toLowerCase());
console.log("honda cbr".toUpperCase());
console.log("Yamaha-MT09-2024".split("-"));
console.log("Fallo crítico en embrague".includes("crítico"));
console.log("ficha_moto.pdf".endsWith(".pdf"));
console.log("moto_yamaha.png".startsWith("moto"));

const enPromocion: boolean = true;
const descontinuada: boolean = false;

const esCilindradaAlta = 600 >= 500;
const tieneDescuentoAplicado = 0 > 10;

if (!tieneDescuentoAplicado) {
  console.log("Precio de lista, sin descuento adicional.");
}

let motoNoAsignada: undefined = undefined;
let motorNoEspecificado: null = null;

function buscarMotoPorId(id: number): string | null {
  if (id === 1) return "Ducati Panigale V4";
  return null;
}

const motoBuscada = buscarMotoPorId(5);

const modeloMotoFinal = motoBuscada ?? "Modelo Genérico";
console.log(modeloMotoFinal);

const longitudNombreMoto = modeloMotoFinal?.length;
console.log(longitudNombreMoto);
