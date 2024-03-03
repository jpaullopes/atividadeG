import { question } from "readline-sync"
 
export function get_number(numero){

    return Number(question(numero))
}

export function print(texto){

    console.log(texto)
} 

export function get_number_int(numero){
    
    return Number.parseInt(question(numero))
}

export function input(texto){

    return question(texto)
}