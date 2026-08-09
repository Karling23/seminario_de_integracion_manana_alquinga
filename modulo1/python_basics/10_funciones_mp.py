print("Funciones en Python - Venta de Motos")

print("---------------------------------------------------------------")

print("Funcion basica")

def dar_bienvenida():
    print("Hola, bienvenido a la tienda de motos")

dar_bienvenida()

print("---------------------------------------------------------------")

print("Funcion con parametros")

def saludar_cliente(nombre):
    print(f"Hola, {nombre}! Bienvenido a la tienda de motos")

saludar_cliente("Alice")
saludar_cliente("Bob")

print("---------------------------------------------------------------")

print("Funcion que devuelve valor con return")

def calcular_precio_total(precio_base, impuestos):
    return precio_base + impuestos

print(calcular_precio_total(5000, 500))

print("---------------------------------------------------------------")

print("Funcion con parametros por posicion")

def registrar_moto(marca, modelo, cilindraje):
    print(f"Moto registrada: {marca} {modelo}, {cilindraje}cc.")

registrar_moto("Honda", "CBR", 600) #Por posicion
registrar_moto(cilindraje=250, marca="Yamaha", modelo="MT-03") #Por nombre, el orden no importa

print("---------------------------------------------------------------")

print("Funcion con parametros por defecto")

def ofrecer_descuento(marca, porcentaje=5, estado="nueva"):
    print(f"Moto {marca} {estado} tiene {porcentaje}% de descuento!")

ofrecer_descuento("Suzuki", 10, "usada")
ofrecer_descuento("Kawasaki", estado="seminueva")
ofrecer_descuento("Ducati", 15)

print("---------------------------------------------------------------")

print("Funcion con parametros posicionales")

def sumar_ventas(*ventas):
    print(f"Ventas a sumar: {ventas}")
    return sum(ventas)

print(sumar_ventas(5000, 4500, 6000, 4000, 5500))
print(sumar_ventas(10000, 20000))
print(sumar_ventas(500, 1000, 1500))

print("---------------------------------------------------------------")

print("Funcion con parametros conbinados con posiciones")

def mostrar_inventario(categoria, *modelos):
    print(f"Argumentos recibidos {categoria} {modelos}")
    print(categoria)
    for modelo in modelos:
        print(f"- {modelo}")

mostrar_inventario("Deportivas", "CBR600", "Ninja 400", "R6")

print("---------------------------------------------------------------")

print("Funcion con parametros clave valor variables")

def crear_ficha_moto(**kwargs):
    print(f"Especificaciones recibidas: {kwargs}")
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")

crear_ficha_moto(marca="Yamaha", modelo="MT-07", cilindraje=689, abs=True)

print("---------------------------------------------------------------")
