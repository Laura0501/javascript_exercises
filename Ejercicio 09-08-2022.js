var nombre = 'Laura'
console.log("Cantidad de caracteres: ", nombre.length)

// > Mayor
// < Menor
// Y &&
// O ||

var luisito = 30
var esKoreano = true
if (luisito >= 18 && luisito < 50 && esKoreano) {
    // Es verdadero si se ejecuta
    alert('Bienvenido a la fiesta')
}else{
    // Si es falso se ejecuta
    alert('No puede entrar')
}
//alert ('Estoy en la linea 18')


//Ejercicios 

//1
var nombre= prompt("Ingresa tu nombre: ");
console.info("Ahora estas en la matriz, ", nombre);

// 2

var numeroDecimal= parseFloat(prompt("Ingresa el numero decimal"));
var numeroEntero= parseInt(prompt("Ingresa el numero entero"));
var suma=numeroEntero+numeroEntero

console.info("El resultado de la suma es: ", suma );


3
var numeroUno= parseFloat(prompt("Ingrese un numero: "))
var numeroDos= parseFloat(prompt("Ingrese otro numero: "))

var suma=numeroUno+numeroDos

console.info("El resultado de la suma de los numeros ingresados es: ", suma )

var numeroTres= parseFloat(prompt("Ingrese un tercer numero: "))
var multiplicacion= suma*numeroTres

console.info("El resultado de la multiplicacion es: ", multiplicacion )


4 
var kilometrosRecorridos= parseFloat(prompt("Ingrese la cantidad de km recorridos por la motocicleta: "))
var litrosDeCombustible= parseFloat(prompt("Ingrese la cantidad de combustible consumido: "))

var combustiblePorKm= kilometrosRecorridos/litrosDeCombustible
console.info("la cantidad de km recorridos por la motocicleta: ", kilometrosRecorridos )
console.info("la cantidad de combustible consumido: ", litrosDeCombustible )
console.info("la cantidad de combustible por km recorrido es : ", combustiblePorKm )


5

var temperatura= parseFloat(prompt("Ingrese la temperatura en fahrenheit: "))
var gradosCelsius=(5/9)*(temperatura-32)

console.info("Temperatura en Fahrenheit: ", temperatura )
console.info("la temperatura ingresada en grados celsius es: ", gradosCelsius )


6 
var numUno= parseFloat(prompt("Ingrese primer numero: "))
var numDos= parseFloat(prompt("Ingrese segundo numero: "))
var numTres= parseFloat(prompt("Ingrese tercer numero: "))

var promedio=parseFloat((numUno+numDos+numTres)/3)

console.info("El promedio de los tres numeros ingresados es: ", promedio)

Ejercicio 7

var numero= parseFloat(prompt("Ingrese un numero: "))
var descuento= numero-(numero*0.15)

console.info("Descontando el 15% queda: ", descuento)

Ejercicio 8

var palabra1= prompt("Ingrese primer palabra: ")
var palabra2= prompt("Ingrese segunda palabra: ")

var concatenacion=(palabra1 + "  " + palabra2)

console.info("Primera palabra:", palabra1)
console.info("segunda palabra:", palabra2)
console.info(concatenacion)
console.log(`${palabra1} ${palabra2}`)

Ejercicio 9

var texto= prompt("Ingrese un texto: ")
console.info("El caracter en primer lugar del texto ingresado es: ", texto[0])

var caracteres= texto.length
var indice= parseInt(prompt("Ingresa un numero positivo menor a", caracteres))
console.info("El caracter en esa posicion es: ", texto[indice])

Ejercicio 10 
var numShows=parseInt(prompt("Ingresa cuántos shows musicales has visto en el ultimo año"))
if (numShows > 3 ) {
   alert ("True")
}else{
   alert ("False")
}

Ejercicio 11
var fecha = prompt('Ingrese una fecha en formato DDMMAAA:')
concatenación
console.log('Fecha en formato DDMMAAAA:', fecha[0] + fecha[1] + "/" + fecha[2] + fecha[3] + "/" + 
fecha[4] + fecha[5] + fecha[4] + fecha[5])
Interpolacion
console.log('Fecha en Formato DDMMAA: ', `${fecha[0]}${fecha[1]}/${fecha[2]}${fecha[3]}/${fecha[4]}${fecha[5]}`)

Ejercicio 12
var numEntero=parseInt(prompt("Ingresa un numero entero"))
if(numEntero%2==0){
   alert("True")
}
else{
   console.error("False")
}

Ejercicio 13
var edad=parseInt(prompt("Ingresa tu edad"))
var numArticulos=parseInt(prompt("Ingresa el numero de articulos que has comprado en una tienda"))
if(edad>18 && numArticulos>1){
   alert("True")
}
else{
   alert("False")
}

Ejercicio 14
var texto=prompt("Ingresa un texto:")
console.log("La cantidad de caracteres es:", texto.length)
if(texto.length%2 != 0){
   alert("True")

}
else{
   alert("False")
}


Ejercicio 15
var palabraUno=prompt("Ingresa una palabra")
var palabraDos=prompt("Ingresa la Tercera Palabra")

if(palabraUno.length<palabraDos.length){
   alert("True")
}
else{
   alert("False")
}

Ejercicio 16
var nombrePersonal=prompt("Ingresa tu nombre:")
console.log(nombrePersonal)
var nombreDos=prompt("Ingresa el nombre de otra persona")
console.log(nombreDos)
var UltVarNomUno=nombrePersonal.length-1
var UltVarVarDos=nombreDos.length-1
if (nombrePersonal[0]==nombreDos[0] || nombrePersonal[UltVarNomUno]==nombreDos[UltVarVarDos]){
   alert("True")
}
else{
   alert("False")
}

Ejercicio 17
var numEntero=parseInt(prompt("Ingrese un numero entero"))
console.log("El numero ingresado es: ", numEntero)

if(numEntero>0){
   console.log("Su valor absoluto es: ", numEntero)
}

else{
   var valorAbs=(numEntero)*-1
   console.log("Su valor absoluto es:", valorAbs )
}

Ejercicio 18
var numUno=parseInt(prompt("Ingrese un numero "))
var numDos=parseInt(prompt("Ingrese otro numero diferente"))

if(numUno>numDos){
   console.log("El mayor numero es:", numUno)
}
else{
   console.log("El mayor numero es:", numDos)
}

Ejercicio 19
var letra=prompt("Ingresa una letra")
console.log("La letra es: ", letra)
if (letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u' && letra.length==1){
   console.log("Es vocal")
}
else{
   console.log("No es vocal")
}

Ejercicio 20
var numUno=prompt("Ingresa un numero:")
console.log(numUno)
var numDos=prompt("Ingresa otro numero:")
console.log(numDos)
var numTres=prompt("Ingresa tercer numero")
console.log(numTres)


if (numUno < numDos && numUno < numTres){
   console.log('El numero menor es:', numUno)
}
if (numDos < numUno && numDos < numTres){
   console.log('El numero menor es:', numDos)
}
if (numTres < numUno && numTres < numDos){
   console.log('El numero menor es:', numTres)
//}




