//Leia um número e escreva se o número é inteiro ou decimal.

import {get_number, print} from './io.js'

//função que retorna o tipo do número
function verificar_tipo_numerico(numero){

    //se o número for decimal
    //transformar o número em valor absoluto(porque se o número for negativo ele vai dizer que é inteiro)
    if(Math.abs(numero) % 1 > 0){

        return 'DECIMAL'
    }
    //se for inteiro
    else{

        return 'INTEIRO'
    }
}

function main(){

    //entrada do número
    const numero = get_number('Informe o número: ')

    //variavel recebe o tipo do número
    const tipo_numero = verificar_tipo_numerico(numero)

    print(`O número [${numero}] é do tipo: [${tipo_numero}].`)
}

main()