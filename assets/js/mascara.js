let cel = document.getElementById('cel');
cel.addEventListener("keypress", function(){
    cel.value=cel.value.replace(/D/g,"");             
    cel.value=cel.value.replace(/^(\d{2})(\d{5})(\d{4}).*/,"($1) $2-$3");
})

let tel = document.getElementById('tel');
tel.addEventListener("keypress", function(){
    tel.value=tel.value.replace(/D/g,"");             
    tel.value=tel.value.replace(/^(\d{2})(\d{4})(\d{4}).*/,"($1) $2-$3");
})

let cep = document.getElementById('cep');
cep.addEventListener("keypress", function(){
    cep.value=cep.value.replace(/D/g,"");             
    cep.value=cep.value.replace(/^(\d{5})(\d{3}).*/,"$1-$2");
})

let cpf = document.getElementById('cpf');
cpf.addEventListener("keypress", function(){
    cpf.value=cpf.value.replace(/D/g,"");             
    cpf.value=cpf.value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/,"$1.$2.$3-$2");
})