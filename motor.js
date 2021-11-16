function logar(){
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");
    
    console.log(usuario.value+senha);

    if(usuario.value == "AdrianBolomini" && senha.value == "115510"){
        alert("Acesso Permitido!")
    }
    else{ 
        alert("Usuário ou senha inválidos!");
    }
}
