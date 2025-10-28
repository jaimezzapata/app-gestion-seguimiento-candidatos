export function generarToken(){
    let token= ""
    for (let index = 1 ; index < 15 ; index++){
     token += Math.random().toString().substring(2)
    }
    return token
}

export function guardarLocalStorage(llave, valor){
    localStorage.setItem(llave, JSON.stringify(valor))
}

export function consultarLocalStorage(llave){
    return JSON.parse(localStorage.getItem(llave))
}