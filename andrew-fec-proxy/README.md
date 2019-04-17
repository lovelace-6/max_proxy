# Bookshelf(Andrew) Local Proxy Server

> Proxy server proxying requests to four module severs.
> Module instances contained in modules folder.
> Html serves 4 bundles.

## Related Projects

hrr37-hermes-4 group repos
> https://github.com/hrr37-hermes-4

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
Runs 5 servers on 5 different ports:
> Main (Kaz) module server- PORT 3002

> Details (Andrew) module server- PORT 3001

> Authors (Ginger) module server- PORT 3000

> Reviews (Hannah) module server- PORT 3003

> Proxy server - PORT 3005

Once servers are running:
> localhost:3005/books/:id endpoint shows page with all modules (id ranges from 1-100)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory of all modules included in modules folder
  > npm install && npm run seed && npm run start:dev

From within the root directory of proxy server:
  > npm install && npm run start:proxy

Note: proxy server and andrews-module also has grunt commands avialable
  > refer to respective Gruntfile.js files for list of commands
