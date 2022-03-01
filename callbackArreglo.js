function almacenarNumeros(numero1,numero2,numero3,numero4,numero5,callback){
    let numeros = Array(numero1,numero2,numero3,numero4,numero5)
    callback(numeros)
}

almacenarNumeros(5,3,5,8,4,function(numeros){
    let contador=0
    numeros.forEach(function(numero) {
        contador = contador+numero
    })
    console.log(`La sumatoria es: ${contador}`)
})