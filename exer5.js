const form = document.getElementById("formulario");

for (let i = 1; i <= 10; i++) {
  form.innerHTML += `
    <div class="pessoa">
      <h4>Pessoa ${i}</h4>
      Idade: <input type="number" id="idade${i}" required><br>
      Peso: <input type="number" id="peso${i}" step="0.1" required><br>
      Sexo:
      <select id="sexo${i}">
        <option value="M">Masculino</option>
        <option value="F">Feminino</option>
      </select>
    </div>
  `;
}

function calcularEstatisticas() {
  let totalHomens = 0;
  let totalMulheres = 0;
  let somaIdadesHomens = 0;
  let somaPesosMulheres = 0;

  for (let i = 1; i <= 10; i++) {
    const idade = Number(document.getElementById(`idade${i}`).value);
    const peso = Number(document.getElementById(`peso${i}`).value);
    const sexo = document.getElementById(`sexo${i}`).value;

    if (sexo === "M") {
      totalHomens++;
      somaIdadesHomens += idade;
    } else if (sexo === "F") {
      totalMulheres++;
      somaPesosMulheres += peso;
    }
  }

  const mediaIdadeHomens = totalHomens > 0 ? (somaIdadesHomens / totalHomens).toFixed(2) : "N/A";
  const mediaPesoMulheres = totalMulheres > 0 ? (somaPesosMulheres / totalMulheres).toFixed(2) : "N/A";

  const resultado = `
    <h3>Resultado:</h3>
    <p>Total de homens: ${totalHomens}</p>
    <p>Total de mulheres: ${totalMulheres}</p>
    <p>Média das idades dos homens: ${mediaIdadeHomens}</p>
    <p>Média dos pesos das mulheres: ${mediaPesoMulheres}</p>
  `;

  document.getElementById("resultado").innerHTML = resultado;
}