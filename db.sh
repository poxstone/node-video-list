#!/bin/bash
docker run --name mysql -p 3306:3306 -v $HOME/mysqldb/:/var/lib/mysql -e MYSQL_DATABASE=videosdb -e MYSQL_ROOT_PASSWORD=videopass -e MYSQL_USER=vudeouser -e MYSQL_PASSWORD=videopass -d mysql:5.7
