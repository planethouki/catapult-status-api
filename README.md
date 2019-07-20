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



## note

Depending on the codename you use, please change `Dockerfile`.

alpaca

```
FROM techbureau/catapult-tools:gcc-0.1.0.2
```

bison

```
FROM techbureau/catapult-tools:gcc-0.2.0.2
```

cow

```
FROM techbureau/catapult-tools:gcc-0.3.0.2
```

dragon

```
FROM techbureau/catapult-tools:gcc-0.4.0.1
```

elephant (default)

```
FROM techbureau/catapult-tools:gcc-0.5.0.1
```