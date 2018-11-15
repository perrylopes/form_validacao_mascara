function validacao(){
    const email = document.getElementById('email').value;
    const emailconfirma = document.getElementById('emailconfirma').value;
    if(email != emailconfirma){
        document.getElementById('error').innerHTML = "Formato Invalido";
        return false;
    }

    const cpf = document.getElementById('cpf').value;
    if(!/(^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$)/.test(cpf)){
        document.getElementById('errorcpf').innerHTML = "Formato Invalido";
        return false;
      }

}






