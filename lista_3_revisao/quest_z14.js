/**Um posto está vendendo combustíveis com a seguinte tabela de descontos:
1. Álcool:
· até 20 litros, desconto de 3% por litro
· acima de 20 litros, desconto de 5% por litro
2. Gasolina:
· até 20 litros, desconto de 4% por litro
· acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90. */

import {input, get_number, print} from './io.js'

//verificar o tipo de combustivel é válido
function validar_combustivel(combustivel){

    return combustivel === 'A' || combustivel === 'G'
}

function computar_valor(combustivel, litros){

    let preco_litro = Number()
    let porcentagem_de_desconto = Number()
    let desconto_total = Number()
    
    if(combustivel === 'A'){
        
        preco_litro = 2.5
        
        if(litros <= 20){
            
            porcentagem_de_desconto = 3
            desconto_total = litros * porcentagem_de_desconto
            
        }
        else{
            porcentagem_de_desconto = 5
            desconto_total = litros * porcentagem_de_desconto
        }
    }
    else{

        preco_litro = 1.9

        if(litros <= 20){

            porcentagem_de_desconto = 4
            desconto_total = litros * porcentagem_de_desconto

        }
        else{
            porcentagem_de_desconto = 6
            desconto_total = litros * porcentagem_de_desconto
        }
    }

    const valor_sem_desconto = preco_litro * litros
    const valor_com_desconto = valor_sem_desconto - (valor_sem_desconto * (desconto_total / 100)) 

    return valor_com_desconto
}

function main(){

    print(
`A -> ÁLCOOL
G -> GASOLINA`)

    const tipo_combustivel = input('Informe o tipo de combustível: ').toUpperCase()
    const quantidade_combustivel = get_number('Informe o volume de combustível[L]: ')

    const valor_de_pagamento = computar_valor(tipo_combustivel,quantidade_combustivel)

    if(validar_combustivel(tipo_combustivel) && (quantidade_combustivel >= 0)){

        if(valor_de_pagamento < 0){

            print('GRÁTIS')
        }
        else{
            
            print(`O valor a ser pago será de [R$ ${valor_de_pagamento.toFixed(2)}].`)
        }

    }
    else{

        print('TIPO DE COMBUSTÍVEL INVÁLIDO')
    }


}

main()