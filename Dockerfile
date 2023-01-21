FROM node:16.13.2-alpine

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm ci

COPY . /usr/src/app

CMD ["npm", "run", "dev"]

EXPOSE 3000
