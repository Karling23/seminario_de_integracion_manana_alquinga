abstract class PlanFinanciamiento {
  constructor(protected precioMoto: number, protected meses: number) {}

  abstract calcularCuota(): number;
  abstract calcularInteresTotal(): number;

  resumenPlan(): string {
    return (
      `Meses: ${this.meses} | ` +
      `Cuota Mensual: $${this.calcularCuota().toFixed(2)} | ` +
      `Total Intereses: $${this.calcularInteresTotal().toFixed(2)} | ` +
      `Costo Final: $${(this.precioMoto + this.calcularInteresTotal()).toFixed(2)}`
    );
  }
}

class PlanSocio extends PlanFinanciamiento {
  override calcularCuota(): number {
    const interes = this.precioMoto * 0.05 * (this.meses / 12);
    return (this.precioMoto + interes) / this.meses;
  }

  override calcularInteresTotal(): number {
    return this.precioMoto * 0.05 * (this.meses / 12);
  }
}

class PlanBancario extends PlanFinanciamiento {
  override calcularCuota(): number {
    const interes = this.precioMoto * 0.12 * (this.meses / 12);
    return (this.precioMoto + interes) / this.meses;
  }

  override calcularInteresTotal(): number {
    return this.precioMoto * 0.12 * (this.meses / 12);
  }
}

const planSocio = new PlanSocio(8000, 12);
const planBanco = new PlanBancario(8000, 24);

console.log("Plan Socio Concesionario:");
console.log(planSocio.resumenPlan());
console.log("Plan Bancario Tradicional:");
console.log(planBanco.resumenPlan());
