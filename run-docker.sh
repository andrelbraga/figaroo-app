#!/bin/bash
set -e

echo "docker build -t <image_name> .";
docker build -t  andrelbraga/figaroo-dev . 
sleep 3;

echo "docker push <image_name>";
docker push andrelbraga/figaroo-dev 
sleep 3;