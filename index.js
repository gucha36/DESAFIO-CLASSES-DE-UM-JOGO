// Definindo a classe Heroi
class Heroi {
    // Construtor para inicializar as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem de ataque
    atacar() {
      let ataque;
  
      // Estrutura de decisão para determinar o ataque baseado no tipo do herói
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = ' magia';
          break;
        case 'guerreiro':
          ataque = ' espada';
          break;
        case 'monge':
          ataque = ' artes marciais';
          break;
        case 'ninja':
          ataque = ' shuriken';
          break;
        default:
          ataque = 'realizou um ataque desconhecido';
          break;
      }
  
      // Exibindo a mensagem com o tipo e ataque do herói
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe Heroi
  const mago = new Heroi('Gandalf', 1000, 'Mago');
  const guerreiro = new Heroi('Aragorn', 87, 'Guerreiro');
  const monge = new Heroi('Aang', 12, 'Monge');
  const ninja = new Heroi('Naruto', 17, 'Ninja');
  
  // Chamando o método atacar para cada herói
  mago.atacar();      // Saída: O Mago atacou usando magia
  guerreiro.atacar(); // Saída: O Guerreiro atacou usando espada
  monge.atacar();     // Saída: O Monge atacou usando artes marciais
  ninja.atacar();     // Saída: O Ninja atacou usando shuriken
  