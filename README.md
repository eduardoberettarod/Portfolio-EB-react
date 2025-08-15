# Portfólio Eduardo Beretta

Este é um portfólio pessoal desenvolvido em [React](https://react.dev/) com [Vite](https://vitejs.dev/), apresentando projetos, serviços, habilidades e formas de contato.

## Funcionalidades

- **Página inicial** com apresentação e links para redes sociais.
- **Sobre**: descrição profissional e soft skills.
- **Projetos**: cards interativos com prévia, descrição e links para GitHub.
- **Serviços**: lista dos serviços oferecidos e tecnologias utilizadas.
- **Contato**: formulário para envio de mensagem, redes sociais e download de currículo.
- **Footer**: informações de copyright e links rápidos.

## Estrutura de Pastas

```
src/
  App.jsx
  App.css
  main.jsx
  assets/
  components/
    Navbar.jsx
    Titulo.jsx
    ...
  sections/
    Home.jsx
    Sobre.jsx
    Projetos.jsx
    Servicos.jsx
    Contato.jsx
    Footer.jsx
public/
  font/
  imgs/
  svg/
```

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
3. Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Scripts disponíveis

- `npm run dev`: inicia o ambiente de desenvolvimento.
- `npm run build`: gera a versão de produção.
- `npm run preview`: pré-visualiza o build.
- `npm run lint`: executa o ESLint.

## Tecnologias utilizadas

- React
- Vite
- CSS customizado
- Bootstrap
- Ícones SVG

## Personalização

- Para alterar projetos, edite [`src/sections/Projetos.jsx`](src/sections/Projetos.jsx).
- Para modificar serviços, edite [`src/sections/Servicos.jsx`](src/sections/Servicos.jsx).
- Para atualizar informações de contato, edite [`src/sections/Contato.jsx`](src/sections/Contato.jsx).

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.