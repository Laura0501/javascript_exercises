// Ejercicio 1
// function suma(numero1,numero2){
// 	var numero1 = parseFloat(prompt('Ingrese un numero'))
// 	var numero2 = parseFloat(prompt('Ingrese otro numero'))
// 	var resultado = numero1 + numero2
// 	alert(resultado)
// }

// suma()


// Ejercicio 2
// var temperaturaF = function () {
//    var temperatura = parseFloat(prompt('Ingrese una temperatura en Celcius:'))
//    var farhenheit = (temperatura * 9/5) + 32
//    return alert(farhenheit)
// }
// temperaturaF()



// Ejercicio 9
// function numeroMayor(numero1, numero2) {
//    var numero1 = parseFloat(prompt('Ingrese un numero'))
//    var numero2 = parseFloat(prompt('Ingrese otro numero'))
//    if (numero1 > numero2){
//        return alert(numero1)
//    }
//    else {
//        return alert(numero2)
//    }
// }
// numeroMayor()



// Ejercicio 11
// var triangulo=(angulo1,angulo2,angulo3) => {
// 	var angulo1 = parseFloat(prompt('Ingrese el primer angulo'))
// 	var angulo2 = parseFloat(prompt('Ingrese el segundo angulo'))
// 	var angulo3 = parseFloat(prompt('Ingrese el tercer angulo'))
// 	if (angulo1 + angulo2 + angulo3 == 180) {
// 	console.log('El triangulo es valido')
// 		}
// 	else {
//     	console.error('El triangulo no es valido')
// 	}
// }

// triangulo()


// While
// Ejercicio 18

// function aumentoNumeros(numero){
// 	var numero=prompt("Ingrese un numero positivo")
// 	var inicio=1
// 	while(inicio<=numero){
// 		console.log(inicio++)
// 	}
// }

// aumentoNumeros()


// Ejercicio 20
// function disminuirNumeros(numero) {
//    var numero = parseFloat(prompt('Ingrese un numero positivo:'))
//   while (numero >= 1) {
//        console.log(numero--)   
//    }
// }
// disminuirNumeros()


// Ejercicios Divisores con while o for

// Ejercicio 27
// PRIMOS
// function numerosPrimos(numero) 
// {
//    var numero = parseFloat(prompt('Ingrese un numero:'))
//    if (numero<=2) {
//        return ('El numero debe ser mayor a 2')
//    }
//    for (var i = 2; i <= numero-1; i++)
//        if (numero % i == 0) {
//            return ('No es numero primo')
//        }
//    return ('Es numero primo')
// }
// numerosPrimos()



// Ejercicio 9
// function numeroMayor(numero1, numero2) {
//     var numero1 = parseFloat(prompt('Ingrese un numero'))
//     var numero2 = parseFloat(prompt('Ingrese otro numero'))
//     if (numero1 > numero2){
//         return alert(numero1)
//     }
//     else {
//         return alert(numero2)
//     }
// }
// numeroMayor()


// Patrones con Loop Anidados
// Ejercicio 36
// Piramide centrada
// document.write(`* <br> *** <br> ***** <br> ******* <br> *********`)

// Ejercicio 45
// function elementosArray() {
//    var array = [1,2,3,4,5,6]  
//    console.log('Los elementos del arreglo iterado son:')
//    for (position in array) {
//        console.log(`${array[position]}`)
//    }
// }
// elementosArray()



// Strings y Arrays
// Ejercicio 54
// var arregloString= function(){
// 	var arreglo=["Luis", "Mangos", 25, "peras", "Manizales"]
// 	console.log("El arreglo en string es:", arreglo.join())
// }

// arregloString()