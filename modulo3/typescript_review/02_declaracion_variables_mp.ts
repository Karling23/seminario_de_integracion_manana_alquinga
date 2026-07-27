const IVA: number = 0.15;
const NOMBRE_TIENDA: string = "MotoShop Premium";
const PERMITIR_CREDITO: boolean = true;

let stockMotos: number = 10;
let estadoTienda: string = "cerrado";
let clienteRegistrado: boolean = false;

console.log(`
    stock inicial: ${stockMotos} 
    estado tienda: ${estadoTienda} 
    cliente registrado: ${clienteRegistrado}`);

stockMotos--;
estadoTienda = "abierto";
clienteRegistrado = true;

console.log(`
    stock actual: ${stockMotos} 
    estado tienda: ${estadoTienda} 
    cliente registrado: ${clienteRegistrado}`);
