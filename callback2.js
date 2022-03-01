function resibirUsuario(nombre,edad,pass,callback){
    setTimeout(function(){
        let usuario = {
            nombre: nombre,
            edad: edad,
            password: pass
        }
        callback(usuario)
    },3000)
}

resibirUsuario('james',29,"123",function(usuario){
    
    if(usuario.edad >= 18){
        console.log(`Bienvenido ${usuario.nombre}`)
    }else{
        console.log(`No eres bienvenido ${usuario.nombre}`)
    }
})