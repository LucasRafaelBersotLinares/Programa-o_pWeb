import {Detalhes} from "./detalhes"
import {Pacote} from "./pacote"

export class Voo {
    id: string
    data_envio: string
    detalhes: Detalhes
    listaPacotes: Pacote[]

    constructor(dados: any){
        this.id = dados.id_voo
        this.data_envio = dados.data_envio
        this.detalhes = new Detalhes(dados.detalhes.altitude_max, dados.detalhes.sensores)
        this.listaPacotes = dados.pacotes.map((item: any) => {
            return new Pacote(item.peso,item.descricao)
        })
    }

    getPesoTotal(): number {
        let pesoTotal: number = 0
        for (let i = 0; i < this.listaPacotes.length;i++){
            pesoTotal += this.listaPacotes[i].peso
        }
        return pesoTotal
    }

    listaSensores(): void {
        for(let i = 0; i<this.detalhes.sensores.length;i++){
            console.log("Sensores contidos: ",this.detalhes.sensores[i])
        }
    }

    listaID(): void {
        console.log("ID do Voo: ", this.id)
    }
}