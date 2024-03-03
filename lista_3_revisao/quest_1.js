//Leia um número e mostre na tela se o número é positivo ou negativo.

import { get_number , print } from "./io.js"


function main(){

    //entrada de dados
    const numero = get_number('Informe o valor do número: ')

    //se o núemro for negativo
    if(numero < 0){

        print('O número é negativo.')
    }
    //se o número for 0
    else if( numero === 0){
        
        print('0 é um número neutro')
    }
    //se o número for positivo
    else{

        print('O número é positivo')
    }
}

main()