function calcularOperacoes() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Por favor, insira dois números válidos.");
      return;
    }
  
    const soma = num1 + num2;
    const produto = num1 * num2;
    const divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : "Divisão por zero";
    const resto = num2 !== 0 ? num1 % num2 : "Divisão por zero";
  
    const tabela = `
      <table>
        <tr>
          <th>Operação</th>
          <th>Resultado</th>
        </tr>
        <tr>
          <td>Soma</td>
          <td>${soma}</td>
        </tr>
        <tr>
          <td>Produto</td>
          <td>${produto}</td>
        </tr>
        <tr>
          <td>Divisão</td>
          <td>${divisao}</td>
        </tr>
        <tr>
          <td>Resto (%)</td>
          <td>${resto}</td>
        </tr>
      </table>
    `;
  
    document.getElementById("resultado").innerHTML = tabela;
  }
  