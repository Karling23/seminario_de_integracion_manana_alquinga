# encapsulamiento_mp.py

class InventarioMoto:
    def __init__(self, modelo, stock_inicial=0):
        self.modelo    = modelo
        self.__stock    = stock_inicial     # __ → privado (name mangling)
        self.__historial = []
        self.__disponible   = True if stock_inicial > 0 else False
        self.__registrar(f"Inventario creado con {stock_inicial} unidades")

    # Property — getter (acceso como atributo, no como método)
    @property
    def stock(self):
        return self.__stock

    @property
    def disponible(self):
        return self.__disponible

    @property
    def historial(self):
        return list(self.__historial)   # devuelve copia, no referencia

    # Método público — la "ventanilla"
    def ingresar_motos(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        self.__stock += cantidad
        self.__disponible = True
        self.__registrar(f"Ingreso: +{cantidad} unidades")
        return self

    def vender_motos(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        if cantidad > self.__stock:
            raise ValueError(f"Stock insuficiente (disponible: {self.__stock} unidades)")
        self.__stock -= cantidad
        if self.__stock == 0:
            self.__disponible = False
        self.__registrar(f"Venta: -{cantidad} unidades")
        return self

    def transferir_sucursal(self, destino, cantidad):
        self.vender_motos(cantidad)
        destino.ingresar_motos(cantidad)
        self.__registrar(f"Transferencia a {destino.modelo}: -{cantidad} unidades")
        return self

    # Método privado — solo para uso interno
    def __registrar(self, operacion):
        from datetime import datetime
        hora = datetime.now().strftime("%H:%M:%S")
        self.__historial.append(f"[{hora}] {operacion}")

    def __str__(self):
        return f"Inventario({self.modelo}: {self.__stock} unidades)"

# Uso
inv1 = InventarioMoto("Honda CBR", 10)
inv2 = InventarioMoto("Yamaha R6", 5)

inv1.ingresar_motos(5).vender_motos(2)     # encadenamiento — ingresar y vender devuelven self
inv1.transferir_sucursal(inv2, 3)

print(inv1)    # Inventario(Honda CBR: 10 unidades)
print(inv2)    # Inventario(Yamaha R6: 8 unidades)
print(f"Stock Honda: {inv1.stock} unidades")   # acceso como atributo (property)

# inv1.__stock = 99999  # AttributeError — acceso directo denegado
# inv1.stock = 99999    # AttributeError — no hay setter

for entrada in inv1.historial:
    print(f"  {entrada}")
