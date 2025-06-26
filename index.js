// Manipular o formulário de inscrição
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = this.querySelector('input[type="text"]');
    const emailInput = this.querySelector('input[type="email"]');
    
    // Adiciona novo participante
    participants.unshift({
        name: nameInput.value,
        email: emailInput.value,
        signupDate: "hoje",
        checkinDate: "",
        needsConfirmation: true
    });
    
    // Limpa o formulário
    this.reset();
    
    // Atualiza a tabela
    document.querySelector('#participants-table tbody').innerHTML = '';
    renderTable();
    
    alert('Inscrição realizada com sucesso!');
});