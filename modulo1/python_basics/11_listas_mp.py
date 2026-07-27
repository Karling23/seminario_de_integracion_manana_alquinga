print("Listas - Motos")
print("Crear listas")
sin_stock = []
print(sin_stock)
precios = [5000, 6000, 7500, 4000, 10000]
print(precios)
marcas = ["Honda", "Yamaha", "Suzuki", "Kawasaki", "Ducati", "BMW"]
print(marcas)
moto_mixta = ["CBR", 600, True, None, 12500.50]
print(moto_mixta)
categorias = ["Deportiva", ["CBR600", "R6", ["Roja", "Negra", "Azul"]], "Naked", "Scooter"]
print(categorias)
print("Acceder a elementos de la lista")
print(marcas[0])
print(marcas[-1])
print(marcas[1:3]) 
print(marcas[::-1])

print("CRUD en listas")
modelos = ["MT-03", "Z400", "Duke 390", "CB500F"]
#agregar
modelos.append("GSX-S750")
print(modelos)
modelos.insert(1, "R3")
print(modelos)
modelos.extend(["CBR500R", "Ninja 650"])
#modificar
modelos[0] = "MT-07"
print(modelos)
#eliminar elementos
modelos.remove("CB500F")
print(modelos)
eliminado = modelos.pop()
print(modelos)
eliminado = modelos.pop(0)
print(modelos)
del modelos[0]
print(modelos)


print("buscar valores en los elementos de una lista")
print("Duke 390" in modelos)
print(modelos.index("Duke 390"))
print(modelos.count("Duke 390"))

print("ordenar listas")
precios_desordenados = [5000, 2000, 9000, 1000, 5500, 6000, 3400, 900, 10000, 1500, 2500]
print(precios_desordenados)
precios_desordenados.sort()
print(precios_desordenados)
precios_desordenados.sort(reverse=True)
print(precios_desordenados)
ordenada = sorted(precios_desordenados)
print(precios_desordenados)
print(ordenada)
