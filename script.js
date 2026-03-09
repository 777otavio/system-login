function cadastro(){
    document.getElementById("cadastro").classList.remove("oculto");
    document.getElementById("login").style.display = "none";

}

function criacao(){    
    const senha = document.getElementById("senha-cadastro").value;
    const cofirmar = document.getElementById("cofirmar-senha").value;

    if(senha === cofirmar){
        document.getElementById("cadastro").classList.add("oculto");
        document.getElementById("login").style.display = "flex";
    } else{
        document.querySelector("#cofirmacao-errada").classList.remove("erro");
    }
}

function entrar(){ 
    const usuarioCadastro = document.getElementById("usuario-cadastro").value;
    const senhaCadastro = document.getElementById("senha-cadastro").value;
    const usuarioLogin = document.getElementById("usuario-login").value;
    const senhaLogin = document.getElementById("senha-login").value;

    if(usuarioLogin === "" || senhaLogin === ""){
        document.querySelector("#campos").classList.remove("erro");
    }else if(usuarioLogin === usuarioCadastro && senhaCadastro === senhaLogin){
        alert('Parabens, seu Login foi realizado com sucesso!')
    } else{
        document.querySelector("#erro").classList.remove("erro");
    }
}