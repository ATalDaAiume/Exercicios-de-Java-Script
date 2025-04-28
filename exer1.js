let pessoas = [
    { altura: 1.75, sexo: 'M' },
    { altura: 1.62, sexo: 'F' },
    { altura: 1.80, sexo: 'M' },
    { altura: 1.55, sexo: 'F' },
    { altura: 1.68, sexo: 'F' },
    { altura: 1.90, sexo: 'M' },
    { altura: 1.73, sexo: 'M' },
    { altura: 1.60, sexo: 'F' },
    { altura: 1.85, sexo: 'M' },
    { altura: 1.57, sexo: 'F' },
    { altura: 1.77, sexo: 'M' },
    { altura: 1.65, sexo: 'F' },
    { altura: 1.82, sexo: 'M' },
    { altura: 1.70, sexo: 'F' },
    { altura: 1.78, sexo: 'M' }
];

function calcularEstatisticas() {
    let maiorAltura = pessoas[0].altura;
    let menorAltura = pessoas[0].altura;
    let somaAlturasMulheres = 0;
    let qtdMulheres = 0;
    let qtdHomens = 0;

    for (let i = 1; i < pessoas.length; i++) {
        if (pessoas[i].altura > maiorAltura) {
            maiorAltura = pessoas[i].altura;
        }
        if (pessoas[i].altura < menorAltura) {
            menorAltura = pessoas[i].altura;
        }
    }

    pessoas.forEach(pessoa => {
        if (pessoa.sexo === 'F') {
            somaAlturasMulheres += pessoa.altura;
            qtdMulheres++;
        } else if (pessoa.sexo === 'M') {
            qtdHomens++;
        }
    });

    let mediaAlturaMulheres = qtdMulheres > 0 ? (somaAlturasMulheres / qtdMulheres).toFixed(2) : 0;

    let resultado = `
        Maior altura do grupo: ${maiorAltura}m<br>
        Menor altura do grupo: ${menorAltura}m<br>
        Média de altura das mulheres: ${mediaAlturaMulheres}m<br>
        Número de homens: ${qtdHomens}
    `;

    document.getElementById("resultado").innerHTML = resultado;
}
