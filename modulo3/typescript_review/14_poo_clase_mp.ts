class Moto {
  marca: string;
  modelo: string;
  precio: number;
  disponible: boolean;

  constructor(marca: string, modelo: string, precio: number, disponible: boolean) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.disponible = disponible;
  }

  describir(): string {
    const estado = this.disponible ? "disponible para entrega" : "agotada temporamente";
    return `${this.marca} ${this.modelo} — $${this.precio} (${estado})`;
  }
}

const motoDeportiva = new Moto("Yamaha", "YZF-R3", 6500, true);
const motoScooter = new Moto("Vespa", "Primavera 125", 4500, false);

console.log(motoDeportiva.describir());
console.log(motoScooter.describir());
