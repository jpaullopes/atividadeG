/**13. Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a) "Telefonou para a vítima ?"
b) "Esteve no local do crime ?"
c) "Mora perto da vítima ?"
d) "Devia para a vítima ?"
e) "Já trabalhou com a vítima ?"
O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. 
Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", 
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como
 "Inocente". */

import { get_number,print } from "./io.js"

//racebe o texto(a pergunta) e caso seja 1(sim) vai adicionar mais 1 se não vai ser 0
function pergunta(mensagem){

    const resposta = get_number(mensagem)

    if(resposta === 1){

        return 1
    }
    else if(resposta === 0){
         
        return 0
    }

}

//recebe o contador e classifica a participação da pessoa no crime 
function classificador_participação_no_crime(contador){

    if(contador < 2){

        return "Inocente"
    }
    else if(contador === 2){
        return "Suspeita"

    }
    else if(contador <= 4){

        return "Cúmplice"
    }
    else{

        return "Assassino"
    }
}

function main(){

    let count = Number()

    print('[ SIM = 1  |  NÃO = 0 ]')

    //pergunta para o usuário
    count += pergunta("Telefonou para a vítima[1|0] ?")
    count += pergunta("Esteve no local do crime[1|0] ?")
    count += pergunta("Mora perto da vítima[1|0] ?")
    count += pergunta("Devia para a vítima[1|0] ?")
    count += pergunta("Já trabalhou com a vítima[1|0] ?")

    const participação_no_crime = classificador_participação_no_crime(count)

    print(`O nível de classificação na participação do crime é de: [${participação_no_crime}].`)
}

main()