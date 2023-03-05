---
sidebar_position: 2
---

# Understanding Project Structure

Nest.js is progressive Node.js framework for building efficient, reliable and scalable server-side applications. The `Server` project structure follows the default `Nest.js` domain-driven, modular based structure.

## Directories Overview

```
.
├── dist                        # Compiled files
|
├── node_modules                # Packages
|
├── src                         # Source files
│   ├── common
│   │   ├── decorators              # custom decorators
│   │   │   ├── role.decorator.ts
│   │   │   └── user.decorator.ts
│   │   ├── middlewares             # middlewares
│   │   └── utils                   # common helper functions
|   |
│   ├── entities
│   │   ├── index.ts                # imports and exports all entities
│   │   ├── users.entity.ts         # single TypeORM entity
│   │   └── ...
|   |
│   ├── modules
│   │   ├── auth
│   │   │   ├── services
│   │   │   ├── controllers
│   │   │   ├── guards
│   │   │   ├── serializers
│   │   │   ├── strategies
│   │   │   ├── utils                   # domain specific utils
│   │   │   └── auth.module.ts
│   │   ├── users
│   │   │   ├── services
│   │   │   ├── controllers
│   │   │   ├── dto
│   │   │   ├── exceptions
│   │   │   ├── filters
│   │   │   └── user.module.ts
│   │   └── ...
|   |
│   ├── configs                 # custom configs for app.module.ts
|   |
│   ├── app.module.ts               # root module
│   └── main.ts                     # entry file that creates a Nest application instance
|
└── test                        # Automated E2E tests
```

<br />

## Nest.js Basics

Learn about Nest.js Fundamentals at https://docs.nestjs.com/first-steps.

<br />

## TypeORM

This project is set up to use `TypeORM`. You can learn about TypeORM at https://typeorm.io/, and the TypeORM integration in Nest.js at https://docs.nestjs.com/techniques/database.

The `TypeORM` config is in `src/configs/ormconfig.ts` and is loaded in `src/app.module.ts`
