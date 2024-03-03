/**Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
o "Aprovado", se a média alcançada for maior ou igual a sete;
o "Reprovado", se a média for menor do que sete;
o "Aprovado com Distinção", se a média for igual a dez. */

import { print , get_number } from "./io.js"

//função que retorna a aprovação/reprovação do aluno
function retornar_aprovacao(nota_1,nota_2){

    //computa a média
    const media = (nota_1 + nota_2) / 2

    //se a média for igual a 10
    if(media === 10){

        print('[ APROVADO COM DISTINÇÃO ]')
    }
    //se for menr que 10 e maior  ou igual a 7
    else if(media >= 7){

        print('[ APROVADO ]')
    }
    //se for menor que 7
    else{

        print('[ REPROVADO ]')
    }
}

function main(){

    //entrada das notas
    const nota_1 = get_number('Informe o valor da primeira nota: ')
    const nota_2 = get_number('Informe o valor da segunda nota: ')

    retornar_aprovacao(nota_1,nota_2)
}

main()