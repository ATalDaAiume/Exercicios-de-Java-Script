function calcularReajuste() {
    let salario = Number(document.getElementById("salario").value);

    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, insira um valor válido para o salário.");
        return;
    }

    let aumento;
    let novoSalario;

    if (salario <= 280) {
        aumento = 0.20; // 20% de aumento
    } else if (salario > 280 && salario <= 700) {
        aumento = 0.15; // 15% de aumento
    } else if (salario > 700 && salario <= 1500) {
        aumento = 0.10; // 10% de aumento
    } else {
        aumento = 0.05; // 5% de aumento
    }

    novoSalario = salario + (salario * aumento);

    document.getElementById("resultado").innerHTML = `
        <strong>Salário atual:</strong> R$ ${salario.toFixed(2)} <br>
        <strong>Aumento de:</strong> ${aumento * 100}% <br>
        <strong>Novo salário:</strong> R$ ${novoSalario.toFixed(2)}
    `;
}