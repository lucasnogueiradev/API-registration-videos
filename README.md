# VideoManager API

**Nome do Projeto:** VideoManager

**Descrição:**
VideoManager é uma API RESTful desenvolvida em Node.js com Fastify para o gerenciamento de vídeos. A API permite criar, recuperar e atualizar informações sobre vídeos, utilizando PostgreSQL como banco de dados.

## Funcionalidades

- **POST /videos**: Adiciona um novo vídeo.
- **GET /videos**: Recupera a lista de todos os vídeos.
- **GET /videos/:id**: Recupera um vídeo específico por ID.
- **PUT /videos/:id**: Atualiza as informações de um vídeo específico por ID.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript no servidor.
- **Fastify:** Framework para criar APIs de alta performance.
- **PostgreSQL:** Banco de dados relacional para armazenar vídeos.
- **dotenv:** Gerenciamento de variáveis de ambiente.
- **nodemon:** Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

## Requisitos

- Node.js (v16 ou superior)
- PostgreSQL

## Configuração do Ambiente

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/usuario/VideoManager.git
   cd VideoManager
   ```
