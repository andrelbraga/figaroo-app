FROM node:14-alpine

# diretorio alvo
WORKDIR /usr/src/app

# instalacao de dependencias auxiliares
RUN npm i -g ts-node@10.0.0

# copia diretorio alvo
COPY . .

# executo instalacao do npm
RUN npm i

# expoe porta 3000
EXPOSE 3000

# inicializa a API
CMD ["npm", "run", "start:dev"]
