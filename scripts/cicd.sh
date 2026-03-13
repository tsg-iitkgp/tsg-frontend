#!/bin/bash

# Make sure we are in the correct directory
cd /home/techcoordi/tsg-site/frontend || exit 1

# Sync with remote repository
git fetch origin
git reset --hard origin/main

# Build Stage
sudo docker build -t tsg-iitkgp/tsg-frontend .

# Deploy Stage
sudo docker-compose down
sudo docker-compose up -d
