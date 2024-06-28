function ColaFila() {
    this.elementos = []
    this.primero = 0
    this.final = 0
    this.encolar = function(info){
        this.elementos[this.final] = info
        this.final++
        }

    this.desencolar = function(){
        if(this.primero === this.final){
            return null;
            }

        const info = this.elementos[this.primero];
        delete this.elementos[this.primero];
        this.primero++;
        return info;
        }

    this.tamano_fila = function(){  
        return this.final - this.primero;
    }
    this.esta_vacia = function(){
        if(this.tamano_fila() === 0){
          return true;
        }else{
          return false;
        }
      }
    this.ver_siguiente = function(){
        if(this.tamano_fila() === 0){
            return null;
    }
    return this.elementos[this.primero];
    }
    this.imprimir = function(){
        if(this.tamano_fila() === 0){
            return null;
        }
        let respuesta = '';
        for(let contador = this.primero; contador < this.final; contador++) {
            respuesta += this.elementos[contador] + " ";
        }
        return respuesta;
      }
//Ejercicio 1

    this.encolarNumElementos = function(numElementos){
        for(let i=0; i<=numElementos; i++){
            this.elementos[this.final]=i
            this.final++
        }       
    }
//Ejercicio 2
    this.secuParImpar=()=>{
        let positionPar = true
        let positionImPar = true
        for(let i = 0; i<this.elementos.length; i++){
            if(i%2 == 0){
                if(this.elementos[i]%2 != 0){
                    positionPar=false
                }
            }
            if(i%2 == 1){
                if(this.elementos[i]%2 != 1){
                    positionImPar=false
                }
            }
        }
        return positionPar && positionImPar
    }
// Ejercicio 3
    this.sumarArreglo = function(){
        let suma_total=0
        for (var i = 0 ; i < this.elementos.length; i++) {
            let numero =parseInt(this.elementos[i])
            if (isNaN(numero)) {
            alert("El elemento:", this.elementos[i], "No es un numero")
            }
            else{
            suma_total=suma_total+this.elementos[i]
            }
        }
        console.log("la suma de los valores es :",suma_total)
    }
//Ejercicio 4
    this.devolverNumPares= function(){
        pares=[]
        for(let contador = this.primero; contador <= this.final; contador++){
            const info = this.elementos[contador];
            if(info%2==0){
                pares.push(info)
            }
        }
        return pares
    }
//Ejericio 5
    this.devolverNumImpares = function(){
        impares = []
        for(let contador = this.primero; contador < this.final; contador++){
            const info = this.elementos[contador]
            if(info % 2 != 0) {
                impares.push(info)
            }
        }
        return impares
    }

//Ejercicio 6
    this.devolverStrings=()=>{
        strings=[]
        for(let i = this.primero; i<=this.final; i++){
            const info= this.elementos[i];
            if (typeof info == 'string'){
                strings.push(info)
            }
        }
        return strings
    }

//Ejericio 7
    this.tipoDato = () => {
        let longitud=this.final-this.primero
        for (var i = 0; i < longitud; i++) {
        tipoDatos.push(typeof this.elementos[i])
        }
    this.eliminarDuplicados()
    }

    this.eliminarDuplicados=function(){
    const result = [];
    tipoDatos.forEach((item)=>{
        if(!result.includes(item)){
            result.push(item);
        }
    })
    this.conteDatos(result)
    }

// Ejercicio 8 
    this.eliminarDato=(dato)=>{
      let elementosNuevo = []
      let finalNuevo = 0
      for(let i=this.primero; i<=this.final; i++){
        if(this.elementos[i] != dato && this.elementos[i] != undefined){
          elementosNuevo[finalNuevo] = this.elementos[i];
          finalNuevo++;
        }
      }
      this.elementos = elementosNuevo
      this.primero = 0
      this.final = finalNuevo
      return this.elementos
    }


//Ejericio 9
     this.eliminarPorPosicion = (position) =>{
        tipoDatos.forEach((i) => {
        var tipoDatos=(i)
        var count=0
        let longitud=this.final-this.primero
        for (var i = 0; i < longitud; i++) {
            if(typeof this.elementos[i] == tipoDatos){
                count++;
            }
        }
        console.log("cantidad de datos de tipo:"+tipoDatos+"="+count)
        })
    }

//Ejercicio 10 
    this.eliminarDatosHastaPosicion=function(posicion){
        let elementosNuevo = []
        let primeroNuevo = 0
        for(let i=this.primero; i<=this.final; i++){
            if(i>posicion && this.elementos[i] != undefined){
                elementosNuevo[primeroNuevo] = this.elementos[i];
            primeroNuevo++
            }
        }
        this.elementos = elementosNuevo
        this.primero = primeroNuevo
        return this.elementos
                
    }   
}



const fila1=new ColaFila()
fila1.encolarNumElementos(7)
console.log(fila1.tamano_fila())
fila1.encolar(3)
console.log("Los elementos son: ", fila1.imprimir())
console.log("La secuencia Par Impar esta: ", fila1.secuParImpar())
console.log("Los numeros pares de la fila son:", fila1.devolverNumPares())
fila1.encolar("Luis")
fila1.encolar("Pipe")
fila1.encolar("Laura")
console.log("Los elementos son: ", fila1.imprimir())
console.log("Los strings de la fila son:", fila1.devolverStrings())
fila1.encolar("Gloria")
fila1.encolar("Camilo")
console.log("Los elementos son: ", fila1.imprimir())
console.log("Eliminando el dato Laura: ", fila1.eliminarDato('Laura'))
console.log("eliminando los datos hasta la posicion 5: ", fila1.eliminarDatosHastaPosicion(5))
console.log(fila1.tamano_fila())










