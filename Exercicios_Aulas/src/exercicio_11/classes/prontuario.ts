import { Paciente } from "./paciente"
import { Medico } from "./medico"

export class Prontuario {
    paciente: Paciente
    medico: Medico

    constructor(paciente: Paciente,medico:Medico){
        this.paciente = paciente
        this.medico = medico
    }

    mostrar(){
        console.log(`Nome do paciente: ${this.paciente.pessoa.nome}`)
        console.log(`Nome do medico: ${this.medico.pessoa.nome}`)

        for (let i = 0; i<this.paciente.remedios.length;i++){
            console.log(`Nome do paciente: ${this.paciente.remedios[i]?.nome}`)
        }
        //
    }



}