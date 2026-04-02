export class Endereco {
    rua: string
    numero: string
    cidade: string
    cep: string

    constructor(rua:string,numero:string,cidade:string,cep:string){
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
        this.cep = cep
    }
}