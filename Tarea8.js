class Nodo{
  constructor(informacion_ingresada, siguiente_ingresado){
    this.info = informacion_ingresada;
    this.siguiente = siguiente_ingresado;
  }
}

class NodoPersona{
  constructor(nombre,edad, siguiente_ingresado){
    this.nombre = nombre;
    this.edad = edad
    this.precio=0
    if(this.edad<5){
      this.precio=0
    }
    else if(this.edad>=5 && this.edad<=10){
      this.precio=10000
    }
    else if(this.edad>=11 && this.edad<=17){
      this.precio=15000
    }
    else{
      this.precio=30000
    }
    this.siguiente = siguiente_ingresado;
    console.log("nombre:" +this.nombre + ", edad :"+this.edad+" ,precioEntrada: "+this.precio)
  }
}

class ListEnlazada{
  constructor(){
    this.cabeza = null;
    this.tamano = 0;
  }

  agregar(informacion){
    
    const nuevo_nodo = new Nodo(informacion, null);
    if(this.cabeza === null){
      this.cabeza = nuevo_nodo;
    }
    else{
      let nodo_actual = this.cabeza;
      while(nodo_actual.siguiente){
        nodo_actual = nodo_actual.siguiente;
      }
      nodo_actual.siguiente = nuevo_nodo;
    }
    this.tamano++;
  }

  // 4. Metodo agregar en una posicion en especifico
  agregar_en(informacion, posicion){
    if(posicion < 0 || posicion > this.tamano){
      return null;
    }
    const nuevo_nodo = new Nodo(informacion, null);
    let nodo_actual = this.cabeza;
    let nodo_anterior;

    if(posicion === 0){
      nuevo_nodo.siguiente = nodo_actual;
      this.cabeza = nuevo_nodo;
    }
    else{
      for(let i = 0; i < posicion; i++){
        nodo_anterior = nodo_actual;
        nodo_actual = nodo_actual.siguiente;
      }
      nuevo_nodo.siguiente = nodo_actual;
      nodo_anterior.siguiente = nuevo_nodo;
    }
    this.tamano++;
  }

  mostrar(){
    if(this.cabeza === null){
      return "No existe la cabeza no hay mucho que mostrar X-X";
    }
    let nodo_actual = this.cabeza;
    let respuesta = "";
    while(nodo_actual.siguiente){
      if(typeof(nodo_actual.info)=="string"){
        respuesta += nodo_actual.info += ' -> ';
      }
      else{
        respuesta += `tipo: ${typeof(nodo_actual.info)} -> `;
      }
      nodo_actual = nodo_actual.siguiente;
    }
    respuesta += 'null o cola';
    return respuesta;
  }


  remover_por(posicion){
    if(posicion < 0 || posicion > this.tamano){
      return null;
    }
    let nodo_actual = this.cabeza;
    let nodo_anterior;

    if(posicion === 0){
      this.cabeza = nodo_actual.siguiente;
    }
    else{
      for(let i = 0; i < posicion; i++){
        nodo_anterior = nodo_actual;
        nodo_actual = nodo_actual.siguiente;
      }
      nodo_anterior.siguiente = nodo_actual.siguiente;
    }
    this.tamano--;
    return nodo_actual.info;
  }

//Taller 8

//Ejercicio 1
  agregarNumDatos(num){
    for(let i=0; i<num; i++){
      this.agregar(i)  
    }
  }

//Ejercicio 2
  validarSecuParImpar(){
    let posPar = true
    let posImpar = true
    if(this.cabeza==null){
      return("No hay numeros disponibles para validar")
    }
    else{
      let aux=this.cabeza
      while(aux.siguiente!=null){
      for(let i=1; i<=this.tamano; i++){
        if(i%2==1){
          if(aux.info%2!=0){
            posPar = false
            }
          }
        if(i%2==0){
          if(aux.info%2!=1){
            posImpar=false
            }
          }
        aux=aux.siguiente
        }
      return posPar && posImpar   
      }   
    }
    
  }

//Ejercicio 3
  sumarNum(){
    let nodoActual=this.cabeza
    let suma=0
    while(nodoActual!=null){
      if(typeof nodoActual.info=='number'){
        suma=suma+nodoActual.info
      }
      nodoActual=nodoActual.siguiente
    }
    return suma
  }

//Ejericio 4
  devolverNumPares(){
    let pares=[]
    let nodoActual=this.cabeza
    while(nodoActual!=null){
      if(nodoActual.info%2==0){
        pares.push(nodoActual.info)
      }
      nodoActual=nodoActual.siguiente 
    }
    return pares
  }

//Ejercicio 5
  devolverNumImpares(){
    let impares=[]
    let nodoActual=this.cabeza
    while(nodoActual!=null){
      if(nodoActual.info%2==1){
        impares.push(nodoActual.info)
      }
      nodoActual=nodoActual.siguiente 
    }
    return impares
  }

//Ejercicio 6
  devolverStrings(){
    let strings =[]
    let nodoActual=this.cabeza
    while(nodoActual!=null){
      if(typeof nodoActual.info=='string'){
        strings.push(nodoActual.info)
      }
      nodoActual=nodoActual.siguiente
    }
    return strings
  }

//Ejercicio 7
  tipoDatos(){
    let tipoDatos=[]
    let longitud=this.tamano
    let nodo_actual = this.cabeza;
    for (var i = 0; i < longitud; i++) {
        tipoDatos.push(typeof nodo_actual.info)
        nodo_actual = nodo_actual.siguiente;
    }
    this.eliminarDuplicados(tipoDatos)
  }

  eliminarDuplicados(td){
    const result = [];
    td.forEach((item)=>{
        if(!result.includes(item)){
            result.push(item);
        }
    })
    this.conteDatos(result,td)

  }

  conteDatos(result){
    console.log(result)
    result.forEach((i) => {
    var tipoDatos=(i)
    var count=0
    let longitud=this.tamano
    let nodo_actual = this.cabeza;
    for (var i = 0; i < longitud; i++) {
        if(typeof nodo_actual.info == tipoDatos){
            count++;
        }
      nodo_actual=nodo_actual.siguiente
    }
    console.log("cantidad de datos de tipo:"+tipoDatos+"="+count)
    })

  }


//Ejercicio 8
  eliminarDato(dato){
    let nodoActual=this.cabeza
    if(nodoActual.info==dato){
      this.cabeza=nodoActual.siguiente
      this.tamano--
      return(`Se ha eliminado la cabeza ${dato}`)
    }
    else{
      while(nodoActual.siguiente){
        if(nodoActual.siguiente.info==dato){
          nodoActual.siguiente=nodoActual.siguiente.siguiente
          this.tamano--
          return(`Se ha eliminado el dato ${dato}`)
        }
        nodoActual=nodoActual.siguiente
      }
      return ("El dato no fue encontrado")
    }
  }

//Ejercicio 9
//Ya esta realizado por profe remove_por 

//Ejericio 10
  eliminarHataPos(posicion){
    if(posicion < 0 || posicion > this.tamano){
      return (`la posicion no es valida, debe de ser menor o igual al tamano ${this.tamano}`);
    }
    let nodo_actual = this.cabeza;

    if(posicion === 0){
      let cabeza=this.cabeza
      this.cabeza = nodo_actual.siguiente
      this.tamano--
      return(`Se atendio solo al dato ${cabeza.info} que es posicion 0`)
    }
    else{
      let longitud=this.tamano
      for(let i = 0; i<=longitud; i++){
        if(i<=posicion){
          nodo_actual = nodo_actual.siguiente
          this.tamano--
        }
        
        else{
          this.cabeza=nodo_actual
          return (`Se han eliminado los datos hasta la posicion ${posicion}`)
        }
      }
    }
  }

//Ejercicio 11
  
  agregarCola(num){
    let sumaBoletas=0
    for(let i=0; i<num; i++){
      let nombre=prompt("Ingrese el nombre")
      let edad=parseInt(prompt("Ingrese la edad"))
      const nuevo_nodo = new NodoPersona(nombre,edad,null);
      if(this.cabeza === null){
        this.cabeza = nuevo_nodo;
      }
      else{
        let nodo_actual = this.cabeza;
        while(nodo_actual.siguiente){
          nodo_actual = nodo_actual.siguiente;
        }
        nodo_actual.siguiente = nuevo_nodo;
      }
      this.tamano++
      sumaBoletas=sumaBoletas+nuevo_nodo.precio
    }
    console.log("El total del precio de las boletas es:", sumaBoletas)
  }
  
}


const enlazada_1 = new ListEnlazada();
enlazada_1.agregarNumDatos(5)
enlazada_1.agregar(7)
enlazada_1.agregar('Camilo')
enlazada_1.agregar(12)
enlazada_1.agregar('Luisa')
enlazada_1.agregar('Pedro')
console.log("La lista enlazada es", enlazada_1.mostrar())
console.log("La secuencia par impar", enlazada_1.validarSecuParImpar())
console.log("La suma de los valores unicamente numericos es:", enlazada_1.sumarNum())
console.log("Los numeros pares son:", enlazada_1.devolverNumPares())
console.log("Los numeros impares son:", enlazada_1.devolverNumImpares())
console.log("Los numeros strings son:", enlazada_1.devolverStrings())
console.log("El numero de tipo de datos es:", enlazada_1.conteDatos())
console.log("Antes de eliminar el tamano es: ", enlazada_1.tamano)
console.log("Al eliminar dato: ", enlazada_1.eliminarDato(7))
console.log("Al eliminar dato: ", enlazada_1.eliminarDato(0))
console.log("Ahora el tamano es: ", enlazada_1.tamano)
console.log("Eliminando Hasta la posicion: ", enlazada_1.eliminarHataPos(3))
console.log("Ahora el tamano es: ", enlazada_1.tamano)
enlazada_1.agregarCola(3)
console.log("Ahora el tamano es: ", enlazada_1.tamano)

