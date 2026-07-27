class Vehiculo {
  constructor(public marca: string) {}

  arrancar(): string {
    return `El vehículo ${this.marca} arranca su motor.`;
  }
}

class MotoElectrica extends Vehiculo {
  constructor(marca: string, public autonomiaKm: number) {
    super(marca);
  }

  override arrancar(): string {
    return `La moto eléctrica ${this.marca} se enciende silenciosamente.`;
  }

  cargar(): string {
    return `Cargando batería para alcanzar autonomía de ${this.autonomiaKm} km.`;
  }
}

const vehiculoGenerico = new Vehiculo("GenericMotors");
const miMotoElectrica = new MotoElectrica("Super Soco", 120);

console.log(vehiculoGenerico.arrancar());
console.log(miMotoElectrica.arrancar());
console.log(miMotoElectrica.cargar());
console.log(miMotoElectrica.autonomiaKm);
