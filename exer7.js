function converterData() {
    let data = document.getElementById("data").value;
    
    let partes = data.split('/');
    
    if (partes.length !== 3) {
        alert("Por favor, insira a data no formato correto (dd/mm/aaaa).");
        return;
    }
    
    let dia = partes[0];
    let mes = partes[1];
    let ano = partes[2];

    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    
    if (mes < 1 || mes > 12) {
        alert("Mês inválido! Por favor, insira um mês entre 01 e 12.");
        return;
    }
    
    let dataExtenso = `${dia} de ${meses[mes - 1]} de ${ano}`;
    
    document.getElementById("resultado").innerHTML = `Data por extenso: ${dataExtenso}`;
}