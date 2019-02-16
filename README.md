# catapult-status-api

## usage

start catapult-service-bootstrap

clone repo

```
cd dockerfiles
git clone https://github.com/planethouki/catapult-status-api.git status-api
```

docker-compose.yml

```
  status-api:
    build: dockerfiles/status-api
    command: ["npm", "start"]
    stop_signal: SIGINT
    volumes:
    - ./build/catapult-config/peer-node-0/userconfig/resources/:/userconfig/resources/
    - ./data/status-api:/data:rw
    ports:
    - "3500:3000"
```

start

```
docker-compose up -d --build status-api
```

access

```
curl http://localhost:3500/health
curl http://localhost:3500/network
```