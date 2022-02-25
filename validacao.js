function enviar() {
		var nome = document.getElementById('nome').value;
		if (nome == "") {
			alert("Informe seu nome");
			return;
		}

		var email = document.getElementById('email');
		if(campovazio(email)){
			alert("Campo de email vazio.");
			return;
		}
		if (email.value.indexOf('@') ==-1 || email.value.indexOf('.')==-1) {
			alert("Digite um email válido.");
			return;
		}
		var endereco = document.getElementById('endereco')
		if (campovazio(endereco)) {
			alert("Campo de endereço vazio");
			return;
		}
		var cpf = document.getElementById('cpf').value;
		if (cpf == "") {
		alert("Preencha o campo CPF");
		return;
		}else if (isNaN(cpf) != false) {
			alert("Preencha o campo de CPF apenas com números.");
			return;
		}
		var sexo = getRadioValue("sexo");
		if (sexo.length == 0) {
			alert("Informe o seu sexo.");
			return;
		}
		var ufopt = document.getElementById('uf');
		var uf = ufopt.options[ufopt.selectedIndex].value;
		if (campovazio(ufopt)) {
			alert("Escolha seu UF");
			return;
		}			
		var hb = getCheckboxValue("hb");
		if (hb.length == 0 ){
			alert("Selecione seus hobbies");
			return;
		}

		addNome();
		addEmail();
		addEndereco();
		addCpf();
		addSexo();
		addUf();
		addHobbies();
		alert("Formulário enviado.");
		document.getElementById('meuformulario').reset();

    }
    	/* jeito burro de validar checkbox
    	var hobbEsporte = document.getElementById('esporte');
		var hobbLeitura = document.getElementById('leitura');
		var hobbAssistir = document.getElementById('seriefilmes');
		var hobbBalada = document.getElementById('balada');
		var hobbShopping = document.getElementById('shopping');
		var hobbCinema = document.getElementById('cinema');
			if (hobbEsporte.checked==false && hobbLeitura.checked==false && hobbAssistir.checked==false && hobbBalada.checked==false && hobbCinema.checked==false && hobbShopping.checked==false) {
		alert("Escolha ao menos um hobbie");
		return;
		}
		*/


	
	function getCheckboxValue(nomeCheckbox) {
			var checkbox = document.getElementsByName(nomeCheckbox);
			var resposta = new Array();
			for (var i=0 ; i < checkbox.length; i++) {
				if (checkbox[i].checked) {
				resposta.push(checkbox[i].value);
				}
			}
			return resposta;
		}
		function getRadioValue(nomeRadio){
        var radios = document.getElementsByName(nomeRadio);
        var resposta = "";
        for(var i = 0; i < radios.length; i++){
           if( radios[i].checked){
              resposta = radios[i].value;
              break;
           }
        }
        return resposta;
    }

	function campovazio(conteudo){
		if (conteudo.value == "" || conteudo.value =="undefined") {
			return true;
		}else {
			return false;
		}

	}


	function addNome() {
		var tag = document.createElement("div");
		tag.innerHTML = document.getElementById("nome").value;
		document.getElementById("divnome").appendChild(tag);
	}
	function addEmail(){
		var tag = document.createElement("div");
		tag.innerHTML = document.getElementById("email").value;
		document.getElementById("divemail").appendChild(tag);
	}
	function addEndereco() {
		var tag = document.createElement("div");
		tag.innerHTML = document.getElementById("endereco").value;
		document.getElementById("divendereco").appendChild(tag);
	}
	function addCpf() {
		var tag = document.createElement("div");
		tag.innerHTML = document.getElementById("cpf").value;
		document.getElementById("divcpf").appendChild(tag);
	}
	function addSexo() {
		var tag = document.createElement("div");
		tag.innerHTML = getRadioValue("sexo");
		document.getElementById("divsexo").appendChild(tag);
	}
	function addUf() {
		var tag = document.createElement("div");
		tag.innerHTML = document.getElementById("uf").value;
		document.getElementById("divuf").appendChild(tag);
	}
	function addHobbies() {
		var tag = document.createElement("div");
		tag.innerHTML = getCheckboxValue("hb");
		document.getElementById("divhobbies").appendChild(tag);
	}
	