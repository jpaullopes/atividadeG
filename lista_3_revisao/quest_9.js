/**Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), 
 * se digitar outro valor deve aparecer valor inválido. */

import {get_number, print} from './io.js'

function verificar_dia_da_semana(numero){

    if(numero === 1){
        return 'DOMINGO'
    }
    else if(numero === 2){
        return 'SEGUNDA-FEIRA'
    }
    else if(numero === 3){
        return 'TERÇA-FEIRA'
    }
    else if(numero === 4){
        return 'QUARTA-FEIRA'
    }
    else if(numero === 5){
        return 'QUINTA-FEIRA'
    }
    else if(numero === 6){
        return 'SEXTA-FEIRA'
    }
    else if(numero === 7){
        return 'SÁBADO'
    }

}

function main(){

    const numero = get_number('Informe o número[INTEIRO]: ')

    if(numero >= 1 && numero <= 7){

        const dia_semana = verificar_dia_da_semana(numero)
    
        print(`O dia da semana correspondente ao número [${numero}] é: [${dia_semana}].`)
    }
    else{
        print('VALOR INVÁLIDO')
    }
}

main()
