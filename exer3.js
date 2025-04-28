function calcularSoma() {
    // Pegando os valores dos inputs
    let numeros = [
        Number(document.getElementById("numero1").value),
        Number(document.getElementById("numero2").value),
        Number(document.getElementById("numero3").value),
        Number(document.getElementById("numero4").value),
        Number(document.getElementById("numero5").value),
        Number(document.getElementById("numero6").value),
        Number(document.getElementById("numero7").value),
        Number(document.getElementById("numero8").value),
        Number(document.getElementById("numero9").value),
        Number(document.getElementById("numero10").value)
    ];

    let somaPares = 0;
    let somaPrimos = 0;

    // Função para verificar se um número é primo
    function ehPrimo(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Calculando as somas de pares e primos
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            somaPares += numeros[i];
        }
        if (ehPrimo(numeros[i])) {
            somaPrimos += numeros[i];
        }
    }

    // Exibindo os resultados
    document.getElementById("resultado").innerHTML = `
        Soma dos números pares: ${somaPares}<br>
        Soma dos números primos: ${somaPrimos}
    `;
}