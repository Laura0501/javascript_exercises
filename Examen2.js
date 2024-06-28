function PilaStack(){
    this.pacientesUnidos=[]
    this.elementos = []
    this.pacientesPreferenciales=[]
    this.persona=function(nombre,edad,condicion){
        this.nombre=nombre
        this.edad=edad
        this.condicion=condicion
        return ("nombre:" +this.nombre + ", edad :"+this.edad+" ,condicion: "+this.condicion)
    }
    this.insertarPaciente= function(a,b,c){
        let usuario=this.persona(a,b,c)
        if(c == true){
            this.pacientesPreferenciales.push(usuario)

        }else{
            this.elementos.push(usuario)
        }
        
    }
    this.unirArreglos= function(){
        for(let i=0; i<this.pacientesPreferenciales.length; i++){
            this.pacientesUnidos.push(this.pacientesPreferenciales[i])
        }

        for(let i=0; i<this.elementos.length; i++){
            this.pacientesUnidos.push(this.elementos[i])
        }
    }
    this.imprimirPaciente= function(){
        return this.pacientesUnidos
    }
}


const pila1=new PilaStack()

pila1.insertarPaciente("laura",140,false)
pila1.insertarPaciente("Daniela",10,false)
pila1.insertarPaciente("Armando",19,true)
pila1.insertarPaciente("luis miguel",19,false)
pila1.insertarPaciente("Viviana",140,false)
pila1.insertarPaciente("Jaime",140,true)
pila1.insertarPaciente("Lila",140,true)
pila1.unirArreglos()
console.log(pila1.imprimirPaciente())
    