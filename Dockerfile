FROM node:16.9.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . /app

CMD ["npm", "run", "dev"]

EXPOSE 3000
