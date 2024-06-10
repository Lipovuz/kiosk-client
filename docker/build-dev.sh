#!/bin/bash
# на случай если уже есть - удаляем
echo "Clear containers"
docker container rm lomobil_client_db
docker container rm lomobil_client_phpfpm
docker container rm lomobil_client_nginx
docker container rm lomobil_client_redis

echo "Docker Compose"
cd "$(dirname "$0")"
docker-compose -f docker-compose-dev.yml build --force-rm --no-cache
