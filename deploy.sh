#!/bin/bash

echo "deploy script"

git pull

yarn install

yarn build

pm2 reload next
