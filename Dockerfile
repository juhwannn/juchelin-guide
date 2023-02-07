FROM node:16.13.2-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY ./ ./

CMD ["npm", "run", "dev"]

EXPOSE 3000
