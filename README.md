
<h1 align="center">Orders app</h1>
<br/>

## Description

Simple application which acceptes orders, returns existing ones and provide three custom endpoints with aggregated data.

### Comment:
``/most-often-bought-yesterday`` uses aggregates. While it could have been done using the same technique as other two endpoints it was deliberate action to present different approach.

### Without time constraint the following refactor/modify/add would be desirable:
- Authentication app (JWT tokens). Separate microservice.
- Ingestor. To fill up the DB on start. 
- Queues with Kafka or RabittMQ.
- Full test coverage.
- Caching for even better response times.


## Running the app with docker

```bash
$ docker-compose up --build -V -d
```
## API

``` 
http://localhost:3000/api
```
## Installation

```bash
$ yarn install
```

## Running the app locally

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```


## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Main technologies used

- Nest.js
- TypeScript
- MongoDB
- Docker
- Jest
- Swagger


## License

Nest is [MIT licensed](LICENSE).
