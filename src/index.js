import chalk from "chalk";
import fs from "fs";
import {tratarErro} from "./tratarErro.js";
import teste from "./teste.js";


//Trabalhando com código assincrono. Trabalhando também com async;await


function extrairLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]
    const resultado = capturas.map((capituras) => ({[capituras[1]]: capituras[2] }))
    return resultado.length !== 0 ? resultado : "Não há links nesse Arquivo"
}



async function pegarArquivo(caminhoDoArquivo){
    try{
        
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo,encoding)
        return extrairLinks(texto)
    }
    catch(erro){
        tratarErro(erro)
    }
}



/* function pegarArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, encoding).then((Text) => {
        console.log(Text)
    }).catch(tratarErro)
} */


/* function pegarArquivo(caminhoDoArquivo){
const encoding = 'utf-8'
fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
    if(erro){
        tratarErro(erro)
    }

    console.log(chalk.green(texto))
})
} */

export default pegarArquivo;
