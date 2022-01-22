function aviso(conteudo) {
    avisoTotalArea = document.getElementById('aviso-modal-total-area');
    avisoModal = document.getElementById('aviso-modal');

    var avisoConteudo = document.getElementById('aviso-modal-p-conteudo');
    avisoConteudo.innerHTML = `${conteudo}`;
    avisoTotalArea.style.visibility = 'visible';
    avisoTotalArea.style.opacity = '1';

    avisoModal.style.marginTop = '0';
}

function fecharAviso() {
    avisoTotalArea = document.getElementById('aviso-modal-total-area');
    avisoTotalArea.style.visibility = 'hidden';
    avisoTotalArea.style.opacity = '0';

    avisoModal.style.marginTop = '-30px';
}