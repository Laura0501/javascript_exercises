//Grupo 3

function Planta(es_de_sol, tipos_de_farmacos, quimica, tiempo_de_crecimiento_final, tiempo_de_crecimiento_actual, plagas, luz, humedad, nutrientes){
	this.es_de_sol=es_de_sol
	this.tipos_de_farmacos=tipos_de_farmacos
	this.quimica=quimica
	this.tiempo_de_crecimiento_final=tiempo_de_crecimiento_final
	this.tiempo_de_crecimiento_actual=tiempo_de_crecimiento_actual
	this.plagas=plagas
	this.luz=luz
	this.humedad=humedad
	this.nutrientes=nutrientes
	this.descripcion=()=>{
		console.log(`Ficha Tecnica de la Planta ${this.es_de_sol} ${this.tipos_de_farmacos} 
		${this.quimica} ${this.tiempo_de_crecimiento_final} ${this.tiempo_de_crecimiento_actual} ${this.plagas} ${this.luz} ${this.nutrientes}`)
	}
	this.randomPlaga=()=>{
		const plagas=["Cochinillas","Pulgones","MoscaBlanca","Ácaros","Gusanos"]
		const numeros=[1,2,3,4,5,6,7,8,9,10]
		let random=numeros[Math.floor(Math.random() * numeros.length)]
		if(random<=4){
			let plaga=plagas[random]
			this.plagas.push(plaga)
			if(random==0){
				this.luz=this.luz-1000
				this.tiempo_de_crecimiento_actual=this.tiempo_de_crecimiento_final-10
			}
			if (random==1){
				this.tiempo_de_crecimiento_actual=this.tiempo_de_crecimiento_final-17
				this.humedad=this.humedad-17
			}
			if (random==2){
				this.tiempo_de_crecimiento_actual=this.tiempo_de_crecimiento_final-5
				this.nutrientes=this.nutrientes-23
			}
			if (random==3){
				this.tiempo_de_crecimiento_actual=this.tiempo_de_crecimiento_final-1
				this.luz=this.luz-5600
				this.humedad=this.humedad-5
			}
			if (random==4){
				this.tiempo_de_crecimiento_actual=this.tiempo_de_crecimiento_final-13
				this.nutrientes=this.nutrientes-23
				this.humedad=this.humedad-3
			}
		}
		else{
			console.log(`No se ha modificado su ficha ya que no hay plaga disponible para el numero`) 
		}
	}
	this.antidotos=()=>{
		let antidotosToxicosVen=[]
		let antidotos=[]
		for (let i=0; i<this.quimica.length; i++) {
                if(this.quimica[i]=='Cianuro'){
                	antidotos.push("TIOSULFATO SÓDICO")
                }
                if(this.quimica[i]=='Hierro'){
                	antidotos.push("DEFEROXAMINA")
                }
                if(this.quimica[i]=='Digoxina'){
                	antidotos.push("ANTIDIGITAL")
                }
                if(this.quimica[i]=='Yodo'){
                	antidotos.push("ALMIDÓN")
                }
            }
		console.log(`La planta contiene los siguientes quimicos toxicos o venenosos ${antidotosToxicosVen}
			y sus antidotos son ${antidotos}`)
	}

}



const girasol=new Planta(true, ["colorante"], ["VitaminaC","Cianuro"], 40, 35, [], 6000, 85, 7500)
girasol.descripcion()
girasol.antidotos()
girasol.randomPlaga()
girasol.descripcion()
