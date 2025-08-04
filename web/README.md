<div align="center">
   <h3>Brev.ly web</h3>
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
- [Funcionalidades e Regras](#page_with_curl-funcionalidades-e-regras)

## :blue_book: Contexto

Brev.ly é uma aplicação para encurtamento de URLs que permite cadastrar, listar e remover links encurtados. Também é possível gerar relatórios de acessos para cada link e realizar o redirecionamento correto do link encurtado para o link original.

## :computer: Tecnologias

- Typescript
- React
- vite
- Tailwind
- Zustand


## :video_game: Iniciando o projeto

1. clone o projeto.
2. Instale as dependencias com `yarn` lembrando que para esse projeto é utilizado `node >= 22.14.0`.
3. Clone o .env.example para .env
4. Utilize o comando `yarn start` se tudo ocorrer bem a aplicação estará acessivel em `https://localhost:5173`


## :page_with_curl: Funcionalidades e Regras

- [x]  Deve ser possível criar um link
    - [x]  Não deve ser possível criar um link com encurtamento mal formatado
    - [x]  Não deve ser possível criar um link com encurtamento já existente
- [x]  Deve ser possível deletar um link
- [x]  Deve ser possível obter a URL original por meio do encurtamento
- [x]  Deve ser possível listar todas as URL’s cadastradas
- [x]  Deve ser possível incrementar a quantidade de acessos de um link
- [x]  Deve ser possível baixar um CSV com o relatório dos links criados

Além disso, também temos algumas regras importantes específicas para o front-end:

- [x]  É obrigatória a criação de uma aplicação React no formato SPA utilizando o Vite como `bundler`;
- [x]  Siga o mais fielmente possível o layout do Figma;
- [x]  Trabalhe com elementos que tragam uma boa experiência ao usuário (`empty state`, ícones de carregamento, bloqueio de ações a depender do estado da aplicação);
- [x]  Foco na responsividade: essa aplicação deve ter um bom uso tanto em desktops quanto em celulares.
