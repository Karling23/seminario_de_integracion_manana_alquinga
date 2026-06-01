# polimorfismo_mp.py

# POLIMORFISMO POR HERENCIA — override de métodos
class PromocionVenta:
    """Clase base abstracta."""
    def __init__(self, cliente, descuento):
        self.cliente = cliente
        self.descuento = descuento

    def aplicar(self):
        raise NotImplementedError("Las subclases deben implementar aplicar()")

    def __str__(self):
        return f"{self.__class__.__name__} → {self.cliente}"

class PromocionEstudiante(PromocionVenta):
    def __init__(self, cliente, descuento, universidad="Desconocida"):
        super().__init__(cliente, descuento)
        self.universidad = universidad

    def aplicar(self):
        return f"🎓 Descuento estudiante ({self.universidad}) para {self.cliente}: {self.descuento}% en cascos"

class PromocionCumpleaños(PromocionVenta):
    def aplicar(self):
        return f"🎂 Feliz Cumpleaños {self.cliente}: Bono de ${self.descuento} para tu próxima moto"

class PromocionFinDeAño(PromocionVenta):
    def aplicar(self):
        return f"🎄 Liquidación fin de año para {self.cliente}: {self.descuento}% en toda la tienda..."

class PromocionClienteFiel(PromocionVenta):
    def __init__(self, cliente, descuento):
        super().__init__(cliente, descuento)

    def aplicar(self):
        return f"⭐ Gracias por tu lealtad {self.cliente}: {self.descuento} en mantenimiento preventivo"

# Polimorfismo en acción — misma función, distintos tipos
def aplicar_promociones(promociones: list):
    for promo in promociones:
        print(f"  {promo.aplicar()}")   # cada uno aplica su promoción

promos = [
    PromocionEstudiante("Ana",  15, "UNAM"),
    PromocionCumpleaños("Carlos", 200),
    PromocionFinDeAño("Público General", 30),
    PromocionClienteFiel("Luis", "Cambio de aceite gratis"),
]

print("Aplicando promociones:")
aplicar_promociones(promos)

# POLIMORFISMO DUCK TYPING — sin herencia
# "Si camina como un pato y grazna como un pato, es un pato"
class PagoEfectivo:
    def verificar(self):   return "billetes revisados"
    def procesar(self, monto): print(f"Recibiendo efectivo en caja: ${monto}")

class PagoTarjeta:
    def verificar(self):   return "conexión con banco establecida"
    def procesar(self, monto): print(f"Cobrando de tarjeta: ${monto}")

class PagoCripto:
    def verificar(self):   return "confirmaciones en blockchain validadas"
    def procesar(self, monto): print(f"Transfiriendo a wallet equivalente a: ${monto}")

# Esta función funciona con CUALQUIER objeto que tenga verificar() y procesar()
def cobrar_moto(metodo_pago, precio):
    estado = metodo_pago.verificar()
    print(f"Estado de verificación: {estado}")
    metodo_pago.procesar(precio)

for pago in [PagoEfectivo(), PagoTarjeta(), PagoCripto()]:
    cobrar_moto(pago, 12500)
