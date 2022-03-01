function iniciar(){
    console.log('Estoy iniciando')
}

function procesar(){

    setTimeout(function(){
        console.log('Estoy procesando')
    },3000)
    
}

function finalizar(){
    console.log('Estoy finalizando')
}

iniciar()
procesar()
finalizar()