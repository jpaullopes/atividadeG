/**Escreva um algoritmo que leia o salário de um colaborador e o reajuste segundo o seguinte 
 * critério, baseado no salário atual:
o salários até R$ 280,00 (incluindo) : aumento de 20%
o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
o salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
· o salário antes do reajuste;
· o percentual de aumento aplicado;
· o valor do aumento;
· o novo salário, após o aumento. */

import {get_number, print} from './io.js'

//função que calcula o novo salaario depois do aumento
function calcular_aumento(salario,porcentagem_aumento){

    const salario_aumento = salario + (salario * (porcentagem_aumento / 100))
    return salario_aumento
}

//função que é responsavel por calcular o reajuste e informa-lo
function reajustador_de_salario(salario){

    let novo_salario = Number()
    let porcentagem_de_aumento = Number()
    let valor_de_aumento = Number()

    //caso o salario seja menor-igual à 280
    if(salario <= 280){

        porcentagem_de_aumento = 20
        novo_salario = calcular_aumento(salario,porcentagem_de_aumento)
        valor_de_aumento = novo_salario - salario

    }
    //caso o salário seja menor que 700 e maior que 280
    else if(salario < 700){

        porcentagem_de_aumento = 15
        novo_salario = calcular_aumento(salario,porcentagem_de_aumento)
        valor_de_aumento = novo_salario - salario

    }
    //caso o salário seja maior igual que 700 e menor que 1500
    else if(salario < 1500){

        porcentagem_de_aumento = 10
        novo_salario = calcular_aumento(salario,porcentagem_de_aumento)
        valor_de_aumento = novo_salario - salario
    }
    //caso o salário seja 1500 ou maior
    else{

        porcentagem_de_aumento = 5
        novo_salario = calcular_aumento(salario,porcentagem_de_aumento)
        valor_de_aumento = novo_salario - salario
    }

    //informa os dados referentes ao aumento do salário
    return (
`SALÁRIO PRÉ-REAJUSTE: [R$ ${salario.toFixed(2)}] 
·PERCENTUAL DE AUMENTO: [${porcentagem_de_aumento}%]
·VALOR DO AUMENTO: [R$ ${valor_de_aumento.toFixed(2)}]
·SALÁRIO PÓS-AUMENTO: [R$ ${novo_salario.toFixed(2)}]`)
}

function main(){

    //entrada do valor do salário em R$
    const salario_pre_reajuste = get_number('Informe o valor do salário[R$]: ')

    const informacao_do_aumento = reajustador_de_salario(salario_pre_reajuste)

    //o salário não pode ser negativo
    if(salario_pre_reajuste > 0){

        print(
`Os dados referentes ao novo salário são:
${informacao_do_aumento}`)

    }
    else{

        print('INFORME UM VALOR VÁLIDO.')
    }

}

main()