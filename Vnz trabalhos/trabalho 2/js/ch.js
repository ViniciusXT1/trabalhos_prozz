function validarLogin() {
    const emailInput = document.getElementById('campo_email');
    const senhaInput = document.getElementById('campo_senha');

    if (campoemail.value!== "vaalves2022@gmail.com"&& campoSenha.value!=="1234"){
        alert("Email ou senha incorretos!")

    }

    else{
        botao_entrar=window.open("~/../index.html");
    }
}