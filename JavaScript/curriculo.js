
    //form 
    function salvar() {
        //var titulo = document.getElementById('tituloIpt').value;
        //var conteudo = document.getElementById('conteudoIpt').value;

        //var dpTitulo = document.getElementById('dp-titulo');
        //var dpConteudo = document.getElementById('dp-conteudo');

        //dpTitulo.innerHTML = titulo;
        //dpConteudo.innerHTML = conteudo;

        var nome = document.getElementById('nomeIpt').value;
        var dpNome = document.getElementById('dp-nome');
        dpNome.innerHTML = nome;
        //
        var tituloPos = document.getElementById('tituloPosIpt').value;
        var dpTituloPos = document.getElementById('dp-titulo-pos-ipt');
        dpTituloPos.innerHTML = tituloPos;
        //
        var email = document.getElementById('emailIpt').value;
        var dpEmail = document.getElementById('dp-email');
        dpEmail.innerHTML = email;
        //
        var telefone = document.getElementById('telefoneIpt').value;
        var dpTelefone = document.getElementById('dp-telefone');
        dpTelefone.innerHTML = telefone;
        //
        var resumo = document.getElementById('resumoIpt').value;
        var dpResumo = document.getElementById('dp-resumo');
        dpResumo.innerHTML = resumo;



        var experiencia = document.getElementById('experiencias-visiveis').innerHTML;
        var dpExperiencia = document.getElementById('area-exp-printada');

        var graduacao = document.getElementById('graduacoes-visiveis').innerHTML;
        var dpGraduacao = document.getElementById('area-grad-printada');

        var nivelEscolarSelect = document.getElementById('nivel-escolar-select');
        var nivelEscolar = nivelEscolarSelect.options[nivelEscolarSelect.selectedIndex].text;
        var dpNivelEscolar = document.getElementById('printar-main-nivel-escolar');

   

        dpExperiencia.innerHTML = experiencia;
        dpNivelEscolar.innerHTML = '<span class="outros-items-coloridos">•</span> ' + nivelEscolar;
        dpGraduacao.innerHTML = graduacao;

    }



    //printar
    
    var conteudoOriginal = document.body.innerHTML;

    var voltarBtn = document.getElementById('voltar-btn');

    function printar() {
        var janPrintar = document.getElementById('printar').innerHTML;
        document.body.innerHTML = janPrintar;
        window.print()
        /*setTimeout(function() {
            location.reload();
        }, 1000) */
        

    }

    //criar caixa de experiencia

    function criarCaixaExp() {

        var numExp = document.getElementById('experiencias-visiveis').querySelectorAll('#experiencia-printada');

        if (numExp.length < 4) {
            var expTituloPos = document.getElementById('expTituloPos').value;
            var expAno = document.getElementById('expAno').value;
            var expEmpregador = document.getElementById('expEmpregador').value;
            var expCidade = document.getElementById('expCidade').value;
            var expOQueFazia = document.getElementById('expOQueFazia').value;

            var caixaExp = document.createElement('div');
            caixaExp.id = 'experiencia-printada';
            caixaExp.classList.add('experiencia-printada');
            caixaExp.innerHTML = `<h2 class="experiencia-printada-titulo">${expTituloPos}</h2> <p class="experiencia-printada-emp-cid-ano">${expEmpregador}, ${expCidade}, ${expAno}</p> <p class="experiencia-printada-o-que-fazia">${expOQueFazia}</p> <button class="caixa-de-experiencia-remover-botao" id="caixa-de-experiencia-remover-botao" onmouseover="
            
            var botaoRemoverExp = document.querySelectorAll('#caixa-de-experiencia-remover-botao');

            for (var i = 0; i < botaoRemoverExp.length; i++){
                botaoRemoverExp[i].onclick = function(e) {

                    e.preventDefault();
                    var li = this.parentNode;
                    li.parentNode.removeChild(li);

                    salvar();
                }


            }"><i class="fas fa-trash-alt"></i>Remover experiência</button>`;
            
            document.getElementById('experiencias-visiveis').appendChild(caixaExp);
        
        } else {
            aviso('Adicione no máximo 4 experiências!');
        } 
        

    }



    

    //Remover experieÊcia (removendo o pai ao clicar no botão dentro da experiência)

   
    var botaoRemoverExp = document.querySelectorAll('#caixa-de-experiencia-remover-botao');

    for (var i = 0; i < botaoRemoverExp.length; i++){
        botaoRemoverExp[i].onclick = function(e) {

            e.preventDefault();
            var li = this.parentNode;
            li.parentNode.removeChild(li);

            salvar();
        }


    }




    //criar formação

    function criarCaixaGraduacao() {

        var numGrad = document.getElementById('graduacoes-visiveis').querySelectorAll('#graduacao-printada');

        if (numGrad.length < 4) {
            var gradCampoEstudo = document.getElementById('gradCampoEstudo').value;
            var gradGraduacao = document.getElementById('gradGraduacao').value;
            var gradEscola = document.getElementById('gradEscola').value;
            var gradCidade = document.getElementById('gradCidade').value;
            var gradAnoInicio = document.getElementById('gradAnoInicio').value;
            var gradAnoTermino = document.getElementById('gradAnoTermino').value;

            var caixaGrad = document.createElement('div');
            caixaGrad.id = 'graduacao-printada';
            caixaGrad.classList.add('graduacao-printada');
            caixaGrad.innerHTML = `<h2 class="graduacao-printada-titulo">${gradGraduacao}</h2>
            <p class="graduacao-printada-campo-graduacao">${gradCampoEstudo}</p>
            <p class="graduacao-printada-esc-cid-ini-ter">${gradEscola}, ${gradCidade}, ${gradAnoInicio}-${gradAnoTermino}</p>
            <button class="caixa-de-graduacao-remover-botao" id="caixa-de-graduacao-remover-botao" onmouseover="
                 
            var botaoRemoverGrad = document.querySelectorAll('#caixa-de-graduacao-remover-botao');

            for (var i = 0; i < botaoRemoverGrad.length; i++){
                botaoRemoverGrad[i].onclick = function(e) {

                    e.preventDefault();
                    var li = this.parentNode;
                    li.parentNode.removeChild(li);

                    salvar();
                }


            }"><i class="fas fa-trash-alt"></i>Remover graduação</button>`;
            
            document.getElementById('graduacoes-visiveis').appendChild(caixaGrad);
        
        } else {
            aviso('Adicione no máximo 4 graduações!');
        } 
        

    }






