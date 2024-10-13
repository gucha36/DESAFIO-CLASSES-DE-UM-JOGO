# 🦸‍♂️ Hero Adventure Game

Este projeto foi desenvolvido como parte de um desafio de programação, com o objetivo de criar uma classe genérica que representa um herói de uma aventura. Cada herói tem propriedades como nome, idade e tipo (mago, guerreiro, monge ou ninja) e possui um método `atacar` que exibe uma mensagem de ataque personalizada de acordo com o tipo de herói.

## 🚀 Funcionalidades

- Criação de heróis com as propriedades:
  - **nome**: Nome do herói
  - **idade**: Idade do herói
  - **tipo**: Tipo do herói (ex: mago, guerreiro, monge, ninja)
  
- O método `atacar` exibe uma mensagem personalizada para cada tipo de herói:
  - **Mago**: "O mago atacou usando magia"
  - **Guerreiro**: "O guerreiro atacou usando espada"
  - **Monge**: "O monge atacou usando artes marciais"
  - **Ninja**: "O ninja atacou usando shuriken"

## 🛠️ Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação utilizada para implementar a classe e as funcionalidades.

## 💻 Como Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/heroi-adventure-game.git
    ```

2. Abra o arquivo `index.html` no seu navegador ou execute o script JavaScript diretamente em um ambiente Node.js.

## 📋 Exemplo de Uso

```javascript
// Criando heróis
const mago = new Heroi('Gandalf', 1000, 'Mago');
const guerreiro = new Heroi('Aragorn', 87, 'Guerreiro');

// Exibindo os ataques
mago.atacar();      // Saída: O Mago atacou usando magia
guerreiro.atacar(); // Saída: O Guerreiro atacou usando espada
