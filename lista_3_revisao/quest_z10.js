/**Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre,
 * e calcule a sua média. A atribuição de conceitos obedece à tabela. O algoritmo deve mostrar
 * na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito 
 * for A, B ou C ou “REPROVADO” se o conceito for D ou E. */

import {get_number, print} from './io.js'

//função que computa a média
function computar_media(nota_1,nota_2){

    let media = (nota_1 + nota_2) / 2
    return media
}

//função que informa qual o conceito dependendo da média
function retornar_conceito(media){
    
    if(media >= 0 && media < 4){
        return 'E'
    }
    else if(media < 6){
        return 'D'
    }
    else if(media < 7.5){
        return 'C'
    }
    else if(media < 9){
        return 'B'
    }
    else{

        return 'A'
    }
    
}

//função que retorna true se os conceitos forem [A,B,C] e falso se não forem
function verificar_conceitos_aprovativos(conceito){

    return (conceito === 'A' || conceito === 'B' || conceito === 'C')
}

//função que informa de o resultado foi aprovativo ou não com base nos conceitos
function verificar_aprovacao(conceito){

    if(verificar_conceitos_aprovativos(conceito)){
        return 'APROVADO'
    }
    else{
        return 'REPROVADO'
    }
}

function main(){

    //informa qual o conceito cada média recebe para o usuário
    print(`
 |    Média    |Conceito|
 | 9.0 - 10.0  |   A    |
 | 7.5 - 9.0   |   B    |
 | 6.0 - 7.5   |   C    |
 | 4.0 - 6.0   |   D    |
 | 4.0 - 0     |   E    |
 `)

 //entrada das notas
    const nota_1 = get_number('Informe a nota 1: ')
    const nota_2 = get_number('Informe a nota 2: ')

    const media = computar_media(nota_1,nota_2)
    const conceito = retornar_conceito(media)
    const resultado = verificar_aprovacao(conceito)

    //caso o valor da média seja menor que 0 e maior que 10
    if(media < 0 || media > 10){

        print('INFORME VALORES VÁLIDOS PARA AS NOTAS[0 ATÉ 10]')
    }
    //se estiver tudo certinho com a média
    else{

        print(
` ---INFORMAÇÕES DO RESULTADO---
NOTA 1 = [${nota_1}]
NOTA 2 = [${nota_2}]
MÉDIA DAS NOTAS = [${media}]
CONCEITO = [${conceito}]
RESULTADO = [${resultado}]`)
    }

}

main()