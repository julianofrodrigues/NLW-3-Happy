"# NLW-3-Happy" 

<h1>Instalando Projeto</h1>
<p>Primeiro entre nas pastas e instale suas dependencias...</p>

```bash
# Entre no repositório
$ cd NLW-3-Happy

# Instale as dependências dentro do diretório server
$ cd backend
$ yarn install

# Instale as dependências dentro do diretório web
$ cd web
$ yarn install

# Instale as dependências dentro do diretório mobile
$ cd mobile
$ yarn install

### Importante modificar o arquivo
Todos os arquivos onde estiver escrito seu IP coloque o IP da sua maquina
```

### Backend
```bash
# Executar para criar as tabelas do banco de dados
$ yarn typeorm migrate:run

# Rodar o backend
$ yarn dev
```
### Frontend
```bash
# Rodar aplicação web (cd web)
$ yarn start

# Rodar aplicação mobile (cd mobile)
$ yarn start
```
