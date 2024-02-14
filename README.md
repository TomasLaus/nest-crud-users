# NestJS CRUD API
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest




## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Running the app](#running-the-app)

## General Information

- NestJS CRUD API with authorization and End-2-end tests

## Technologies Used

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/)

## Features

List the ready features here:

- Signup
- Signin
- Get user data
- Edit user data
- Create bookmark
- Get bookmark by id
- Get bookmarks
- Edit bookmark
- Delete bookmark

## Setup

```bash
$ npm i
```

#### Running the app

```bash
# development (localhost:3335)
$ npm run db:dev:restart
$ npm start
``` 

```bash
# run tests
$ npm run db:test:restart
$ npm run test:e2e
```

```bash
# prisma studio
$ npx prisma studio
```
