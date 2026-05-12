class Categoria {
    id: number
    nome: string

    constructor(id: number, nome: string){
        this.id = id
        this.nome = nome
    }   
}




class Produto {
    id: number
    nome: string
    preco: number   
    categoria: Categoria

    constructor(id: number, nome: string, preco: number, categoria: Categoria){
        this.id = id
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    }
}

/* Significado em JSON

{
    "id": 2,
    "nome": "Notebook",
    "preco": 2500.00,
    "categoria": {
        "id": 1,
        "nome": "Informática "
    }
}

*/