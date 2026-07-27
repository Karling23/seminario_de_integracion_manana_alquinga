print("Funciones en Python")

print("---------------------------------------------------------------")

print("Funcion basica")

def saludar():
    print("Hola, bienvenido a Python")

saludar()

print("---------------------------------------------------------------")

print("Funcion con parametros")

def saludarConNombre(nombre):
    print(f"Hola, {nombre}! Bienvenido a Python")

saludarConNombre("Alice")
saludarConNombre("Bob")

print("---------------------------------------------------------------")

print("Funcion que devuelve valor con return")

def sumar(a, b):
    return a + b

print(sumar(3, 5))

print("---------------------------------------------------------------")

print("Funcion con parametros por posicion")

def presentar(nombre, edad, ciudad):
    print(f"Hola, mi nombre es {nombre}, tengo {edad} años y vivo en {ciudad}.")

presentar("Alice", 30, "Madrid") #Por posicion
presentar(ciudad="Barcelona", nombre="Bob", edad=25) #Por nombre, el orden no importa

print("---------------------------------------------------------------")

print("Funcion con parametros por defecto")

def presentar_con_defecto(nombre, saludo="Hola", puntuacion="!"):
    print(f"{saludo} {nombre} {puntuacion}")

presentar_con_defecto("Alice", "Buenos dias", "...")
presentar_con_defecto("Juan", puntuacion="...")
presentar_con_defecto("Carlos", "Buenas tardes")

print("---------------------------------------------------------------")

print("Funcion con parametros posicionales")

def sumar_todos(*numeros):
    print(f"Numeros a sumar: {numeros}")
    return sum(numeros)

print(sumar_todos(1, 2, 3, 4, 5))
print(sumar_todos(10, 20))
print(sumar_todos(5, 10, 15))

print("---------------------------------------------------------------")

print("Funcion con parametros conbinados con posiciones")

def mostrar_info(titulo, *datos):
    print(f"Argumentos recibidos {titulo} {datos}")
    print(titulo)
    for dato in datos:
        print(f"- {dato}")

mostrar_info("Frutas", "Manzana", "Plátano", "Naranja")

print("---------------------------------------------------------------")

print("Funcion con parametros clave valor variables")

def crear_perfil(**kwargs):
    print(f"Argumentos recibidos: {kwargs}")
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")

crear_perfil(nombre="Alice", apellido="Paris", edad=30, ciudad="Madrid")

print("---------------------------------------------------------------")

