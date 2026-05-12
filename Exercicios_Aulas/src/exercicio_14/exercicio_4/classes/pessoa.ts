export class Pessoa {
    nome: string
    email: string
    dataNascimento: string

    constructor(nome: string, email: string, dataNascimento: string){
        this.nome = nome
        this.email = email
        this.dataNascimento = dataNascimento
    }

    validarNome(): void {
        let nomeValidado = this.nome.slice(0,this.nome.length).toUpperCase()
        let firstWord = this.nome.slice(0,1)
        let lastWord = this.nome.slice(this.nome.length-1,this.nome.length)
        try {
            if(firstWord == " " || lastWord == " "){
                console.log("Primeira letra vazia ou Ultima letra vazia")
                throw new Error("Nome esta indevido com as diretrizes do Sistema")
            }
            if(this.nome === nomeValidado){
                console.log("Nome Validado com sucesso")
                return
            }
            console.log("Nome nao esta totalmente em caixa alta")
            throw new Error("Nome esta indevido com as diretrizes do Sistema")
        }catch(erro){
            if(erro instanceof Error){
                console.log("Erro Fatal: ", erro.message)
            }
        }
    }
    validarEmail(): void {
        try{
            if(this.email.includes("@") && this.email.includes(".com")){
                console.log("Email validado com sucesso")
                return
            }
            throw Error("Email nao contem [ @ ] ou [ .com ]")
        }catch(erro){
            if(erro instanceof Error){
                console.log(erro.message)
            }
        }
    }
    validarDataNascimento(): void {
        try{
            if(!this.dataNascimento.includes("/")){
                throw new Error("Data de nascimento nao chegue o formato dd/mm/yyyy")
            }
            for (let i = 1; i < 4; i++) {
                if(i == 1){
                    let firstValidation = this.dataNascimento.slice(0,2)
                    let validationBar = this.dataNascimento.slice(2,3)
                    if(validationBar.includes("/")){
                        if(Number(firstValidation) > 0 && Number(firstValidation) <= 31){
                            continue
                        }
                        throw new Error("Data de nascimento nao chegue o formato dd/mm/yyyy")
                        break
                    }
                }
                if(i == 2){
                    let secondValidation = this.dataNascimento.slice(3,5)
                    let validationBar = this.dataNascimento.slice(5,6)
                    if(validationBar.includes("/")){
                        if(Number(secondValidation) > 0 && Number(secondValidation) <= 31){
                            continue
                        }
                        throw new Error("Data de nascimento nao chegue o formato dd/mm/yyyy")
                        break
                    }
                }
                if(i == 3){
                    let treeValidation = this.dataNascimento.slice(6,10)
                    if(Number(treeValidation) > 1927 && Number(treeValidation) <= 2026){
                        continue
                    }
                    throw new Error("Data de nascimento nao chegue o formato dd/mm/yyyy ou sua Idade esta acima de 99 anos")
                    break
                    }
            }
            console.log("Data de nascimento validada com sucesso")
            return
        }catch(erro){
            if(erro instanceof Error){
                console.log(erro.message)
            }
        }
    }
}
