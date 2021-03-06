![turing-microservice](doc/img/logo.png)

# turing-microservice

[![build](https://travis-ci.org/otto-de/turing-microservice.svg)](https://travis-ci.org/otto-de/turing-microservice)
[![coverage](https://coveralls.io/repos/otto-de/turing-microservice/badge.svg?branch=master&service=github)](https://coveralls.io/github/otto-de/turing-microservice?branch=master)
[![bitHound](https://www.bithound.io/github/otto-de/turing-microservice/badges/score.svg)](https://www.bithound.io/github/otto-de/turing-microservice)
[![dependencies](https://img.shields.io/david/otto-de/turing-microservice.svg)](https://david-dm.org/otto-de/turing-microservice)
[![devDependencies](https://img.shields.io/david/dev/otto-de/turing-microservice.svg)](https://david-dm.org/otto-de/turing-microservice#info=devDependencies)
[![version](https://img.shields.io/npm/v/turing-microservice.svg)](https://www.npmjs.com/package/turing-microservice)
[![license](https://img.shields.io/npm/l/turing-microservice.svg)](./LICENSE)

> "We can only see a short distance ahead, but we can see plenty there that needs to be done."<br/>- Alan Turing

A common basis for Node.js microservices.

## Breaking Changes

_turing-microservice_ is a work in progress. See [CHANGELOG.md](./CHANGELOG.md) for instructions on breaking changes.

## Features

- config module: Adds hierarchical configuration with files, environment variables and command-line arguments.
- health module: Adds an express route for an health check.
- logging module: Adds multi-transport async logging.
- mongo module: Adds a port to mongodb.
- server module: Adds an express server.
- status module: Adds aggregation of sub-statuses and express routes for an html and json status report.
- vault module: Adds a promise for merging secrets from vault with config.

next up:
- toggles module: Adds feature-toggles support.
  - toggles-mongo module: Adds toggle persistence to mongodb.
- jobs module: Adds jobs support.
  - jobs-mongo module: Adds jobs persistence to mongodb.
- hmac module: Adds middleware for hmac authentication.
- metrics module: Adds metrics support. (e.g. RAM, CPU,...)
- cache module: Adds application cache support.

### Example: _turing-example_

Contains tasks for:
- watch: Provides live reloading of code during development.
- test: Test server and client side.
- build: Build production assets with service-worker caching and offline support.
- start: Start the server in production mode.

## Setup

Install dependencies:

    $ npm install && npm run bootstrap

## Testing

    $ npm test

## Dependency Update

Client dependencies:

    $ npm-check -E -u

## Contributors

- Benedikt Stemmildt

## License

Apache-2.0
