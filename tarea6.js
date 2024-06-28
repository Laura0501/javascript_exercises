class PilaStack {
  // 1. Constructor
  // se crea el constructor con los atributos basicos que necesita la clase
  constructor(){
    this.elementos = [];
  }
  // 2. Insertar
  insertar(elemento){
    // se agrega el elemento al arreglo
    this.elementos.push(elemento);
  }
  // 3. Extraer
  extraer(){
    // se toma el ultimo elemento con el tamaño - 1 recordar que los arreglos empiezan en 0 no en 1
    const ultimo = this.elementos[this.elementos.length - 1];
    // se elimina del arreglo el ultimo elemento ingresado
    this.elementos.pop();
    // devuelve el ultimo elemento
    return ultimo;
  };
  // 4. Longitud
  longitud(){
    // tamaño de la pila
    return this.elementos.length;
  }
  // 5. Ver proximo
  ver_proximo(){
    // se mira el siguiente elemento a salir de la pila pero sin eliminarlo del arreglo
    return this.elementos[this.elementos.length - 1];
  }
  // 6. Ver Elementos o toda la pila
  ver_elementos(){
    // se mira toda la pila como esta
    return this.elementos;
  }
}


const pila1=new PilaStack()
pila1.insertar("Camilo")
pila1.insertar("Luis")
pila1.insertar("Pipe")
pila1.insertar("Valen")
pila1.insertar("Nick")
console.log("Los elementos de la pila son: ", pila1.ver_elementos())
console.log("La longitud de la pila es: ", pila1.longitud())
pila1.extraer()
pila1.extraer()
pila1.extraer()
console.log("Los elementos de la pila ahora son: ", pila1.ver_elementos())
pila1.insertar("Gloria")
pila1.insertar("Jorge")
pila1.insertar("Fredy")
pila1.insertar("Emiliano")
pila1.insertar("Manuela")
console.log("La fila estara vacia?", pila1.ver_elementos())
console.log("LToda la pila es: ", pila1.ver_elementos())
console.log("El siguiente es:", pila1.ver_proximo())
pila1.extraer()
pila1.extraer()
pila1.extraer()
pila1.extraer()
pila1.extraer()
pila1.extraer()
pila1.extraer()
console.log("La fila estara vacia?", pila1.ver_elementos())
