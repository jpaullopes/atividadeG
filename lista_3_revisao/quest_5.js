/**Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a 
 * decisão é sempre pelo mais barato. */

import { print , get_number , input} from "./io.js"

//retornar qual é o menor valor dos 3 informados
function menor_valor(vl_1,vl_2,vl_3){
    let menor = Number()

    if(vl_1 < vl_2 && vl_1 < vl_3){
        menor = vl_1
    }
    else if(vl_2 < vl_1 && vl_2 < vl_3){
        menor = vl_2
    }
    else if(vl_3 < vl_1 && vl_3 < vl_2){
        menor = vl_3
    }

    return menor
}

function main(){

    //entrada dos valores informados
    const valor_1 = get_number('Informe o valor[R$] do produto 1: ')
    const valor_2 = get_number('Informe o valor[R$] do produto 2: ')
    const valor_3 = get_number('Informe o valor[R$] do produto 3: ')

    //receber o menor valor
    const menor = menor_valor(valor_1,valor_2,valor_3)

    //confirmar a qual produto corresponde o menor valor e informar para o usuário
    if(menor === valor_1){
        print(`O produto recomendado para a compra é o produto 1 = [R$ ${valor_1.toFixed(2)}].`)
    }
    else if(menor === valor_2){
        print(`O produto recomendado para a compra é o produto 2 = [R$ ${valor_2.toFixed(2)}].`)
    }
    else{
        print(`O produto recomendado para a compra é o produto 3 = [R$ ${valor_3.toFixed(2)}].`)
    }

}

main()