class Item {
    nome: string
    quantidade: number

    constructor(nome:string,quantidade:number){
        this.nome=nome
        this.quantidade=quantidade
    }
}

class Produto {
    id:number
    nome:string
    itens: Item[]

    constructor(id:number,nome:string,itens:Item[]){
        this.id=id
        this.nome=nome
        this.itens=itens
    }
}


/* Significadode JSON

{
    "id": 4,
    "nome": " Kit Escolar ",
    "itens": [
        { "nome": "Lápis", "quantidade": 2 },
        { "nome": " Borracha", "quantidade": 1 },
        { "nome": "Régua", "quantidade": 1 }
    ]
}

*/