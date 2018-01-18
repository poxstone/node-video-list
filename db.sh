#!/bin/bash
docker run --name mysql -p 3306:3306 -v /home/lozadamiguel0512/mysqldb/:/etc/mysql/conf.d -e MYSQL_DATABASE=videosdb -e MYSQL_ROOT_PASSWORD=videopass -e MYSQL_USER=vudeouser -e MYSQL_PASSWORD=videopass -d mysql:5.7
