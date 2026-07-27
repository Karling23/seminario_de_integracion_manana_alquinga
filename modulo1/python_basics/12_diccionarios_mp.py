# diccionarios_mp.py

# Crear diccionarios
vacio    = {}
moto  = {"marca": "Yamaha", "cilindraje": 600, "modelo": "R6"}
config   = dict(financiamiento=True, meses=24, interes=1.5)

# Acceso
print(moto["marca"])                  # Yamaha
print(moto.get("color"))              # None — no lanza error si no existe
print(moto.get("color", "Negro"))     # Negro — valor por defecto

# Modificar
moto["color"]   = "Azul"             # añadir/modificar
moto["cilindraje"] = 599             # modificar
del moto["modelo"]                   # eliminar
valor = moto.pop("color")            # eliminar y obtener el valor
print(moto)

# Verificar existencia
print("marca" in moto)               # True
print("modelo" in moto)              # False

# Métodos esenciales
print(moto.keys())       # dict_keys(['marca', 'cilindraje'])
print(moto.values())     # dict_values(['Yamaha', 599])
print(moto.items())      # dict_items([('marca', 'Yamaha'), ('cilindraje', 599)])

# Iterar
for clave, valor in moto.items():
    print(f"  {clave}: {valor}")

# update — fusionar diccionarios
moto.update({"modelo": "R6", "precio": 12000})
print(moto)

# Fusionar con | (Python 3.9+)
extra  = {"tipo": "Deportiva", "abs": True}
completo = moto | extra
print(completo)

# Diccionarios anidados
concesionario = {
    "nombre": "Motos Premium",
    "inventario": {
        1: {"marca": "Honda", "modelo": "CBR"},
        2: {"marca": "Kawasaki", "modelo": "Ninja"},
    },
    "sucursales": ["Madrid", "Barcelona"]
}

print(concesionario["inventario"][1]["marca"])   # Honda
concesionario["inventario"][3] = {"marca": "Ducati", "modelo": "Panigale"}

# setdefault — añadir solo si no existe
moto.setdefault("pais_origen", "Japón")      # añade "pais_origen"
moto.setdefault("marca", "Otra")             # no modifica — ya existe
