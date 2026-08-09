print("Ciclo for")

motos = ["Honda", "Yamaha", "Suzuki"]
for moto in motos:
    print(moto)

print("Recorrer palabras")

for letra in "motos":
    print(letra)

print("Recorrer rangos")
for i in range(1,5):
    print(f"Venta número {i}")

print("Recorrer rango configurar paso")
for i in range(0,10,2):
    print(f"Stock revisado {i}")

print("Enumerar lista")
for i, moto in enumerate(motos):
    print(f"Índice: {i}, Marca de moto: {moto}")

print("Dos listas a la vez")
marcas = ["Honda", "Yamaha", "Kawasaki"]
precios = [5000, 6000, 7500]
for marca, precio in zip(marcas, precios):
    print(f"La moto {marca} cuesta {precio} dólares")

print("Control del ciclo")
print("Break")
for i in range(1,10):
    if i == 5:
        break
    print(f"Buscando moto en pasillo {i}")
print("Continue")
for i in range(1,10):
    if i == 2:
        continue
    print(f"Revisando modelo {i}")

print("For anidado")
for i in range(1,4):
    for j in range(1,4):
        print(f"Sucursal {i}, Vendedor {j}")
        
print("Lista de comprehension forma corta")
precios_con_impuesto = [x*1.15 for x in range(1000,6000,1000)]
print(precios_con_impuesto)
