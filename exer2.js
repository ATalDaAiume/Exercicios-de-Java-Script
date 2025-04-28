function gerarCampos() {
    const divInputs = document.getElementById('inputs');
    for (let i = 1; i <= 15; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
            <label for="idade${i}">Idade do espectador ${i}:</label>
            <input type="number" id="idade${i}" required><br>
            <label for="opiniao${i}">Opinião (1 - Regular, 2 - Bom, 3 - Ótimo):</label>
            <input type="number" id="opiniao${i}" min="1" max="3" required><br>
        `;
        divInputs.appendChild(div);
    }
}

function calcularResultados() {
    let somaIdadesOtimo = 0;
    let qtdOtimo = 0;
    let qtdRegular = 0;
    let qtdBom = 0;

    for (let i = 1; i <= 15; i++) {
        const idade = parseInt(document.getElementById(`idade${i}`).value);
        const opiniao = parseInt(document.getElementById(`opiniao${i}`).value);

        if (opiniao === 3) {
            somaIdadesOtimo += idade;
            qtdOtimo++;
        }

        if (opiniao === 1) {
            qtdRegular++;
        }

        if (opiniao === 2) {
            qtdBom++;
        }
    }

    const mediaIdadeOtimo = qtdOtimo > 0 ? (somaIdadesOtimo / qtdOtimo).toFixed(2) : 0;
    const totalEspectadores = 15;
    const porcentagemBom = ((qtdBom / totalEspectadores) * 100).toFixed(2);

    const resultado = `
        Média das idades das pessoas que responderam 'Ótimo': ${mediaIdadeOtimo} anos<br>
        Quantidade de pessoas que responderam 'Regular': ${qtdRegular}<br>
        Porcentagem de pessoas que responderam 'Bom': ${porcentagemBom}%
    `;
    document.getElementById('resultado').innerHTML = resultado;
}

window.onload = gerarCampos;
