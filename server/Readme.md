<div align="center">
   <h3>Brev.ly server</h3>
</div>

<p align="center">
   <a href="https://www.instagram.com/aurigod97/">
      <img alt="Aurino Junior" src="https://img.shields.io/badge/-aurigod97-0390fc?style=flat&logo=Instagram&logoColor=white&color=blue" />
   </a>
    <a href="https://www.linkedin.com/in/aurino-junior-7718a4158/">
      <img alt="Aurino Junior" src="https://img.shields.io/badge/-Aurino%20Junior-0390fc?style=flat&logo=Linkedin&logoColor=white&color=blue" />
   </a>
</p>

📍 **Conteúdo**

- [Contexto](#blue_book-contexto)
- [Tecnologias](#computer-tecnologias)
- [Iniciando o projeto](#video_game-iniciando-o-projeto)
- [Como usar](#beers-como-usar)
- [Funcionalidades e Regras](#page_with_curl-funcionalidades-e-regras)

## :blue_book: Contexto

Brev.ly é uma aplicação para encurtamento de URLs que permite cadastrar, listar e remover links encurtados. Também é possível gerar relatórios de acessos para cada link e realizar o redirecionamento correto do link encurtado para o link original.

## :computer: Tecnologias

- Typescript
- fastify
- drizzle


## :video_game: Iniciando o projeto

1. clone o projeto.
2. Instale as dependencias com `yarn` lembrando que para esse projeto é utilizado `node >= 22.0.0`.
3. Clone o .env.example para .env
4. Lembrando que é utilizado um container docker local para subir o banco de dados, então garanta que o docker esteja instalado corretamente e esteja disponivel para uso.
5. Utilize o comando `yarn start` se tudo ocorrer bem a aplicação estará acessivel em https://localhost:3333/docs

## :beers: Como usar

O projeto tem um swagger configurado com as principais rotas da aplicação até o momento nenhum tipo de autenticação foi implementado, então só acessar https://localhost:3333/docs para utilizar.


## :page_with_curl: Funcionalidades e Regras

- [x]  Deve ser possível criar um link
    - [x]  Não deve ser possível criar um link com URL encurtada mal formatada
    - [x]  Não deve ser possível criar um link com URL encurtada já existente
- [x]  Deve ser possível deletar um link
- [x]  Deve ser possível obter a URL original por meio de uma URL encurtada
- [x]  Deve ser possível listar todas as URL’s cadastradas
- [x]  Deve ser possível incrementar a quantidade de acessos de um link
- [ ]  Deve ser possível exportar os links criados em um CSV
    - [ ]  Deve ser possível acessar o CSV por meio de uma CDN (Amazon S3, Cloudflare R2, etc)
    - [ ]  Deve ser gerado um nome aleatório e único para o arquivo
    - [ ]  Deve ser possível realizar a listagem de forma performática
    - [ ]  O CSV deve ter campos como, URL original, URL encurtada, contagem de acessos e data de criação.
- [ ] Criar testes unitarios das funções.
- [x] Criar dockerfile para fazer build da imagem.
- [x] Atualizar o readme.
