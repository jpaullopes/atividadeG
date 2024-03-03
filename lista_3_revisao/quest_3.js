//Leia uma letra e verifique se a letra digitada é vogal ou consoante.

import { input, print } from "./io.js"

//verificar se é uma vogal
function verificar_se_eh_vogal(letra){

    return letra === 'A' || letra === 'E' || letra === 'I'||  letra === 'O' || letra === 'U'
}
function main(){

    //entrada de dados
    const letra = input('Digite uma LETRA: ')
    const letra_up = letra.toUpperCase()

    //se for vogal
    if(verificar_se_eh_vogal(letra_up)){

         print(`A letra [${letra}] é uma vogal.`)
    }
    //se for consoante
    else{

        print(`A letra [${letra}] é uma consoante.`)
    }
}

main()