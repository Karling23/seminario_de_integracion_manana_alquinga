type Moto = {
  id: number;
  modelo: string;
  precio: number;
  disponible: boolean;
  existencias: number;
};

const inventarioMotos: Moto[] = [
  { id: 1, modelo: "Yamaha YZF-R3",     precio: 6500,  disponible: true,  existencias: 5 },
  { id: 2, modelo: "Honda CB500X",      precio: 8200,  disponible: true,  existencias: 8 },
  { id: 3, modelo: "Vespa Primavera",    precio: 4500,  disponible: false, existencias: 0 },
  { id: 4, modelo: "Suzuki Gixxer 150",  precio: 2500,  disponible: true,  existencias: 12 },
  { id: 5, modelo: "Ducati Panigale V4", precio: 28000, disponible: true,  existencias: 2 },
];

const motosDisponibles: Moto[] = inventarioMotos.filter((m) => m.disponible);
const modelosMotos: string[] = inventarioMotos.map((m) => m.modelo);
const motoMasBarata: Moto | undefined = inventarioMotos.reduce((min, m) =>
  m.precio < min.precio ? m : min
);

const inventarioCompleto: Moto[] = inventarioMotos.map((m) => m);
console.log(inventarioCompleto);

const existenciasGixxer: number = inventarioMotos[3].existencias;
console.log(`Existencias de ${inventarioMotos[3].modelo}: ${existenciasGixxer} unidades`);
