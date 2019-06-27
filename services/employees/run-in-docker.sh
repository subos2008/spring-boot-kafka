#!/bin/bash

TAG=employees

docker build -t ${TAG} . &&
docker run -it -p 8080:8080 --rm ${TAG}
