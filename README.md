# Pokédex Vue.js

Projeto acadêmico desenvolvido com **Vue.js**, com o objetivo de aplicar os conceitos estudados durante a disciplina por meio da criação de uma aplicação front-end funcional, organizada, interativa e responsiva.

A aplicação funciona como uma Pokédex digital, permitindo visualizar, pesquisar e filtrar diferentes Pokémon. Os dados são obtidos por meio da **PokéAPI**.

## Sobre o projeto

O projeto apresenta uma lista de Pokémon com informações como:

* Número da Pokédex;
* Nome;
* Imagem;
* Tipos;
* Geração;
* Altura;
* Peso;
* Habilidades;
* Estatísticas base;
* Descrição.

Ao selecionar um Pokémon, o usuário pode visualizar seus detalhes. No desktop, as informações são apresentadas em um painel lateral. Em telas menores, o layout se adapta para manter a navegação organizada.

## Funcionalidades

* Listagem dinâmica de Pokémon;
* Consumo da PokéAPI;
* Busca por nome ou número;
* Filtro por tipo;
* Filtro por geração;
* Paginação dos resultados;
* Visualização detalhada de cada Pokémon;
* Navegação entre páginas utilizando Vue Router;
* Interface responsiva para desktop, tablet e smartphone;
* Mensagens de carregamento e tratamento de erros.

## Tecnologias utilizadas

* Vue.js 3;
* Vue Router;
* Vite;
* JavaScript;
* HTML;
* CSS;
* Tailwind CSS;
* PokéAPI;
* Git e GitHub.

## Conceitos de Vue.js aplicados

Durante o desenvolvimento foram utilizados diferentes recursos do Vue.js, como:

* Componentes reutilizáveis;
* Composition API;
* `<script setup>`;
* Props;
* Eventos personalizados;
* Propriedades computadas;
* Observadores com `watch`;
* Renderização condicional com `v-if`, `v-else-if` e `v-else`;
* Renderização de listas com `v-for`;
* Ligação de dados com `v-model`;
* Eventos com `@click`;
* Navegação com Vue Router;
* Consumo assíncrono de API.

## Estrutura do projeto

```text
PokeAPI/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AreaCards.vue
│   │   ├── Details.vue
│   │   ├── Generation.vue
│   │   ├── ModalBase.vue
│   │   ├── NavBar.vue
│   │   ├── PokeCard.vue
│   │   ├── PokeTypesDesktop.vue
│   │   ├── PokeTypesMobile.vue
│   │   ├── SearchBar.vue
│   │   └── TypeCard.vue
│   ├── router/
│   │   └── index.js
│   ├── services/
│   │   └── http.js
│   ├── views/
│   │   ├── HomeView.vue
│   │   └── PokeView.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Como executar o projeto

### Pré-requisitos

Antes de começar, é necessário ter instalado:

* Node.js;
* npm;
* Git.

### 1. Clone o repositório

```bash
git clone https://github.com/Matheus-Ayres/PokeAPI.git
```

### 2. Entre na pasta do projeto

```bash
cd PokeAPI
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

### 5. Acesse no navegador

Após executar o comando, o terminal mostrará o endereço local da aplicação, normalmente:

```text
http://localhost:5173
```

## Gerar versão de produção

Para gerar uma versão otimizada do projeto:

```bash
npm run build
```

Para visualizar localmente a versão de produção:

```bash
npm run preview
```

## API utilizada

O projeto utiliza a PokéAPI, uma API pública que disponibiliza informações sobre Pokémon, tipos, habilidades, estatísticas e outros dados relacionados.

* PokéAPI: https://pokeapi.co

## Repositório

O código-fonte completo está disponível no GitHub:

* [Repositório do projeto](https://github.com/Matheus-Ayres/PokeAPI)

## Demonstração em vídeo

O vídeo de demonstração do projeto pode ser acessado pelo link abaixo:

* **Vídeo:** adicionar link do vídeo

No vídeo, todos os integrantes do grupo deverão participar da apresentação e demonstrar as principais funcionalidades da aplicação.

## Integrantes

* Eduardo Dal Pozzo
* Matheus Ayres

## Requisitos atendidos

* [x] Desenvolvimento com Vue.js;
* [x] Projeto criado com Vite;
* [x] Estrutura baseada em componentes;
* [x] Componentes reutilizáveis;
* [x] Utilização de diretivas Vue;
* [x] Navegação com Vue Router;
* [x] Consumo de API;
* [x] Busca de Pokémon;
* [x] Filtros por tipo e geração;
* [x] Lista dinâmica;
* [x] Paginação;
* [x] Interface responsiva;
* [x] Interatividade com o usuário;
* [x] Organização em componentes e pastas;
* [x] Código-fonte disponível no GitHub.

## Objetivo acadêmico

Este projeto foi desenvolvido como trabalho acadêmico com o objetivo de colocar em prática os conhecimentos adquiridos durante a disciplina, especialmente a construção de interfaces utilizando Vue.js, componentização, responsividade, interatividade, organização de código e consumo de APIs.

## Observações

Este projeto possui finalidade acadêmica e educacional. Pokémon e suas respectivas imagens, nomes e informações pertencem aos seus respectivos proprietários.
