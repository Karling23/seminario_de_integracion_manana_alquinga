# primera-clase_mp.py

class Moto:
    # Atributo de clase — compartido por TODAS las instancias
    tipo_vehiculo = "Motocicleta de 2 ruedas"

    # __init__ es el constructor — se ejecuta al crear la instancia
    def __init__(self, marca, cilindraje):
        # Atributos de instancia — propios de cada objeto
        self.marca = marca
        self.cilindraje = cilindraje

    # Método de instancia — self es la referencia al objeto
    def describir(self):
        return f"Esta es una {self.marca} con un motor de {self.cilindraje}cc."

    def potenciar_motor(self):
        self.cilindraje += 50
        print(f"¡Motor modificado! Ahora la {self.marca} tiene {self.cilindraje}cc.")

    # __str__ — representación legible (para print y str())
    def __str__(self):
        return f"Moto({self.marca}, {self.cilindraje}cc)"

    # __repr__ — representación oficial (para depuración)
    def __repr__(self):
        return f"Moto(marca={self.marca!r}, cilindraje={self.cilindraje!r})"

# Crear instancias (objetos) con la clase como función
moto1  = Moto("Yamaha", 300)
moto2 = Moto("Honda", 600)

print(moto1.describir())       # Esta es una Yamaha con un motor de 300cc.
print(moto2.describir())       # Esta es una Honda con un motor de 600cc.
moto1.potenciar_motor()        # ¡Motor modificado! Ahora la Yamaha tiene 350cc.
print(str(moto1))              # Moto(Yamaha, 350cc)
print(repr(moto1))             # Moto(marca='Yamaha', cilindraje=350)
print(Moto.tipo_vehiculo)      # Motocicleta de 2 ruedas  — atributo de clase
