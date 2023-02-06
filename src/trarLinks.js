import fs from "fs"
import pegarArquivo from "./index.js"
import listaValidacao from "./http-validacao.js";





async function imprimeLista(valida=false,resultado){
    if(valida){
        console.log(await listaValidacao(resultado))
        
    }
}




async function processarTexto(caminho){
    const valida = "--valida"

    try{
        
        fs.lstatSync(caminho) 

    }
    catch (erro){
        if(erro.code === 'ENOENT'){
            console.log("arquivo ou diretório não existe")
            return
        }
    }

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegarArquivo(caminho)
        imprimeLista(valida,resultado)
    }
    else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeArquivoDiretorio) => {
            const lista = await pegarArquivo(`${caminho}/${nomeArquivoDiretorio}`)
            imprimeLista(valida,lista)
        });
    }


}

processarTexto('./arquivos/texto.md')