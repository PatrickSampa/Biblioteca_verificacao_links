import  {tratarErroLink}  from "./tratarErro.js"

function extrairLinks(listaLinks){
    return listaLinks.map((objetoLinks) => Object.values(objetoLinks).join())
}

async function statusURL(arrayURL){
    
    const status =  await Promise.all( arrayURL.map(async (URL) => {
        try{
            const verificacao =  (await fetch(URL)).status
            const verificacao2 =  (await fetch(URL)).statusText
            return `${verificacao} - ${verificacao2}`

        }
        catch(erro){
            return tratarErroLink(erro)
        }
    }))
     return status;
}



export  default async function listaValidacao(lista){
    const extrairURL = extrairLinks(lista)
    const StatusUrlLinks= await statusURL(extrairURL)

    return lista.map((novoArrayLinks, indice) => ({
        ...novoArrayLinks,
        status: StatusUrlLinks[indice]
    }))

}

