#!/bin/bash
set -e

echo "Run insert skill";
echo "INSERT INTO public.skill(name, updated_at) VALUES ('Cabelo', '2021-09-24');" | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
echo "INSERT INTO public.skill(name, updated_at) VALUES ('Barba', '2021-09-24');" | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
echo "INSERT INTO public.skill(name, updated_at) VALUES ('Sombrancelha', '2021-09-24');" | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
echo "INSERT INTO public.skill(name, updated_at) VALUES ('Pigmentação', '2021-09-24');" | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
echo "INSERT INTO public.skill(name, updated_at) VALUES ('Desenho', '2021-09-24');" | docker exec -i $(docker ps --filter name=postgres-container --format "{{.ID}}") psql -U postgres
sleep 3;