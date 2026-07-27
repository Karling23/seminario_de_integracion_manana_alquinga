# Enteros, cadena de caracteres, booleanos, none

nombre = "Luis"         #string
edad = 25               #int
es_estudiante = True    #boolean
altura = 1.75           #float
nulo = None             #NoneType

print(type(nombre))
print(type(edad))
print(type(es_estudiante))
print(type(altura))
print(type(nulo))

# Asignar valor a varias variables
x, y, z = 1, 2, 3
print(x)
print(y)
print(z)

# Asignar el mismo valor a varias variables
a = b = c = 10
print(a)
print(b)    
print(c)

# Intercambiar valores 
x, y = 10 , 20
print(x, y)
x, y = y, x
print(x, y)

# Convenciones de nombres 

nombre_completo = "Carlos Alquinga"   # snake_case
NombreCompleto = "Carlos Alquinga"    # PascalCase
MAX_REINTENTOS = 5                    # MAYUSCYLAS SOSTENIDAS para constantes
_variable_interna = "privada"         # para uso interno

# Manejo de enteros 

pequeno = 42
negativo = -42
grande = 1_000_000_000
enorme = 10 ** 100

print(pequeno)
print(negativo)
print(grande)
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

