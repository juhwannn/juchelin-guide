
# How to run 
### App
```shell
$ nvm use --lts
$ npm install
$ npm run dev
```

`http://localhost:3000`

### Docker (database)
```shell
$ cd PROJECT_ROOT/serverSides/docker/mysql
$ docker build -t juchelin-guide-database .
$ docker run --name juchelin-guide-database -p 3306:3306 -e MYSQL_ROOT_PASSWORD=toor juchelin-guide-database
$ docker exec -it ${DOCKER_CONTAINER_NAME} /bin/sh
```