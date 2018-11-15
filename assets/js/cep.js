document.getElementById('cepid').addEventListener('click',function(){
      
    let cep = document.getElementById('cep');
    cep = cep.value.replace('-',"");             
    
    var script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
    document.body.appendChild(script);
})

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        //document.getElementById('ibge').value=(conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}