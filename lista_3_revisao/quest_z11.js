/**Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades
* donúmero. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
o 326 = 3 centenas, 2 dezenas e 6 unidades
o 12 = 1 dezena e 2 unidades */

import {get_number, print} from './io.js'

//validar se o número é maior que zero e menor que 1000
function validar_numero(numero){

    return numero > 0 && numero < 1000
}

function contar_valores(numero){

    let contagem_centenas = ''
    let contagem_dezenas = ''
    let contagem_unidades = ''

    const centena = parseInt(numero / 100)
    let resto =  numero % 100
    const dezena = parseInt(resto / 10)
    const unidade = resto % 10
    
    //caso centena não seja 0
    if(centena > 0){

        //se centena for no plural e for maior que 1
        if(centena > 1){
            contagem_centenas = `${centena} centenas`

        }
        //o singular do valor
        else{

            contagem_centenas = `${centena} centena`
        }
    }
    if(dezena > 0){

        //se dezena for no plural e for maior que 1
        if(dezena > 1){

            if(centena > 0){           
                if(unidade === 0 ){
                    contagem_dezenas = ` e ${dezena} dezenas`
                }
                else{
                    contagem_dezenas = `, ${dezena} dezenas`
                }
            }else{
                contagem_dezenas = ` ${dezena} dezenas`
    
            }

        }
        //o singular do valor
        else{

            if(centena > 0){           
                if(unidade === 0 ){
                    contagem_dezenas = ` e ${dezena} dezena`
                }
                else{
                    contagem_dezenas = `, ${dezena} dezena`
                }
            }else{
                contagem_dezenas = ` ${dezena} dezena`
    
            }

        }
        
    }
    if(unidade > 0){

        //se unidade for no plural e maior que 1
        if(unidade > 1){
            contagem_unidades = ` e ${unidade} unidades`
    
            if(centena === 0 && dezena === 0){
    
                contagem_unidades = `${unidade} unidades`
            }

        }
        //o singular do valor
        else{
            contagem_unidades = ` e ${unidade} unidade`
    
            if(centena === 0 && dezena === 0){
    
                contagem_unidades = `${unidade} unidade`
            }
        }
    }

    //escrever a contagem das centenas,dezenas e unidades
    print(contagem_centenas + contagem_dezenas + contagem_unidades)
}

function main(){

    //entrada do valor
    const numero = get_number('Informe um número[3 digítos]: ')

    //caso o número seja válido
    if(validar_numero(numero)){

        contar_valores(numero)
    }
    //se não for...
    else(
        print('VALOR INVÁLIDO')
    )
}

main()