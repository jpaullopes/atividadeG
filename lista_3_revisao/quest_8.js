/**Para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que
depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a
11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde
ao salário bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a
quantidade de horas trabalhadas no mês.
Desconto do IR:
o Salário Bruto até R$ 900,00 (inclusive) - isento
o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5%
o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10%
o Salário Bruto acima de R$ 2.500,00 - desconto de 20% */

import { get_number,print } from "./io.js"

//função que calcula o desconto do imposto de renda sobre o salário bruto
function desconto_imposto_de_renda(salario){

    let porcentagem_imposto = Number()

    if(salario <= 900){

        porcentagem_imposto = 0
    }
    else if(salario <= 1500){

        porcentagem_imposto = 5
    }
    else if(salario <= 2500){
        porcentagem_imposto = 10
    }
    else{
        porcentagem_imposto = 20
    }

    const valor_descontado = salario * (porcentagem_imposto / 100)

    return valor_descontado
}

//função que computa o valor do FGTS sobre o salário
function computar_fgts(salario){

    const porcentagem_fgts = 11
    const valor_fgts = salario * (porcentagem_fgts / 100)
    return valor_fgts
}

//função que informa os dados da folha de pagamento
function folha_de_pagamento(valor_hora,quantidade_hora){

    const salario_bruto = valor_hora * quantidade_hora
    const valor_do_IR = desconto_imposto_de_renda(salario_bruto)
    const valor_fgts = computar_fgts(salario_bruto)
    const valor_inss = salario_bruto * 0.1
    const desconto_total = valor_do_IR + valor_inss
    const salario_liquido = salario_bruto - desconto_total

    print(`
   ---[ FOLHA DE PAGAMENTO ]---
SALÁRIO BRUTO =        [R$ ${salario_bruto.toFixed(2)}]
IMPOSTO DE RENDA(IR) = [R$ ${valor_do_IR.toFixed(2)}]
INSS =                 [R$ ${valor_inss.toFixed(2)}]
FGTS =                 [R$ ${valor_fgts.toFixed(2)}]
TOTAL DE DESCONTOS =   [R$ ${desconto_total.toFixed(2)}]
SALÁRIO LIQUIDO =      [R$ ${salario_liquido.toFixed(2)}]`)

}
function main(){

    //entrada de dados(valor da hora e quantidade total de horas)
    const valor_hora = get_number('Informe o valor ganho por hora[R$]: ')
    const quantidade_hora = get_number('Informe a quantidade de horas trabalhadas no mês[Hrs]: ')

    //caso os valores sejam maiores que 0 e não negativos
    if(valor_hora > 0 && quantidade_hora > 0){

        folha_de_pagamento(valor_hora,quantidade_hora)
    }
    //se forem vão ser inavalidados
    else{

        print('INFORME VALORES VÁLIDOS')
    }
}

main()