FROM mariadb:latest

ENV MYSQL_DATABASE=juchelin-guide-database

COPY ./juchelin-guide-database-init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306