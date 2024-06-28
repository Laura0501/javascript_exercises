function ColaFila() {
    this.elementos = {}
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
}

const cola1=new ColaFila()
cola1.encolar("JuanMa")
cola1.encolar("Edwin")
cola1.encolar("Pipe")
cola1.encolar("Alejo")
cola1.encolar("Valen")
console.log('Los elementos de la fila son :', cola1.imprimir())
console.log('El tamaño de la fila es:', cola1.tamano_fila())
console.log('Has desencolado a :', cola1.desencolar())
console.log('Has desencolado a :', cola1.desencolar())
console.log('Has desencolado a :', cola1.desencolar())
console.log('Los elementos de la fila son :', cola1.imprimir())
cola1.encolar("Gloria")
cola1.encolar("Jorge")
cola1.encolar("Felipe")
cola1.encolar("Camilo")
cola1.encolar("Eliza")
console.log('Los elementos de la fila son :', cola1.imprimir())

console.log('La fila esta vacia', cola1.esta_vacia())
console.log('Toda la fila es:', cola1.imprimir())
console.log('El siguiente es:', cola1.ver_siguiente())


console.log('Has desencolado a :', cola1.desencolar())
console.log('Has desencolado a :', cola1.desencolar())
console.log('Has desencolado a :', cola1.desencolar())
console.log('Has desencolado a :', cola1.desencolar())
console.log('Has desencolado a :', cola1.desencolar())
console.log('Has desencolado a :', cola1.desencolar())
console.log('Has desencolado a :', cola1.desencolar())

console.log('La fila esta vacia', cola1.esta_vacia())

