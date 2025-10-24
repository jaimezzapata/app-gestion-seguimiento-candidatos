export function generarToken(){
    let token= ""
    for (let index = 1 ; index < 15 ; index++){
     token += Math.random().toString().substring(2)
    }
    return token
}