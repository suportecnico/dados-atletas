let atletas = [ // Notas fornecidas pelos jurados
 {
   nome: "Cesar Abascal",
   idade: 30,
   peso: 80,
   altura: 1.70,
   notas: [10, 9.34, 8.42, 10, 7.88]
   
 },
 {
   nome: "Fernando Puntel",
   idade: 14,
   peso: 50,
   altura: 1.70,
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   idade: 13,
   peso: 47,
   altura: 1.65,
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   idade: 11,
   peso: 30,
   altura: 1.30,
   notas: [10, 10, 10, 9, 9.5]
 }
];

class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
    //
    this.calculaCategoria = this.calculaCategoria();
    this.calculaIMC = this.calculaIMC();
    this.calculaMediaValida = this.calculaMediaValida();
    this.obtemCategoria = this.obtemCategoria();
    this.obtemIMC = this.obtemIMC();
    this.obtemMediaValida = this.obtemMediaValida();
    // Resultados
    this.resultado = this.obtemSaidaGeral();
  }
  calculaCategoria() {// Ok 
    if(this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if(this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if(this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if(this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }
  calculaIMC() { // OK
    let imcAtletas = this.peso / (this.altura * this.altura);
    return imcAtletas.toFixed(2);;
  }
  calculaMediaValida() { // OK
      let notasOrdenadas = this.notas.slice().sort((a, b) => a - b); 
      /* Criando uma nova matriz e ordenando os elementos da chave-valor notas, da matriz de objetos. */
      let soma = notasOrdenadas.slice(1, 4).reduce(function(acc, atual){
        /* Iterando as notas que estão nos índice [1], [2], [3]. */
        return acc + atual;
        // Retornando a soma da iteração. 
    }, 0);
    let media = soma / notasOrdenadas.slice(1, 4).length;
    return media.toFixed(2);
  }
  obtemNomeAtleta() { // OK
    return this.nome;
  }
  obtemIdadeAtleta() { // OK
    return this.idade;
  }
  obtemPesoAtleta() { // OK
    return this.peso;
  }
  obtemNotasAtleta() { // OK
    return this.notas;
  }
  obtemCategoria() { // OK
    return this.calculaCategoria;
  }
  obtemIMC() { // OK
    return this.calculaIMC;
  }
  obtemMediaValida() { // OK
    return this.calculaMediaValida;
  }

  obtemSaidaGeral() {
   return `
   <p><strong>&#x1F464;Nome:</strong> ${this.nome}</p>
   <p><strong>&#x1F382;Idade:</strong> ${this.idade}</p>
   <p><strong>&#x2696;Peso:</strong> ${this.peso}</p>
   <p><strong>&#x1F4CF;Altura:</strong> ${this.altura}</p>
   <p><strong>&#x2728;Notas:</strong> ${this.notas.slice().sort((a, b) => a - b)}</p>
   <p><strong>&#x1F9D1;&#x200D;&#x1F4BC;Categoria:</strong> ${this.obtemCategoria}</p>
   <p><strong>&#x1F4CA;IMC:</strong> ${this.obtemIMC}</p>
   <p><strong>&#x2705;Média Válida:</strong> ${this.obtemMediaValida}</p>
   `;
  }
  
}

let atleta1 = new Atleta (atletas[0].nome, atletas[0].idade, atletas[0].peso, atletas[0].altura, atletas[0].notas);
let atleta2 = new Atleta (atletas[1].nome, atletas[1].idade, atletas[1].peso, atletas[1].altura, atletas[1].notas);
let atleta3 = new Atleta (atletas[2].nome, atletas[2].idade, atletas[2].peso, atletas[2].altura, atletas[2].notas);
let atleta4 = new Atleta (atletas[3].nome, atletas[3].idade, atletas[3].peso, atletas[3].altura, atletas[3].notas);

function exibirResultado1() {
  document.getElementById("resultado").innerHTML = atleta1.resultado;
  return document.getElementById("resultado").innerHTML;
} 
function exibirResultado2() {
  document.getElementById("resultado").innerHTML = atleta2.resultado;
  return document.getElementById("resultado").innerHTML;
} 
function exibirResultado3() {
  document.getElementById("resultado").innerHTML = atleta3.resultado;
  return document.getElementById("resultado").innerHTML;
} 
function exibirResultado4() {
  document.getElementById("resultado").innerHTML = atleta4.resultado;
  return document.getElementById("resultado").innerHTML;
} 






// function exibirResultado1() {
//   return atleta1.map(function(atleta) {
//     return atleta;
//   })
// }

// console.log(exibireta()Resultado1());