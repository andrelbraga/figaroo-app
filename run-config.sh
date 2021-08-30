#!/bin/bash
set -e

TABLES="customer, employe, employer, merchant, user, address, customer_has_employe, ";
PW="dbmaster";
DB="postgres";

echo "exclude old migrations";
docker-compose run --rm app-dev rm -rf src/migrations/** 
sleep 3;

echo "generate migration";
docker-compose run --rm app-dev npm run typeorm:migration:generate 
sleep 3;

echo "exclude tables";
echo 'DROP SCHEMA public CASCADE;' | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres 
sleep 3;

echo "create schemas";
echo 'CREATE SCHEMA public;' | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres 
sleep 3;

echo "create extensions";
echo 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";' | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres 
sleep 3;

echo "grant permissions";
echo 'GRANT ALL ON SCHEMA public TO postgres;' | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
echo 'GRANT ALL ON SCHEMA public TO public;' | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
sleep 3;

echo "run migration";
docker-compose run --rm app-dev npm run typeorm:migration:run 
sleep 3;

# create extension uuid-ossp 
# echo 'DROP TABLE $TABLES CASCADE;' | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
# echo "\l" | docker exec -i $CONTAINER psql -U postgres
# echo "\dt" | docker exec -i $CONTAINER psql -U postgres