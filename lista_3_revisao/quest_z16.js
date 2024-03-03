/**O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
Até 5 Kg Acima de 5 Kg
File R$ 4,90 por Kg R$ 5,80 por Kg
Alcatra R$ 5,90 por Kg R$ 6,80 por Kg
Picanha R$ 6,90 por Kg R$ 7,80 por Kg
Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção,
porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o
cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um programa que peça o tipo
e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da
compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar. */

import { print, input, get_number } from "./io.js"

//validar a escolha do tipo de carne
function validar_tipo_de_carne(escolha_de_carne){

    return escolha_de_carne === 'F' || escolha_de_carne === 'A' || escolha_de_carne === 'P'
}

//validar a escolha do tipo de pagamento
function validar_tipo_de_pagamento(escolher_forma_pagamento){

    return escolher_forma_pagamento === 'T' || escolher_forma_pagamento === 'D' || escolher_forma_pagamento === 'C'
}

//fornece as informações de compra(cupom fiscal)
function informações_da_compra(tipo_de_carne,quantidade,pagamento){

    let preco_file = Number()
    let preco_alcatra = Number()
    let preco_picanha = Number()

    let valor_de_pagamento_total = Number()

    //caso o tipo de carne seja file
    if(tipo_de_carne === 'F'){
        //dependendo da quantidade de carne o valordo kg muda
        if(quantidade <= 5){

            preco_file = 4.9
            valor_de_pagamento_total = preco_file * quantidade
        }
        else{

            preco_file = 5.8
            valor_de_pagamento_total = preco_file * quantidade
        }
    }
    //se o tipo de carne for alcatra
    else if(tipo_de_carne === 'A'){
        //dependendo da quantidade em kg de carne o valor muda
        if(quantidade <= 5){
        preco_alcatra = 5.9
        valor_de_pagamento_total = preco_alcatra * quantidade
        }
        else{
        preco_alcatra = 6.8
        valor_de_pagamento_total = preco_alcatra * quantidade
        }
    }
    //se o tipo de carne for picanha
    else{
        //dependendo da quantidade em kg de carne o valor muda
        if(quantidade <= 5){

        preco_picanha = 6.9
        valor_de_pagamento_total = preco_picanha * quantidade
        }
        else{

        preco_picanha = 7.8
        valor_de_pagamento_total = preco_picanha * quantidade
        }

    }

    const porcentagem_de_desconto = 5
    const valor_de_desconto = valor_de_pagamento_total * (porcentagem_de_desconto / 100)
    let valor_de_pagamento_definitvo = valor_de_pagamento_total

    //caso a forma de pagamento seja o cartão tabajaras vai haver um desconto no valor total.
    if(pagamento === 'T'){

        valor_de_pagamento_definitvo = valor_de_pagamento_total - valor_de_desconto

    }

    //geração do copom fiscal
    print(` --- [ CUPOM FISCAL ] --- 
TIPO DE CARNE - [${tipo_de_carne}]
QUANTIDADE DE CARNE - [${quantidade} Kg]
TIPO DE PAGAMENTO - [${pagamento}]
PREÇO TOTAL - [R$ ${valor_de_pagamento_total.toFixed(2)}]
VALOR DO DESCONTO - [R$ ${valor_de_desconto.toFixed(2)}]
VALOR DE PAGAMENTO - [R$ ${valor_de_pagamento_definitvo.toFixed(2)}]`)
}
function main(){

    //informa a tabela de preço para a pessoa
    print(`
___________|  [0-5 Kg] |   [+5 Kg] |
File[F]    |  R$ 4,90  |   R$ 5,80 |
Alcatra[A] |  R$ 5,90  |   R$ 6,80 |
Picanha[P] |  R$ 6,90  |   R$ 7,80 |
`)
//entrada dos dados(tipo de carne, quantidade, e forma de pagamento)
    const escolha_de_carne = input('Informe o tipo de carne que deseja[F,A,P]: ').toUpperCase()
    const quantidade_de_carne = get_number('Informe a quantidade de carne comprada[Kg]: ')

    //informa as formas de pagamento
    print(`     [ FORMA DE AGAMENTO ]
CARTÃO TABAJARA[T] - DESCONTO 5%
DINHEIRO[D] - DESCONTO 0%
CARTÃO(OUTROS)[C] - DESCONTO 0%
`)
    const escolher_forma_pagamento = input('Informe a forma de pagamento[T,D,C]: ').toUpperCase()


    //caso a validação dos dados esteja verdadeira
    if(validar_tipo_de_carne(escolha_de_carne) && validar_tipo_de_pagamento(escolher_forma_pagamento)){

        informações_da_compra(escolha_de_carne,quantidade_de_carne,escolher_forma_pagamento)

    }
    //caso não passe na validação
    else{
        print('TIPO DE CARNE OU FORMA DE PAGAMENTOS SELECIONADOS SÃO INVÁLIDOS.')
    }
}

main()