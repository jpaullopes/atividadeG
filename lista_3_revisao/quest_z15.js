/**Uma fruteira está vendendo frutas com a seguinte tabela de preços:
 * Até 5 Kg Acima de 5 Kg
Morango R$ 2,50 por Kg R$ 2,20 por Kg
Maçã R$ 1,80 por Kg R$ 1,50 por Kg

 * Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
 */

import {get_number, print} from './io.js'

function validar_peso_das_furtas(quantidade_morangos,quantidade_macas){

    return (quantidade_macas > 0) || (quantidade_morangos > 0)
}

function valor_total_de_pagamento(quantidade_morangos,quantidade_macas){

    let preco_morango = Number()
    let preco_macas = Number()
    let valor_de_pagamento_morangos = Number()
    let valor_de_pagamento_macas = Number()

    if(quantidade_morangos <= 5){

        preco_morango = 2.50
        valor_de_pagamento_morangos = preco_morango * quantidade_morangos
    }
    else{

        preco_morango = 2.20
        valor_de_pagamento_morangos = preco_morango * quantidade_morangos
    }

    if(quantidade_macas <= 5){

        preco_macas = 1.80
        valor_de_pagamento_macas = preco_macas * quantidade_macas
    }
    else{

        preco_macas = 1.50
        valor_de_pagamento_macas = preco_macas * quantidade_macas
    }

    let valor_total_compra = valor_de_pagamento_macas + valor_de_pagamento_morangos
    const total_peso_frutas = quantidade_macas +quantidade_morangos

    if(total_peso_frutas > 8 || valor_total_compra > 25){

        valor_total_compra = valor_total_compra * 1.1
    }

    return valor_total_compra
}

function main(){

    print(`     [ ---TABELA DE PREÇO--- ]
          |Até 5 Kg  | Acima de 5 Kg|
Morango   |R$ 2,50   |    R$2,20    |
Maçã      |R$1,80    |    R$1,50    |
`)

    const quantidade_morangos  = get_number('Informe a quantidade em Kg de morangos: ')
    const quantidade_macas  = get_number('Informe a quantidade em Kg de maças: ')

    const valor_de_pagamento = valor_total_de_pagamento(quantidade_morangos,quantidade_macas)

    
    if(validar_peso_das_furtas(quantidade_morangos,quantidade_macas)){

        print(`O valor total a ser pago é de [R$ ${valor_de_pagamento.toFixed(2)}].`)
    }
    else{
        print('VALOR DO PESO INVÁLIDO')
    }
}

main()