# React Films

<img src="public/captura1.png" alt="Captura de tela página principal" width="50%">
<img src="public/captura2.png" alt="Captura de tela detalhes da série" width="50%">

React Films é um projeto frontend desenvolvido em React + TypeScript que se integra ao backend [Java Films](https://github.com/topics/movies?l=java) para exibir informações sobre séries de TV de forma interativa e intuitiva.

## Funcionalidades

### Exibição de Títulos Principais:
- A página inicial apresenta os títulos das séries mais populares, atraindo a atenção do usuário.
### Lançamentos:
- Uma seção dedicada aos últimos lançamentos de séries, mantendo os usuários atualizados com as novidades.
### Top 5:
- Uma lista com as 5 séries mais bem avaliadas, auxiliando na descoberta de novos conteúdos.
### Navegação por Categoria:
- Possibilidade de filtrar as séries por categoria, facilitando a busca por gêneros específicos.
### Busca por Título:
- Uma barra de busca permite que os usuários encontrem rapidamente a série desejada.
### Detalhes da Série:
- Ao clicar em uma série, o usuário é direcionado para uma página com detalhes completos, como sinopse, elenco, temporadas e episódios.
### Temporadas e Episódios:
- Cada série exibe suas temporadas e episódios, com informações sobre data de lançamento, sinopse e classificação.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para criar interfaces de usuário declarativas e eficientes.
- TypeScript: Linguagem superconjunto do JavaScript que adiciona tipagem estática, aprimorando a confiabilidade e a legibilidade do código.
- Vite: Ferramenta de desenvolvimento moderna que oferece inicialização rápida, recarregamento quente e outras funcionalidades para otimizar o fluxo de trabalho.
- React Router DOM: Biblioteca para gerenciar o roteamento de páginas na aplicação React, permitindo navegação fluida sem recarregamento.
- Tailwind CSS: Framework CSS que fornece um sistema de classes utilitárias para estilizar rapidamente componentes e interfaces.
- API Java Films: Interface de programação do backend Java Films, utilizada para recuperar informações sobre as séries.

## Instruções de Uso

1. Clone o Repositório:
```bash
git clone https://github.com/LeonardoSardagna/reactFilms.git
```
2. Acesse o diretório do projeto:
```bash
cd reactFilms
```
3. Instale as dependências:
```bash
npm install
```
5. Execute a aplicação no navegador:
```bash
npm run dev
```
5. Acesse a aplicação no navegador:
-Abra um navegador web e acesse a URL `http://localhost:5173`.

## Observações
- Este projeto é uma interface frontend que consome as APIs fornecidas pelo backend Java Films.
- Certifique-se de que o backend Java Films esteja rodando e acessível para que o frontend possa obter os dados das séries.
- A aplicação utiliza React, TypeScript e outras bibliotecas modernas para proporcionar uma experiência de usuário rica e responsiva.
