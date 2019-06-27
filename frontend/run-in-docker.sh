#!/bin/bash

docker build -t frontend . &&
docker run -it -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm frontend
