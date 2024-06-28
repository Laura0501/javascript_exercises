//Ejercicio 2
    this.secuParImpar=()=>{
        let positionPar = true
        let positionImPar = true
        for(let i = 0; i<this.elementos.length; i++){
            if(i%2 == 1){
                a[i]%2 == 0 && (positionPar = false)
            }
            if(i%2 == 0){
                a[i]%2 == 1 && (positionPar = false)
            }   
        }
        return positionPar && positionPar

    }
//Ejercicio 4
    this.devolverNumPares= function(){
        const pares=[]
        if(this.primero === this.final){
            if(this.elementos[this.primero]%2==0){
                pares.push(this.elementos[this.primero])
            }
            return pares;
        }

        const info = this.elementos[this.primero]
        if(info%2==0){
            pares.push(this.elementos[this.primero])
        }
        delete this.elementos[this.primero];
        this.primero++;
        return pares;
    }

    this.Cadenas = function(){
    let longitud=this.final-this.primero
    let cadenas=[]
    for (var i = 0 ; i < longitud; i++) {
        let num=parseInt(this.elementos[i])
        if (isNaN(num)) {
          cadenas.push(this.elementos[i])
    }

    console.log("los valores string son :"+cadenas)
  }

}

}  

let a = [1,2,'asd']

const fila1=new ColaFila()
fila1.encolarNumElementos(8)
fila1.encolar(10)
console.log("Los elementos son: ", fila1.imprimir())
console.log("La secuencia Par Impar", fila1.secuParImpar())
console.log("El array con pares es:", fila1.devolverNumPares())


let longitud=this.final-this.primero
    let pos=p+1
    for (var a =0; a < pos; a++) {
          if (a< this.final && this.elementos[a+1] !== "undefined") {
            delete this.elementos[a]
          }
      }
  