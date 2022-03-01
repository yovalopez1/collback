// function funcionPrincipal(callback){
//     setTimeout(function(){
//         console.log('Soy la funcion principal')
//         callback()
//     },4000)
    
// }

// funcionPrincipal(function(){
//     console.log('Soy la segunda funcion')
// })

//collback sumar y luego muestre la suma y la resta

function sumar(numero1,numero2,callback){
    setTimeout(function(){
        let suma = numero1+numero2
        callback(numero1,numero2,suma)
    },5000)
}

sumar(4,5,function(numero1,numero2,suma){
    console.log(`La suma de ${numero1} +  ${numero2}  es: ${suma}`)
    console.log(`La resta de ${numero1} ${numero2} es: ${(numero1-numero2)}`)
})

