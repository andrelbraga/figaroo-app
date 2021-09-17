#!/bin/bash
set -e

PW="dbmaster";
DB="postgres";

echo "Exclude old migrations";
docker-compose run --rm app-dev rm -rf src/migrations/** 
sleep 3;

echo "Generate migration";
docker-compose run --rm app-dev npm run typeorm:migration:generate 
sleep 3;

echo "Exclude tables";
echo 'DROP SCHEMA public CASCADE;' | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres 
sleep 3;

echo "Create schemas";
echo 'CREATE SCHEMA public;' | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres 
sleep 3;

echo "Create extensions";
echo 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";' | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres 
sleep 3;

echo "Grant permissions";
echo 'GRANT ALL ON SCHEMA public TO postgres;' | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
echo 'GRANT ALL ON SCHEMA public TO public;' | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
sleep 3;

echo "Run migration";
docker-compose run --rm app-dev npm run typeorm:migration:run 
sleep 3;

echo "Run insert skill";
echo "INSERT INTO public.skill(name, updated_at) VALUES ('Cabelo', '2021-09-24');" | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
echo "INSERT INTO public.skill(name, updated_at) VALUES ('Barba', '2021-09-24');" | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
echo "INSERT INTO public.skill(name, updated_at) VALUES ('Sombrancelha', '2021-09-24');" | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
echo "INSERT INTO public.skill(name, updated_at) VALUES ('Pigmentação', '2021-09-24');" | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
echo "INSERT INTO public.skill(name, updated_at) VALUES ('Desenho', '2021-09-24');" | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
sleep 3;

# create extension uuid-ossp 
# echo 'DROP TABLE $TABLES CASCADE;' | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
# echo "\l" | docker exec -i $CONTAINER psql -U postgres
# echo "\dt" | docker exec -i $CONTAINER psql -U postgres