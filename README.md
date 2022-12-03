![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

# Calculator React APP

![calculator-demo](https://media1.giphy.com/media/of6i2babqs6fTt7w7R/giphy.gif?cid=790b761167d976221cd83e3b3a02eb5206d65ba451ee6120&rid=giphy.gif&ct=g)

- [Descrição](#descrição-do-projeto)
- [Status do Projeto](#status-do-projeto)
- [Funcionalidades](#⚙️-funcionalidades)
  - [Primeira fase](#primeira-fase-do-projeto)
  - [Segunda fase](#segunda-fase-do-projeto)
- [Como executar o projeto](#🚀-como-executar-o-projeto)
- [Tecnologias](#🛠-tecnologias)

<br>

## Descrição do Projeto

Primeiro passos com React - Calculadora com operações básicas de matemática, três estilos de temas disponíveis e com design responsivo

<br>

## Status do Projeto
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

<br>

## ⚙️ Funcionalidades

### Primeira fase do projeto

- [x] Criar component Botão
- [x] Criar component Input
- [x] Estilização básica página inicial
- [x] Criar estilização inicial Input
- [x] Criar estilização inicial Botão
- [x] Dividir layout em linha e coluna
- [x] Desativar input

- [x] Adicionar números digitados no input
  - [x] Criar função que vai enviar o value do botão para o input
  - [x] Setar função em todos os botões
  - [x] Validação para não ficar com o '0' sempre visível

- [x] Função limpar tela

- [x] Adicionar operações matemáticas
 - [x] Função somar (apenas um número)
 - [x] Adicionar funcionalidade ao botão "="
 - [x] Função subtrair (apenas um número)
 - [x] Função multiplicar (apenas um número)
 - [x] Função dividir (apenas um número)
 - [x] Fazer operações em sequência
 
 - [x] Função deletar último dígito

### Segunda fase do projeto

- [x] Layout
  - [x] Alterações nos botões
  - [x] Alteração na fonte
  - [x] Ajuste iniciais no layout para tema 1
  - [x] Alterações nos botões que terão cores diferentes do tema
  - [x] Alterações no layout para ficar mais próximo do design proposto
  - [x] Ajustes no layout para desktop

- [x] Validações
  - [x] Limitar inclusão do "."
  - [x] Corrigir inclusão do 0
  - [ ] Corrigir operações com 0 (Exemplo "3x0")

- [x] Funcionalidades extras
  - [x] Adicionar header
  - [x] Separar cores dos temas
  - [x] Adicionar temas
  - [x] Salvar escolha do tema no localstorage
  - [x] Carregar tema escolhido ao inicar a aplicação
  - [x] Carregar o toggle switch na posição certa ao iniciar

<br>

## 🚀 Como executar o projeto

```bash
# Clone este repositório
$ https://github.com/paulohmoreira/calculator-react-app.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd calculator-react-app

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# Ou se você usa o yarn
$ yarn run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```
<br>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **[Reactjs](https://pt-br.reactjs.org/)** 
- **[styled-components](https://styled-components.com/)**
- **[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** 
- **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)** 

<br>

## Licença

[MIT licensed](./LICENSE)
