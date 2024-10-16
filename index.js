function calcularRanqueadas(vitorias, derrotas) {
    const taxaVitoria = (vitorias / (vitorias + derrotas)) * 100;
  
    let nivel;

    if (taxaVitoria < 20) {
      nivel = "Ferro";
    } else if (taxaVitoria >= 20 && taxaVitoria < 40) {
      nivel = "Bronze";
    } else if (taxaVitoria >= 40 && taxaVitoria < 60) {
      nivel = "Prata";
    } else if (taxaVitoria >= 60 && taxaVitoria < 80) {
      nivel = "Ouro";
    } else if (taxaVitoria >= 80 && taxaVitoria < 90) {
      nivel = "Diamante";
    } else if (taxaVitoria >= 90 && taxaVitoria < 95) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    return { taxaVitoria, nivel };
  }
  
  let vitorias = 75;
  let derrotas = 30;
  
  let resultado = calcularRanqueadas(vitorias, derrotas);
  
  console.log(`O Herói tem uma taxa de vitória de ${resultado.taxaVitoria.toFixed(2)}% e está no nível de ${resultado.nivel}.`);