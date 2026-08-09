# Enteros, cadena de caracteres, booleanos, none

marca = "Honda"         #string
cilindraje = 600        #int
es_deportiva = True     #boolean
precio = 12500.50       #float
descuento = None        #NoneType

print(type(marca))
print(type(cilindraje))
print(type(es_deportiva))
print(type(precio))
print(type(descuento))

# Asignar valor a varias variables
motos_vendidas, motos_en_stock, pedidos = 5, 20, 2
print(motos_vendidas)
print(motos_en_stock)
print(pedidos)

# Asignar el mismo valor a varias variables
precio_base = precio_final = costo = 10000
print(precio_base)
print(precio_final)    
print(costo)

# Intercambiar valores 
stock_honda, stock_yamaha = 10 , 20
print(stock_honda, stock_yamaha)
stock_honda, stock_yamaha = stock_yamaha, stock_honda
print(stock_honda, stock_yamaha)

# Convenciones de nombres 

modelo_moto = "CBR 600"               # snake_case
ModeloMoto = "CBR 600"                # PascalCase
MAX_DESCUENTO = 15                    # MAYUSCULAS SOSTENIDAS para constantes
_proveedor_interno = "Privado"        # para uso interno

# Manejo de enteros 

pequena_cilindrada = 125
perdida = -500
gran_inversion = 1_000_000_000
enorme = 10 ** 100

print(pequena_cilindrada)
print(perdida)
print(gran_inversion)
print(enorme)

# Bases numericas

binario = 0b1010
octal = 0o52
hexadecimal = 0xFF

print(binario, octal, hexadecimal)

# Convertir a decimal a otras bases

print(bin(255))
print(oct(255))
print(hex(255))
