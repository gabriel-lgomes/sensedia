# Sensedia - Frontend

---

## 📦 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/gabriel-lgomes/sensedia.git
cd sensedia
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

---

## ▶️ Rodando o projeto localmente

```bash
npm run dev
# ou
yarn dev
```

A aplicação será acessível em: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Scripts disponíveis

| Script  | Descrição                               |
| ------- | --------------------------------------- |
| `dev`   | Inicia o servidor Next.js em modo dev   |
| `build` | Cria a versão otimizada para produção   |
| `start` | Roda a aplicação já buildada            |
| `lint`  | Executa o ESLint para análise de código |

---

## 🛠️ Requisitos

- Node.js **18+**
- NPM ou Yarn
- Ambiente `.env.local` com a seguinte variável:
  ```env
  NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
  ```

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15** – Framework fullstack React para SSR, rotas e otimizações automáticas.
- **React 19** – Biblioteca para construção de interfaces dinâmicas e reativas.
- **TypeScript** – Tipagem estática para maior segurança e produtividade.
- **TailwindCSS 4** – Utilitário CSS para estilização rápida e responsiva.
- **React Hook Form** – Gerenciamento de formulários com validação e performance.
- **TanStack React Query** – Gerenciamento de cache e requisições de dados.
- **Axios** – Cliente HTTP para chamadas à API.
- **React Toastify** – Notificações e feedbacks visuais ao usuário.
- **React Spinners** – Componentes visuais de carregamento (loading).
- **React Icons** – Conjunto completo de ícones SVG.
- **ESLint** – Análise estática de código com boas práticas de desenvolvimento.

---

## ⚠️ Observação Importante

> É **necessário que a API backend (escrita em Go) esteja rodando via Docker** para que o frontend funcione corretamente.  
> Certifique-se de seguir as instruções no repositório da API, incluindo:
>
> - Subir o container com `make up`
> - Garantir que o endpoint da API esteja acessível em `http://localhost:8080`

---
