print("Ciclo for")

frutas = ["manzana", "banana", "naranja"]
for fruta in frutas:
    print(fruta)

print("Recorrer palabras")

for letra in "frutas":
    print(letra)

print("Recorrer rangos")
for i in range(1,5):
    print(i)

print("Recorrer rango configurar paso")
for i in range(0,10,2):
    print(i)

print("Enumerar lista")
for i, fruta in enumerate(frutas):
    print(f"Índice: {i}, Fruta: {fruta}")

print("Dos listas a la vez")
nombres = ["Alice", "Bob", "Charlie"]
edades = [25, 30, 35]
for nombre, edad in zip(nombres, edades):
    print(f"{nombre} tiene {edad} años")

print("Control del ciclo")
print("Break")
for i in range(1,10):
    if i == 5:
        break
    print(i)
print("Continue")
for i in range(1,10):
    if i == 2:
        continue
    print(i)

print("For anidado")
for i in range(1,4):
    for j in range(1,4):
        print(i, j)
        
print("Lista de comprehension forma corta")
cuadrados = [x**2 for x in range(1,6)]
print(cuadrados)