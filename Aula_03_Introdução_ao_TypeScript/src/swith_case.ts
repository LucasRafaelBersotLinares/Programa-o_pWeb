let perfil:string = "admin"

switch(perfil){
    case "admin":
        console.log("Acesso total")
        break
    case "usuario":
        console.log("acesso limitado")
        break
    case "visitante":
        console.log("Apenas leitura")
        break
    default:
        console.log("Perfil não encontrado")
}