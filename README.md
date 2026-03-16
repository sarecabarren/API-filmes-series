# API FS - Node.js + Express

API REST simples para gereciar filmes e series
 
## Pré-requisitos

- Node.js instalado
 
## Como rodar
 
### Instalar dependências

```bash

npm i 

```
 
### Inciar o servidor

```bash

node index.js

```
 
### Acessar 

Abra o navegador em : `http://localhost:3000`
 
 
## Endpoints
 
### filmes
 
| Método | Endpoint | Descrição | 

|--------|----------|-----------|

| GET | `/filmes` | Lista todos os filmes |

| GET | `/filmess/:id` | Buscar um filme específico |

| POST | `/filmes` | Cria um novo filme |


### Professores
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET  |`/series` | Lista todos os serie |
| POST | `/serie` | Buscar um serie específico |
| POST | `/series` | Cria um serie professor |


## Tecnologias
- Node.Js
- Express

## Notas
- Os dados são armazenados em memória (reiniciar o servidor apaga tudo)
