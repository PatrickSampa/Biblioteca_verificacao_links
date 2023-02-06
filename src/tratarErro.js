import chalk from "chalk";
function tratarErro(erro){
    throw new Error(chalk.blue(erro.code, "Nome errado do caminho"))
}

function tratarErroLink(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return "Link não existe"
    }else{
        return "erro ao buscar página"
    }
}

export {tratarErro, tratarErroLink}
//função parar tratar erro caso acontece algo na modulo index.js
